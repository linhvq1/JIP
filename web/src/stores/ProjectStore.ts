import { makeAutoObservable } from 'mobx'
import { RootStore } from './index'
import { MLDataRequest } from '../api/api.request';
export class ProjectStore {
    private rootStore: RootStore;
    mlData: any = {};

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    getMlData(payload: object){
        MLDataRequest
        return new Promise((resolve, reject) => {
            MLDataRequest.getMLData(payload)
                .then(response => {
                    this.setMlData(response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    reject()
                })
        })
    }

    setMlData(data: object) {
        this.mlData = data
    }

}