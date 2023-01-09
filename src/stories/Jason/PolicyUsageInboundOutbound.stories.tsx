import PolicyUsageInboundOutbound from "../../Components/Jason/PolicyUsageInboundOutbound";
import { data2 as inboundData } from "../../data/Set1";
import { data3 as outboundData } from "../../data/Set1";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Policy Usage Inbound and Outbound",
  component: PolicyUsageInboundOutbound,
} as Meta;

const Template: Story = ({ data, ...args }) => (
  <PolicyUsageInboundOutbound
    data={{
      inbound: inboundData.data,
      outbound: outboundData.data,
    }}
    {...args}
  />
);

export const basic = Template.bind({});
basic.args = {};
