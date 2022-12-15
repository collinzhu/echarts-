import SmartRuleHitsCount from "../../Components/Collin/SmartRuleHitsCount";
import { Story, ComponentMeta } from "@storybook/react";

export default {
  title: "Smart Rules by Hit Count",
  component: SmartRuleHitsCount,
};

const Template: Story<typeof SmartRuleHitsCount> = (args) => (
  <SmartRuleHitsCount srd={[]} {...args} />
);

//   sample1.args = {
//     up: data.data
// }
export const sample1 = Template.bind({});
