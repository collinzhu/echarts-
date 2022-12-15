import PieChart from "../../Components/Collin/PieChart";
import { Story, ComponentMeta } from "@storybook/react";
import data from "../../example/14.json";

export default {
  title: "OLD/Piechart",
  component: PieChart,
};
let colorTheme = [
      '#003F5C',
      '#2F4B7C',
      '#665191',
      '#A05195',
      '#D45087',
      '#F95D6A',
      '#FF7C43',
      '#FFA600'
]

let colorTheme1 = [
  '#004C6D',
  '#296080',
  '#437594',
  '#5D8BA9',
  '#75A1BE',
  '#8EB8D3',
  '#A7CFE9',
  '#C1E7FF'
]
const Template: Story<typeof PieChart> = (args) => (
  <PieChart up={[]} color = {[]}{...args} />
);

export const sample1 = Template.bind({});
sample1.args = {
  up: data.data,
  color: colorTheme
};
export const sample2 = Template.bind({});
sample2.args = {
  up: data.data,
  color: colorTheme1
};
