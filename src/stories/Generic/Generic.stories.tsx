import { data as data0 } from "../../data/Set1/0.json";
import { data as data1 } from "../../data/Set1/1.json";
import Generic from "../../Components/Generic/Generic";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Generic",
  component: Generic,
} as Meta;

const Template: Story = ({ keyValue, data, ...args }) => (
  <Generic keyValue={keyValue} data={data} {...args} />
);

export const firstDataSet = Template.bind({});
firstDataSet.args = { keyValue: "domain", data: data0 };

export const secondDataSet = Template.bind({});
secondDataSet.args = { keyValue: "domain", data: data1 };
