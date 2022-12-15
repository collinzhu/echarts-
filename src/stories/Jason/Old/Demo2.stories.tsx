import Demo2 from "../../../Components/Jason/Old/Demo2";
import { Story, Meta } from "@storybook/react";

export default {
  title: "OLD/Old/Demo2",
  component: Demo2,
} as Meta;

const Template: Story = (args) => <Demo2 {...args} />;

export const basic = Template.bind({});
basic.args = {};
