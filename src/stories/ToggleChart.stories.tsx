import ToggleChart from "../Components/ToggleChart";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Toggle/ToggleChart",
  component: ToggleChart,
} as Meta;

const Template: Story = (args) => <ToggleChart {...args} />;

export const basic = Template.bind({});
basic.args = {};
