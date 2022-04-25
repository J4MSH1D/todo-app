import { defineStore } from 'pinia'
import instance from '../composables/axios'


export const useDateBase = defineStore({
  id: 'db',
  state: () => ({
    db: null
  }),
  actions: {
    async getData() {
      try {
        const responce = await instance.get('/posts')
        this.db = responce.data
      } catch (err){
        console.log(err.message);
      }
    }
  }
})
