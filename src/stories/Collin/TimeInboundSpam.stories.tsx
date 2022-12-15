import TimeInboundSpam from "../../Components/Collin/TimeInboundSpam";
import { Story, ComponentMeta } from "@storybook/react";

export default {
    title: "TimeInboundSpam",
    component: TimeInboundSpam,
};

const Template: Story<typeof TimeInboundSpam> = (args) => (
    <TimeInboundSpam tis={[]} color = {[]} {...args} />
  );

  export const sample1 = Template.bind({});