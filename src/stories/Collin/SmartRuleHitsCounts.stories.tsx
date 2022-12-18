import SmartRuleHitsCount from "../../Components/Collin/SmartRuleHitsCount";
import { Story, ComponentMeta } from "@storybook/react";
import data from '../../data/Set1/4.json'
export default {
    title: "smartRuleHitsCount",
    component: SmartRuleHitsCount,
};


let colorTheme = 
['#003F5C',
'#2F4B7C',
'#665191',
'#A05195',
'#D45087',
'#F95D6A',
'#FF7C43',
'#FFA600']

const Template: Story<typeof SmartRuleHitsCount> = (args) => (
    <SmartRuleHitsCount srd={[]} color ={[]} {...args} />
  );
  
  export const sample1 = Template.bind({});
  sample1.args = {
    up: data.data,
    color: colorTheme
}