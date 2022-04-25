<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app w-screen min-h-screen bg-slate-900 text-white">
    <Navbar />
    <RouterView />
  </div>
</template>
