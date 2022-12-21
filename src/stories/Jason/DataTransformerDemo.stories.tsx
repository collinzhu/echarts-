import DataTransformerDemo from "../../Components/Jason/DataTransformerDemo";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Data Transformer Demo",
  component: DataTransformerDemo,
  argTypes: {
    datastream: {
      options: ["data6", "data7", "data8", "data9", "data10"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story = ({ datastream, ...args }) => (
  <DataTransformerDemo datastream={datastream} {...args} />
);

export const basic = Template.bind({});
basic.args = { datastream: "data6" };
