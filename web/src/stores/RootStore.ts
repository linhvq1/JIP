import { CounterStore } from "./CounterStore";
import { ProjectStore } from "./ProjectStore";

declare const window: any

export class RootStore {
    counterStore: CounterStore;
    projectStore: ProjectStore
    constructor() {
      this.counterStore = new CounterStore(this);
      this.projectStore = new ProjectStore(this);
    }
}

const rootStore = new RootStore()

window.__store = rootStore

export const stores = {
    counterStore: rootStore.counterStore,
    projectStore: rootStore.projectStore
};