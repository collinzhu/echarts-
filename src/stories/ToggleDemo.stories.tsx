import ToggleDemo from "../Components/ToggleDemo";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Toggle/ToggleDemo",
  component: ToggleDemo,
} as Meta;

const Template: Story = (args) => <ToggleDemo {...args} />;

export const basic = Template.bind({});
basic.args = {};
