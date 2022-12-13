

export class DataStore {

    // singleton to share data across all graphs
    public static global = new DataStore()

    private constructor() {}

    // store for any data, acting like a cache
    private store = new Map<string, any>()

    public request(customer: number|string, id: string): string {

        // if the store does not contain the id, fetch data from api and keep it in the store
        if (!this.store.has(id)) {
            this.getDataFor(customer, id).then((data) => {
                this.store.set(id, data)
                
            })
        }
        console.log(this.store)
        return this.store.get(id)
    }


    private getDataFor(customer: number | string, id: string): Promise<string | void> {
        const baseURL = "https://portal.smxemail.com/api/customer/"

        // fetch('http://ip.jsontest.com/')
        //     .then((res) => {
        //         if (res.ok) {
        //             // return the data if network request successful
        //             return res.json().then((jsonData) => { data = jsonData })
        //             // data = res.json()
        //         }

        //     })

        return fetch('http://ip.jsontest.com/')
            .then((response) => response.json())
            .then((data) => {
                return data // :(
            });

    }

}



