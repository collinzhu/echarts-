import ToggleChart from "../../Components/Toggle/ToggleChart";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Toggle/Chart",
  component: ToggleChart,
} as Meta;

const Template: Story = (args) => <ToggleChart {...args} />;

export const toggled = Template.bind({});
toggled.args = { toggle: true };

export const notToggle = Template.bind({});
notToggle.args = { toggle: false };
