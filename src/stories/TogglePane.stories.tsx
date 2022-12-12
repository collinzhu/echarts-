import TogglePane from "../Components/TogglePane";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Toggle/TogglePane",
  component: TogglePane,
} as Meta;

const Template: Story = (args) => <TogglePane {...args} />;

export const basic = Template.bind({});
basic.args = {};
