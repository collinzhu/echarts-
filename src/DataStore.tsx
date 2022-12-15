import axios from "axios"
import data from './data/inbound-message-counts.json'

export enum Period {
    W1 = '1W',
    W2 = '2W',
    W3 = '3W',

    M1 = '1M',
    M2 = '2M',
    M3 = '3M',
    M6 = '6M',
}

export class DataStore {

    // singleton to share data across all graphs
    public static global = new DataStore()

    private constructor() {}

    // store for any data, acting like a cache
    private store = new Map<number, object>()

    // todo: write this better
    /**
     * Makes a request to the data store
     * @param customer The customerID of the customer
     * @param requestID The id of the report, eg 'smartrules-usage'
     * @param period The period of which the data is looked back on
     * @param baseTime The time at which to base the period look back
     * @returns An array of 
     */
    public async request(customer: number|string, requestID: string, period: Period, baseTime: number = Date.now()): Promise<object> {
        // base API URL
        const baseURL = "https://portal.smxemail.com/api/customer/"

        // TODO: form URL for API
        // main url
        let requestURL = `${baseURL}${customer}/reports/${requestID}`

        // url params
        requestURL += `?period=P${period}&basetimestamp=${baseTime}`

        requestURL = 'https://catfact.ninja/facts'

        // make a unique hash for the customerID and requestID combination, to avoid giving data to the wrong customer
        const key = hash( (customer + requestID + period).trim() )

        // if the store does not contain the id, fetch data from api and keep it in the store
        if (!this.store.has(key)) {
            // UNCOMMENT FOR REAL FETCH
            //  await axios.get(requestURL)
            //                 .then( (result) => {
            //                     this.store.set(key, result.data)
            //                 })
            
            // simulate latency
            await new Promise( resolve => setTimeout(resolve, 500))
            this.store.set(key, data)
        }

        return this.store.get(key) ?? { error: true }
    }

}

// hashing algorithm from https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
function hash(string: string) {     
    var hash = 0;
      
    if (string.length === 0) return hash;
      
    for (var i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
      
    return hash;
}

