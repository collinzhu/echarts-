import Demo1 from "../../../Components/Jason/Old/Demo1";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Unused Policies",
  component: Demo1,
} as Meta;

let colorTheme = [
  "#003F5C",
  "#2F4B7C",
  "#665191",
  "#A05195",
  "#D45087",
  "#F95D6A",
  "#FF7C43",
  "#FFA600",
];

const Template: Story = (args) => <Demo1 {...args} />;

export const basic = Template.bind({});
basic.args = { color: colorTheme };
