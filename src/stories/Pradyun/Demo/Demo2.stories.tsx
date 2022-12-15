import ReactECharts from 'echarts-for-react'
import { Story, Meta } from '@storybook/react'
import senderData from '../../../data/Set1/11.json'
import receiveData from '../../../data/Set1/12.json'
import EChartsReact from 'echarts-for-react'

const protkeys = [ "deny_policy:count", "clean:size", "deny_policy:size", "threat:count", "allow_policy:size", "clean:count", "allow_policy:count", "spam:count", "spam:size", "unknown:count", "threat:size"]

// Overlap of outbound and inbound top users
export default {
    title: 'Pradyun/Demo2',
    component: EChartsReact
} as Meta

const Template: Story = ({ options, ...args }) => (
    <EChartsReact option={options} style={{ height: 750 }} {...args} />
);

const [overlap, unique, send, rec] = prepareData()

export const SenderComposition = Template.bind( {} );
SenderComposition.args = {
    options: {
        // height: 400,
        title: {
            text: 'Top ten sending users'
        },
        grid: {
            bottom: 200,
            top: 50
        },
        toolbox: {
            right: 10,
            feature: {
                saveAsImage: {},
                magicType: { show: true, type: ['bar', 'stack'] },
            }
          },
        legend: { right: 10, top: 50, orient: 'vertical' },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: senderData.data.map( val => val.address ),
            axisLabel: {
                rotate: 35
            }
        },
        yAxis: {
            type: 'value'
        },
        series: send
    }
}

function prepareData() {
    const send = senderData.data
    const rec = receiveData.data
    // shh
    send[0].address = '(null sender)'

    // find all overlapping addresses
    const overlap = send.map( val => val.address ).filter( val => rec.map(v => v.address).includes(val) )

    // remove the overlapping ones then add them back in
    const unique = send.concat(rec).map( val => val.address ).filter(val => !overlap.includes(val) )
    overlap.forEach(val => unique.push(val))

    type series = {
        name: string,
        type: 'bar',
        stack: 'total',
        // label: { show: true },
        emphasis: { focus: 'series' },
        data: number[]
    }

    const sendSeries: series[] = []
    const recSeries: series[] = []
    
    protkeys.forEach( key => {
        sendSeries.push({
            name: key,
            type: 'bar',
            stack: 'total',
            // label: { show: true },
            emphasis: { focus: 'series' },
            data: getValueForKey(send, key)
        })

        recSeries.push({
            name: key,
            type: 'bar',
            stack: 'total',
            // label: { show: true },
            emphasis: { focus: 'series' },
            data: getValueForKey(rec, key)
        })
    })
     

    return [
        overlap,
        unique,
        sendSeries,
        recSeries
    ]
}

function getValueForKey(arr: any[], key: string) {
    const ret = []

    for (let i = 0; i < arr.length; i++) {
        ret.push( arr[i][key] )
    }

    return ret
} 