import TypeOfEvent from "../Components/TypeOfEvent";
import { Story, ComponentMeta } from '@storybook/react';

export default{
    title:"TypeOfEvent",
    component: TypeOfEvent,
};

const Template : Story<typeof TypeOfEvent> = (args) => (
    <TypeOfEvent inbound={[]} outbound = {[]} {...args}/>
)

export const sample1 = Template.bind({});
// sample1.args = {
//     up: data.data
// }