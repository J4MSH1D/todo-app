<script setup>
import NameOfCollection from "./NameOfCollection.vue";
import NoData from "./NoData.vue";
import TodoVue from "./Todo.vue";
import { useDateBase } from "../stores/db.js";
const db = useDateBase();
</script>
<template>
  <div v-if="db.home">
    <div class="py-2 mt-8 bg-slate-500 rounded w-5/6 mx-auto">
      <NameOfCollection name="Home" />
      <TodoVue
        v-for="(col, index) in db.home"
        :key="index"
        :title="col.title"
        :text="col.text"
        :id="col.id"
        collection="home"
      />
      <NoData v-if="!db.home || db.home.length === 0" />
    </div>
  </div>
  <div v-if="db.work">
    <div class="py-2 mt-8 bg-slate-500 rounded w-5/6 mx-auto">
      <NameOfCollection name="Work" />
      <TodoVue
        v-for="(col, index) in db.work"
        :key="index"
        :title="col.title"
        :text="col.text"
        :id="col.id"
        collection="work"
      />
      <NoData v-if="!db.work || db.work.length === 0" />
    </div>
  </div>
  <div v-else>
    <NoData />
  </div>
</template>
