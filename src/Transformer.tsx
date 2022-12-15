

/**
 * Transform SMX data to the ECharts format, designed to be as flexible as possible
 * @param data 
 * @param xKey 
 * @param yKey 
 */
export default function echartsify(
    inputData: Object[] | void[],
    xKey: string,
    yKey: string,
    preprocess: (Object) => void | Object = () => {},
    // postprocess: (Object) => void = () => {}
    ) {

    // 1. preprocess using parameter
    const data = inputData.map(preprocess)

    
}