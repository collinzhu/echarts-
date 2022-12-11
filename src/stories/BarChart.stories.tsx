import BarChart from "./BarChart";
import { Story, ComponentMeta } from '@storybook/react';


const sample = [
        {
            "totalthreat": 0,
            "totaldenypolicy": 0,
            "domain": "fbl.vadesecure.com",
            "totalspam": 0,
            "totalclean": 72,
            "totalallowpolicy": 357
        },
        {
            "totalthreat": 0,
            "totaldenypolicy": 2,
            "domain": "report.smxemail.com",
            "totalspam": 0,
            "totalclean": 68,
            "totalallowpolicy": 0
        },
        {
            "totalthreat": 0,
            "totaldenypolicy": 0,
            "domain": "feedback.cloudmark.com",
            "totalspam": 0,
            "totalclean": 0,
            "totalallowpolicy": 357
        },
        {
            "totalthreat": 0,
            "totaldenypolicy": 0,
            "domain": "servers.smxemail.com",
            "totalspam": 0,
            "totalclean": 0,
            "totalallowpolicy": 18162
        },
        {
            "totalthreat": 0,
            "totaldenypolicy": 0,
            "domain": "smxstatus.com",
            "totalspam": 2,
            "totalclean": 37,
            "totalallowpolicy": 0
        }
    
]
export default{
    title:'Barchart',
    component: BarChart
}

const Template: Story<typeof BarChart> = (args) => <BarChart imc = {sample}{...args} />;

export const sample1 = Template.bind({});
sample1.args = {
    imc:sample
}

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };