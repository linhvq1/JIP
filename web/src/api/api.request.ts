import { requests } from "./api.helper"

const MLDataRequest = {
    getMLData: (body: any) =>{
        return requests.post('/read-csv', body)
    }
}

export {
    MLDataRequest
}