import React from "react";
import ReactEcharts from "echarts-for-react";
import theme from "../../data/theme.json";
import { registerTheme } from "echarts";

interface ISmartRuleHitsCount {
  srd: any[];
}

// let data = [
//     ['product', '2015'],
//     ['Matcha Latte', 43.3],
//     ['Milk Tea', 83.1],
//     ['Cheese Cocoa', 86.4],
//     ['Walnut Brownie', 72.4]
//   ]
function SmartRuleHitsCount(props: ISmartRuleHitsCount) {
  let ok = props.srd;
  // console.log("data", ok);
  const yes = ok.map((data) => ({
    name: data.rule,
    value: data.executioncount,
  }));
  //console.log("yes",yes);

  let haha = [
    { name: "Inbound - Quarantine Unscannable Attachments", value: 2969 },
    { name: "Inbound - Quarantine Executables", value: 76 },
    { name: "Inbound - Quarantine Suspicious Attachments", value: 12 },
    {
      name: "Bypass Offensive Content Filter for Scheduled Reports",
      value: 26338,
    },
    { name: "Inbound - Explicit Address Block List", value: 7712 },
    { name: "Inbound - Bypass Explicit Address Block List", value: 619 },
    { name: "Gmail Spam", value: 111 },
    { name: "Drop Emails", value: 136 },
    { name: "Inbound - Strip oledata files", value: 60 },
    { name: "Whaling Protection", value: 2 },
    { name: "icloud Spam", value: 7 },
  ];
  const head = ["rule", "rules"];
  const body = haha.map((data) => {
    return [data.name, data.value];
  });
  console.log(body);

  const data = [head, ...body];
  const option = {
    title: {
      text: "Smart Rules by Hit-Count",
      subtext: "Displays the total hit-count for each Smart Rule",
      left: "center",
      top: 10,
    },
    legend: {
      bottom: 10,
    },
    tooltip: {},
    dataset: {
      source: data,
    },
    grid: {
      containLabel: true,
    },
    xAxis: {},
    yAxis: {
      type: "category",
      axisLabel: {
        rotate: 10,
      },
    },
    series: [{ type: "bar" }],
  };

  registerTheme("theme", theme);

  return (
    <div>
      <ReactEcharts option={option} style={{ height: 600 }} theme="theme" />
    </div>
  );
}

export default SmartRuleHitsCount;
