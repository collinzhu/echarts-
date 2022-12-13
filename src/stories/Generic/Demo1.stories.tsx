import Generic from "../../Components/Generic/Generic";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Generic",
  component: Generic,
} as Meta;

const Template: Story = (args) => <Generic {...args} />;

export const basic = Template.bind({});
basic.args = {};
