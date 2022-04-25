<script setup>
import { reactive, ref } from "vue";
import { useDateBase } from "../stores/db.js";
import Error from "./Error.vue"
const error = ref(false);
const db = useDateBase();
const choosenCollection = ref("home")
const collections = reactive(["home", "work"]);
const newTodo = reactive({
  title: "",
  text: "",
});
const addTodo = async () => {
    if(newTodo.title.trim() === "" || newTodo.text.trim() === ""){
        error.value = true;
    } else {
        error.value = false;
        const data = {
            collection: choosenCollection.value,
            todo: newTodo
        }
        await db.addData(data)
        newTodo.title = newTodo.text = ""
    }
}
</script>
<template>
  <div class="px-5 w-5/6 mx-auto rounded py-2 mt-10 bg-slate-500">
    <div class="text-xl">New Todo</div>
    <div class="text-lg mt-5">Title of the Todo</div>
    <div>
      <input
        class="w-full mt-2 rounded-sm outline-none bg-transparent border-2 border-white pl-2 py-1"
        type="text"
        v-model="newTodo.title"
      />
    </div>
    <div class="text-lg mt-5">Text of the Todo</div>
    <div>
      <input
        class="w-full mt-2 rounded-sm outline-none bg-transparent border-2 border-white pl-2 py-1"
        type="text"
        v-model="newTodo.text"
      />
    </div>
    <div class="text-lg mt-5">Select the Collection</div>
    <div>
      <select v-model="choosenCollection" class="text-black capitalize w-1/6 outline-none">
          <option v-for="(collection, index) in collections" :key="index"  :value="collection">{{collection}}</option>
      </select>
    </div>
    <div>
        <button @click="addTodo" class="uppercase mt-8 mb-4 px-3 py-1 border-2 border-white rounded-sm transition hover:bg-white hover:text-black">post</button>
    </div>
    <Error v-if="error" />   
  </div>
</template>
