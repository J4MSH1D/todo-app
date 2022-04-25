import { defineStore } from 'pinia'
import instance from '../composables/axios'


export const useDateBase = defineStore({
  id: 'db',
  state: () => ({
    home: null,
    work: null
  }),
  actions: {
    async getData() {
      try {
        const home = await instance.get('/home')
        const work = await instance.get('/home')
        this.home = home.data
        this.work = work.data
      } catch (err){
        console.log(err.message);
      }
    }
  }
})
