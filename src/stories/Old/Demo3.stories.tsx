import Demo3 from "../../Components/Old/Demo3";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Old/Demo3",
  component: Demo3,
} as Meta;

const Template: Story = (args) => <Demo3 {...args} />;

export const basic = Template.bind({});
basic.args = {};
