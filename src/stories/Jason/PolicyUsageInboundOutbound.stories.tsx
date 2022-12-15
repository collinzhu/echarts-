import PolicyUsageInboundOutbound from "../../Components/Jason/PolicyUsageInboundOutbound";
import { data as inboundData } from "../../data/Set1/2.json";
import { data as outboundData } from "../../data/Set1/3.json";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Policy Usage Inbound and Outbound",
  component: PolicyUsageInboundOutbound,
} as Meta;

const Template: Story = ({ data, ...args }) => (
  <PolicyUsageInboundOutbound
    data={{
      inbound: inboundData,
      outbound: outboundData,
    }}
    {...args}
  />
);

export const basic = Template.bind({});
basic.args = {};
