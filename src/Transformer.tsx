
/* SMX format
{
    id: number
    isEmpty: bool
    title: string
    data: object[]
}
*/

/**
 * Transform SMX data to the ECharts format, designed to be as flexible as possible
 * @param data The `data` field from an SMX API request.
 * @param xKey The key to be used for the X Axis
 * @param yKey The key to be used for the Y Axis
 * @param mapper Optional mapper function to be run before any filterng happens
 */
export default function echartsify(
    inputData: Object[],
    xKey: string,
    yKey: string,
    mapper?: (val: Object) => Object,
    ) {

    // 1. preprocess using parameters
    let data: Object[]
    if (mapper !== undefined) {
        data = inputData.map(mapper)
    } else {
        data = inputData
    }
    
    // 2. extract keys from data
    let xData: (number|string)[] = []
    let yData: (number|string)[] = []

    data.forEach( (val) => {
        xData.push(val[xKey])
        yData.push(val[yKey])
    })
    
    return [xData, yData]
}