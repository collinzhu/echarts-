import TimeInboundSpam from "../../Components/Collin/TimeInboundSpam";
import { Story, ComponentMeta } from "@storybook/react";
import data from '../../data/Set1/4.json'



let colorTheme = 
['#003F5C',
'#2F4B7C',
'#665191',
'#A05195',
'#D45087',
'#F95D6A',
'#FF7C43',
'#FFA600']
export default {
    title: "TimeInboundSpam",
    component: TimeInboundSpam,
};


const Template: Story<typeof TimeInboundSpam> = (args) => (
    <TimeInboundSpam tis={[]} color = {[]} {...args} />
  );

  export const sample1 = Template.bind({});

 
  sample1.args = {
   tis:data.data,
   color:colorTheme
}