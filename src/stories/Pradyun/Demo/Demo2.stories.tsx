import ReactECharts from 'echarts-for-react'
import { Story, Meta } from '@storybook/react'
import senderData from '../../../data/Set1/11.json'
import receiveData from '../../../data/Set1/12.json'

type prototype = {
    "unknown:size": number,
    "deny_policy:count": number,
    "address": string,
    "clean:size": number,
    "deny_policy:size": number,
    "threat:count": number,
    "allow_policy:size": number,
    "clean:count": number,
    "allow_policy:count": number,
    "spam:count": number,
    "spam:size": number,
    "unknown:count": number,
    "threat:size": number
}

// type keys = "unknown:size"|"deny_policy:count"|"address"|"clean:size"|"deny_policy:size"|"threat:count"|"allow_policy:size"|"clean:count"|"allow_policy:count"|"spam:count"|"spam:size"|"unknown:count"|"threat:size"
const protkeys = [ "deny_policy:count", "clean:size", "deny_policy:size", "threat:count", "allow_policy:size", "clean:count", "allow_policy:count", "spam:count", "spam:size", "unknown:count", "threat:size"]

export const parameters = {
    viewport: { 
        viewports: {
            custom: {
                name: 'Kindle Fire 2',
                styles: {
                  width: '2560px',
                  height: '1440px',
                },
              },
        }
     },
  };

// Overlap of outbound and inbound top users
export default {
    title: 'Pradyun/Demo2',
    component: ReactECharts
} as Meta

const Template: Story = ({ options, ...args }) => (
    
    <ReactECharts option={options} {...args} />

);

const [overlap, unique, send, rec] = prepareData()

export const SenderComposition = Template.bind( {} );
SenderComposition.args = {
    options: {
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
              saveAsImage: {}
            }
          },
        // legend: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: unique,
            axisLabel: {
                rotate: 45
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