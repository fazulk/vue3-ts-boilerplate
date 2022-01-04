import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter
  },
  actions: {
    increment(inc?: number) {
      if (inc) this.counter += inc
      else this.counter++
    }
  }
})
