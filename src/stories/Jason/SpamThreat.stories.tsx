import SpamThreat from "../../Components/Jason/SpamThreat";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Spam and Threat",
  component: SpamThreat,
} as Meta;

const Template: Story = (args) => <SpamThreat {...args} />;

export const basic = Template.bind({});
basic.args = {};
