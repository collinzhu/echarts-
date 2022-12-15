"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import ReactECharts from 'echarts-for-react'
// import { Story, Meta } from '@storybook/react'
var _14_json_1 = __importDefault(require("../../../data/Set1/14.json"));
// Unused policies, coloured by severity
// export default {
//     title: 'Pradyun/Demo1',
//     component: ReactECharts
// } as Meta
// const Template: Story = ({ options, ...args }) => (
//     <ReactECharts option={options} {...args} />
// );
// export const UnusedPoliciesSeverity = Template.bind( {} );
// UnusedPoliciesSeverity.args = { 
//     options: {
//     }
// }
function prepareData() {
    var data = _14_json_1["default"].data;
    // unique policies 
    var policyActions = data.map(function (e) { return e.policyaction; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    console.log(policyActions);
}
prepareData();
