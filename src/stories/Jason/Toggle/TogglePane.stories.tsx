import TogglePane from "../../../Components/Jason/Toggle/TogglePane";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Toggle/Pane",
  component: TogglePane,
} as Meta;

const Template: Story = (args) => (
  <TogglePane onChange={() => console.log("changed")} {...args} />
);

export const basic = Template.bind({});
basic.args = {};
