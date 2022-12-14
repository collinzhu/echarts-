import { data as data0 } from "../../../data/Set1/0.json";
import { data as data1 } from "../../../data/Set1/1.json";
import { data as data6 } from "../../../data/Set1/6.json";
import { data as data7 } from "../../../data/Set1/7.json";
import { data as data8 } from "../../../data/Set1/8.json";
import { data as data9 } from "../../../data/Set1/9.json";
import { data as data10 } from "../../../data/Set1/10.json";
import { data as data11 } from "../../../data/Set1/11.json";
import { data as data12 } from "../../../data/Set1/12.json";
import { data as data13 } from "../../../data/Set1/13.json";
import Generic from "../../../Components/Jason/Generic/Generic";
import { Story, Meta } from "@storybook/react";

export default {
  title: "OLD/Generic",
  component: Generic,
} as Meta;

const Template: Story = ({ keyValue, data, ...args }) => (
  <Generic keyValue={keyValue} data={data} {...args} />
);

export const demo1 = Template.bind({});
demo1.args = { keyValue: "domain", data: data0 };

export const demo2 = Template.bind({});
demo2.args = { keyValue: "domain", data: data1 };

export const demo6 = Template.bind({});
demo6.args = { keyValue: "address", data: data6 };

export const demo7 = Template.bind({});
demo7.args = { keyValue: "address", data: data7 };

export const demo8 = Template.bind({});
demo8.args = { keyValue: "address", data: data8 };

export const demo9 = Template.bind({});
demo9.args = { keyValue: "address", data: data9 };

export const demo10 = Template.bind({});
demo10.args = { keyValue: "address", data: data10 };

export const demo11 = Template.bind({});
demo11.args = { keyValue: "address", data: data11 };

export const demo12 = Template.bind({});
demo12.args = { keyValue: "address", data: data12 };

export const demo13 = Template.bind({});
demo13.args = { keyValue: "address", data: data13 };
