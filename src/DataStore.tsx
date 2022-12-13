import axios from "axios"

export class DataStore {

    // singleton to share data across all graphs
    public static global = new DataStore()

    private constructor() {}

    // store for any data, acting like a cache
    private store = new Map<string, string>()

    public async request(customer: number|string, requestID: string) {
        // base API URL
        const baseURL = "https://portal.smxemail.com/api/customer/"


        // if the store does not contain the id, fetch data from api and keep it in the store
        if (!this.store.has(requestID)) {

            await axios.get('http://ip.jsontest.com/')
                            .then( (result) => {
                                this.store.set(requestID, result.data.ip)
                            })
        }

        return this.store.get(requestID)!  // force unwrap okay bc we already know there should be something there
    }

}



