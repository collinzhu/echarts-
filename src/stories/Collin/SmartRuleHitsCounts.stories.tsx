import SmartRuleHitsCount from "../../Components/Collin/SmartRuleHitsCount";
import { Story, ComponentMeta } from "@storybook/react";

export default {
    title: "smartRuleHitsCount",
    component: SmartRuleHitsCount,
};




const Template: Story<typeof SmartRuleHitsCount> = (args) => (
    <SmartRuleHitsCount srd={[]} color ={[]} {...args} />
  );
  
//   sample1.args = {
//     up: data.data
// }
  export const sample1 = Template.bind({});