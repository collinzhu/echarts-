import ThemeTest from "../../Components/Jason/ThemeTest";
import { Story, Meta } from "@storybook/react";

import { data as domainSender } from "../../data/Set1/7.json";
import { data as domainRecipient } from "../../data/Set1/8.json";
import { data as usersSender } from "../../data/Set1/11.json";
import { data as usersRecipient } from "../../data/Set1/12.json";

const data = {
  domain: {
    sender: domainSender,
    recipient: domainRecipient,
  },
  users: {
    sender: usersSender,
    recipient: usersRecipient,
  },
};

export default {
  title: "Theme Test",
  component: ThemeTest,
} as Meta;

const Template: Story = ({ data, scope, direction, ...args }) => (
  <ThemeTest data={data} scope={scope} direction={direction} {...args} />
);

export const basic = Template.bind({});
basic.args = { data, scope: "domain", direction: "sender" };
