<script setup>
import { useDateBase } from "../stores/db.js"
const db = useDateBase()
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  id: {
      type: Number,
      required: true
  },
  collection: {
      type:String,
      required: true
  }
});
</script>
<template>
  <div class="flex items-center justify-between my-5 w-8/9 px-10 bottom-2 border-y-2">
    <div>
      <div class="text-xl font-bold mb-2">{{ title }}</div>
      <div>{{ text }}</div>
    </div>
    <div>
        <button @click="db.deleteTodo(collection ,id)" class="px-3 py-1 border-2 rounded font-semibold hover:bg-red-600 transition border-red-600 ">Delete</button>
    </div>
  </div>
</template>
