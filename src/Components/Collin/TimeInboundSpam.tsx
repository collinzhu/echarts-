import React from "react";
import ReactEcharts from "echarts-for-react";

interface ITimeInboundSpam{
    color: any[];
    tis: any[];
}

function TimeInboundSpam(props:ITimeInboundSpam){
    let ok = props.tis
    // console.log("data", ok);
     const yes = ok.map(data =>({
       'name': data.date, 'value': data.executioncount
     }))
    // console.log("yes", yes);
     let haha = 
     [ { name: '1668337200000', value: 860 },
     { name: '1668423600000', value: 1727 },
     { name: '1668510000000', value: 1538 },
     { name: '1668596400000', value: 1571 },
     { name: '1668682800000', value: 1767 },
     { name: '1668769200000', value: 391 },
     { name: '1668855600000', value: 36 },
     { name: '1668942000000', value: 2258 },
     { name: '1669028400000', value: 1799 },
     { name: '1669114800000', value: 1592 },
     { name: '1669201200000', value: 1727 },
     { name: '1669287600000', value: 2081 },
     { name: '1669374000000', value: 183 },
     { name: '1669460400000', value: 135 },
     { name: '1669546800000', value: 1393 },
     { name: '1669633200000', value: 1656 },
     { name: '1669719600000', value: 1612 },
     { name: '1669806000000', value: 1443 },
     { name: '1669892400000', value: 1673 },
     { name: '1669978800000', value: 566 },
     { name: '1670065200000', value: 273 },
     { name: '1670151600000', value: 1413 },
     { name: '1670238000000', value: 1621 },
     { name: '1670324400000', value: 1805 },
     { name: '1670410800000', value: 1722 },
     { name: '1670497200000', value: 1546 },
     { name: '1670583600000', value: 394 },
     { name: '1670670000000', value: 61 },
     { name: '1670756400000', value: 1130 },
     { name: '1670842800000', value: 1261 },
    { name: '1670929200000', value: 808 } ]
     var dateFormat= new Date('1670929200000');

   const oo = haha.map(data =>({
        'name': +data.name, 'value': data.value
      }))
    // console.log(oo);

     let sort =  oo.sort(function(x:any, y:any){
        return x.timestamp - y.timestamp;
    })
    //  let p = +'1670929200000'
      //var dateFormat= new Date(+'1670929200000');
    // console.log(dateFormat);
     //let u = dateFormat.toString();
     //var formatted = u.split(' ').slice(1, 4).join(' ');
     //console.log(formatted);

     function demo(val:any): string{
        var dateFormat= new Date(+val);
        let u = dateFormat.toString();
        var format = u.split(' ').slice(1, 4).join(' ');
        return format ;
        }
       // console.log("////////////////////////////")
       // console.log(demo('1670929200000'));
    // let sort = [ { name: '1668337200000', value: 860 },
    // { name: '1670929200000', value: 808 },
    // { name: '1668510000000', value: 1538 },
    // { name: '1668596400000', value: 1571 },
    // { name: '1668682800000', value: 1767 },
    // { name: '1668769200000', value: 391 },
    // { name: '1668855600000', value: 36 },
    // { name: '1668942000000', value: 2258 },
    // { name: '1669028400000', value: 1799 },
    // { name: '1669114800000', value: 1592 },
    // { name: '1669201200000', value: 1727 },
    // { name: '1669287600000', value: 2081 },
    // { name: '1669374000000', value: 183 },
    // { name: '1669460400000', value: 135 },
    // { name: '1669546800000', value: 1393 },
    // { name: '1668423600000', value: 1727 },
    // { name: '1669719600000', value: 1612 },
    // { name: '1669806000000', value: 1443 },
    // { name: '1669892400000', value: 1673 },
    // { name: '1669978800000', value: 566 },
    // { name: '1670065200000', value: 273 },
    // { name: '1670151600000', value: 1413 },
    // { name: '1670238000000', value: 1621 },
    // { name: '1670324400000', value: 1805 },
    // { name: '1670410800000', value: 1722 },
    // { name: '1670497200000', value: 1546 },
    // { name: '1670583600000', value: 394 },
    // { name: '1670670000000', value: 61 },
    // { name: '1670756400000', value: 1130 },
    // { name: '1670842800000', value: 1261 },
    // { name: '1669633200000', value: 1656 } ]
    //var formatted = dateFormat.to.split(' ').slice(1, 4).join(' ');
    const head = ["count", "hit of counts"]
    const body = sort.map((data) =>{
        return[
            demo(data.name),
            
            data.value
        ]
    })
    console.log("body", body);
    const data = [head,...body];
    const Option = {
        title:{
          text:"Amount of inbound spam messages",

        },
        color: props.color,
        legend: {},
        tooltip: {},
        dataset: {
          source: data,
        },
        xAxis: { 
            type: "category",
            axisLabel: {
                rotate: 30
            },
            fontSize: 30,
            fontFamily: 'Microsoft YaHei',
        },
        yAxis: { },
        series: [
          { type: "line" },
    
        ],
      };
    return(
        <div>
            <ReactEcharts option={Option} />;
        </div>
    )
}

export default TimeInboundSpam;
