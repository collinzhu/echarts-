import LineChart from "../Components/LineChart";
import { Story, Meta } from '@storybook/react';
import smartRuleUsage from '../../data/Set1/4.json'

export default {
    title: smartRuleUsage.title,
    component: LineChart
} as Meta

const props = {

}

const Template: Story<typeof LineChart> = (args) => (
    <div>
        <LineChart props={LCProps(props)}{...args} />
    </div>
)

export const LineChartExample = Template.bind({});
