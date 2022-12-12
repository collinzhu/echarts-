import ToggleDemo from "../../Components/Toggle/ToggleDemo";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Toggle/Full Demonstration",
  component: ToggleDemo,
  decorators: [
    (story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <ToggleDemo {...args} />;

export const basic = Template.bind({});
basic.args = {};
