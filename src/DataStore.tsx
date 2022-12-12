// import React from "react";

class DataStore {
    constructor() {}

    // store for any data, acting like a cache
    private store = new Map<string, any>()

    public request(id: string): any[] {
        // if the data exists in the store, just return it
        if (id in this.store) {
            return this.store.get(id)
        } else {
            // else, fetch data from api and keep in the store
            const data = this.getDataFor(id)
            this.store.set(id, data)
            return data
        }
    }

    public getDataFor(endpoint: string): any[] {
        return [] // todo
    }

}

// singleton to share data across all graphs
export const store = new DataStore()

