
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
 * @param mapper Optional map function to be run before any filtering happens
 * 
 * ### Example
 * ```
 * import file from 'data/11.json'
 * import echartsify from 'Transformer'
 * 
 * const [x, y] = echartsify(file.data, 'clean:count', 'address')
 * ```
 * 
 *  
 */
export default function echartsify(
    inputData: {[key: string]: string|number}[],
    xKey: string,
          
    yKey: string,
    mapper: ( (val: Object) => Object ) = ( val => { return val } ),
    ) {

    const types = inputData.keys

    // 1. preprocess using parameters
    let data: {}[] = inputData.map(mapper)
    
    // 2. extract keys from data
    let xData: any[] = []
    let yData: any[] = []

    data.forEach( (val) => {
        xData.push(val[xKey])
        yData.push(val[yKey])
    })
    
    return [xData, yData]
}