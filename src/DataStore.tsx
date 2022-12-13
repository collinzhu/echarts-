import axios from "axios"

export class DataStore {

    // singleton to share data across all graphs
    public static global = new DataStore()

    private constructor() {}

    // store for any data, acting like a cache
    private store = new Map<number, object>()

    public async request(customer: number|string, requestID: string): Promise<object> {
        // base API URL
        const baseURL = "https://portal.smxemail.com/api/customer/"

        // TODO: form URL for API

        // make a unique hash for the customerID and requestID combination, to avoid giving data to the wrong customer
        const key = hash( (customer + requestID).trim() )

        // if the store does not contain the id, fetch data from api and keep it in the store
        if (!this.store.has(key)) {
            await axios.get(baseURL + customer + requestID)
                            .then( (result) => {
                                this.store.set(key, result.data)
                            })
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

