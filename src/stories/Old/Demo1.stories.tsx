import Demo1 from "../../Components/Old/Demo1";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Old/Demo1",
  component: Demo1,
} as Meta;

const Template: Story = (args) => <Demo1 {...args} />;

export const basic = Template.bind({});
basic.args = {};