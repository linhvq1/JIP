import { makeAutoObservable } from 'mobx'
import { RootStore } from './index'
export class CounterStore {
    private rootStore: RootStore;
    value: number = 0;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    increment() {
        this.value += 1 
    }

    decrement() {
        this.value -= 1
    }
}