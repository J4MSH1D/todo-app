<script setup>
import NameOfCollection from "./NameOfCollection.vue";
import NoData from "./NoData.vue";
import { useDateBase } from "../stores/db.js";
const db = useDateBase();
</script>
<template>
  <div v-if="db.home">
    <div
      v-for="(col, index) in db.home"
      :key="index"
      class="py-2 mt-8 bg-slate-500 rounded w-5/6 mx-auto"
    >
      <NameOfCollection name="Home" />
      <NoData v-if="!col || col.length === 0" />
    </div>
  </div>
  <div v-if="db.work">
    <div
      v-for="(col, index) in db.work"
      :key="index"
      class="py-2 mt-8 bg-slate-500 rounded w-5/6 mx-auto"
    >
      <NameOfCollection name="Work" />
      <NoData v-if="!col || col.length === 0" />
    </div>
  </div>
  <div v-else>
    <NoData />
  </div>
</template>
