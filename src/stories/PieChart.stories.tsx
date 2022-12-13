import PieChart from "../Components/PieChart";
import { Story, ComponentMeta } from '@storybook/react';
import data from '../example/14.json'

export default{
    title:"Piechart",
    component: PieChart,
};

const Template : Story<typeof PieChart> = (args) => (
    <PieChart up = {[]} {...args}/>
)
    

export const sample1 = Template.bind({});
sample1.args = {
    up: data.data
}