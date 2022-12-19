import DataTransformerDemo from "../../Components/Jason/DataTransformerDemo";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Data Transformer Demo",
  component: DataTransformerDemo,
} as Meta;

const Template: Story = ({ datastream, ...args }) => (
  <DataTransformerDemo datastream={datastream} {...args} />
);

export const basic = Template.bind({});
basic.args = { datastream: "data6" };
