import ReactECharts from 'echarts-for-react'
import { Story, Meta } from '@storybook/react'
import data14 from '../../../data/Set1/14.json'
import data15 from '../../../data/Set1/15.json'
// import gradient from '../../../gradient.png'

// Unused policies, coloured by severity

function polToCol(pol: string): string {
    // severities
    const sev = ["#C1E7FF", "#A7CFE9", "#8EB8D3", "#5D8BA9", "#296080", "#004c6d"]

    switch (pol) {
        case 'ALLOW FROM USER':
            return sev[0]
        case 'ALLOW FROM DOMAIN':
            return sev[6]
        case 'ALLOW IP ADDRESS':
            return sev[4]
        case 'ALLOW TO DOMAIN':
            return sev[2]
        case 'ALLOW TO USER':
            return sev[1]
        case 'DENY FROM USER':
            return sev[3]
        case 'DENY FROM DOMAIN':
            return sev[5]
        default:
            return '#000';
    }
}

export default {
    title: 'Pradyun/Demo1',
    component: ReactECharts
} as Meta

const Template: Story = ({ options, ...args }) => (
    <div>
        <ReactECharts option={options} style={{ height: 500 }}{...args} />

        Less Severe <img src={ require('../../../gradient.png') } alt='gradient'/> More Severe
    </div>
);

const [actions, counts] = prepareData()

export const UnusedPoliciesSeverity = Template.bind( {} );
UnusedPoliciesSeverity.args = { 
    options: {
        title: {
            text: "Amount of Unused Policies (todo legend)"
        },
        legend: {},
        grid: {
            bottom: 105,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: actions,
            axisLabel: {
                rotate: 45
            }
        },
        yAxis: {
            type: 'value'
        },
        series: {
            data: counts,
            type: 'bar'
        }
    }
}

function prepareData() {
    const data = data14.data.concat(data15.data)

    // unique policies 
    const policyActions = data.map( e => e.policyaction ).filter( (v, i, a) => { return a.indexOf(v) === i })
    let counts: {policy: string, count: number}[] = []

    for (let i = 0; i < policyActions.length; i++) {
        const thisPolicy = policyActions[i]
        const count: number = data.filter( (v, _, _1) => { return v.policyaction === thisPolicy}).length
        counts.push({policy: thisPolicy, count: count})
    }

    let countsWithColours: { value: number, itemStyle: { color: string } }[] = []

    for (let i = 0; i < counts.length; i++) {
        const el = counts[i]

        countsWithColours.push({
            value: el.count,
            itemStyle: {
                color: polToCol(el.policy)
            }
        })
    }

    return [policyActions, countsWithColours]
}