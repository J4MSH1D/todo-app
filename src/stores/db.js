import { defineStore } from 'pinia'
import instance from '../composables/axios'


export const useDateBase = defineStore({
  id: 'db',
  state: () => ({
    home: null,
    work: null,
    currentPost: null,
  }),
  actions: {
    async getData() {
      try {
        const home = await instance.get('/home')
        const work = await instance.get('/work')
        this.home = home.data
        this.work = work.data
      } catch (err){
        console.log(err.message);
      }
    },
    async getExactPost(col, id) {
      try {
        const post = await instance.get(`/${col}/${id}`)
        this.currentPost = post.data
      } catch(err) {
        console.log(err.message);
      }
    },
    async addData(data) {
      try {
        await instance.post(`/${data.collection}`, data.todo)
        this.getData()
      } catch (err){
        console.log(err.message);
      }
    },
    async deleteTodo(col ,id) {
      try {
        await instance.delete(`/${col}/${id}`)
        this.getData()
      } catch (err){
        console.log(err.message);
      }
    },
    async update(col, id, data) {
      try {
        await instance.patch(`/${col}/${id}`, data)
        this.getData()
      } catch(err) {
        console.log(err.message);
      }
    }
  }
})
