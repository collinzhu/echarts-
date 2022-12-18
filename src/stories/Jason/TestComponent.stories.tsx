import TestComponent from "../../Components/Jason/TestComponent";
import { Story, Meta } from "@storybook/react";

export default {
  title: "TestComponent",
  component: TestComponent,
} as Meta;

const Template: Story = (args) => <TestComponent {...args} />;

export const basic = Template.bind({});
basic.args = {};
