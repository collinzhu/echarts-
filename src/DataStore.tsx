// import React from "react";

import { useEffect } from "react"

export class DataStore {

    // singleton to share data across all graphs
    public static global = new DataStore()

    private constructor() {}

    // store for any data, acting like a cache
    private store = new Map<string, any>()

    public request(customer: number | string, id: string): any[] {
        // if the data exists in the store, just return it
        if (this.store.has(id)) {
            return this.store.get(id)
        } else {
            // else, fetch data from api and keep in the store
            const data = this.getDataFor(customer, id)
            this.store.set(id, data)
            return data
        }
    }


    private getDataFor(customer: number | string, id: string): any[] {
        const baseURL = "https://portal.smxemail.com/api/customer/"
        var data: any[] = ['nope']

        fetch('https://portal.smxemail.com/api/customer/2017656/reports/inbound-message-counts?period=P1M&basetimestamp=1670887416')
            .then(res => { console.log(res) })

        return data 
    }

}



