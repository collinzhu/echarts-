import BarChart from "../Components/BarChart";
<<<<<<< HEAD
<<<<<<< HEAD
import { Story } from '@storybook/react';
=======
import { Story, ComponentMeta } from '@storybook/react';
import data from '../Data/inbound-message-counts.json'
>>>>>>> 3cf9ce5de58a1332e5824c2b0107e53ef0be6568
=======
import { Story, ComponentMeta } from '@storybook/react';
import data from '../example/inbound-message-counts.json'
>>>>>>> 4dd2d92543f66e5ea1e57e1608d9a7ab674350d4

const inbound = data.data

console.log(data.data);

const sample = [
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 4dd2d92543f66e5ea1e57e1608d9a7ab674350d4
  {
    totalthreat: 0,
    totaldenypolicy: 0,
    domain: "fbl.vadesecure.com",
    totalspam: 0,
    totalclean: 72,
    totalallowpolicy: 357,
  },
  {
    totalthreat: 0,
    totaldenypolicy: 2,
    domain: "report.smxemail.com",
    totalspam: 0,
    totalclean: 68,
    totalallowpolicy: 0,
  },
  {
    totalthreat: 0,
    totaldenypolicy: 0,
    domain: "feedback.cloudmark.com",
    totalspam: 0,
    totalclean: 0,
    totalallowpolicy: 357,
  },
  {
    totalthreat: 0,
    totaldenypolicy: 0,
    domain: "servers.smxemail.com",
    totalspam: 0,
    totalclean: 0,
    totalallowpolicy: 18162,
  },
  {
    totalthreat: 0,
    totaldenypolicy: 0,
    domain: "smxstatus.com",
    totalspam: 2,
    totalclean: 37,
    totalallowpolicy: 0,
  },
];
export default {
  title: "Barchart",
  component: BarChart,
};
<<<<<<< HEAD
>>>>>>> 3cf9ce5de58a1332e5824c2b0107e53ef0be6568
=======
>>>>>>> 4dd2d92543f66e5ea1e57e1608d9a7ab674350d4

const Template: Story<typeof BarChart> = (args) => (
  <BarChart imc={sample} {...args} />
);

export const sample1 = Template.bind({});
sample1.args = {
  imc: sample,
};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
