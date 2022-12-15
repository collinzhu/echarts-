import LineChart from "../Components/LineChart";
import { Story, Meta } from '@storybook/react';
import smartRuleUsage from '../../data/Set1/4.json'

export default {
    title: 'Line Charts',
    component: LineChart
} as Meta

const Template: Story<typeof LineChart> = (args) => (
    <div>
       {LineChart(smartRuleUsage.title, 'time', smartRuleUsage.data)}
    </div>
)

export const LC1 = Template.bind({});
