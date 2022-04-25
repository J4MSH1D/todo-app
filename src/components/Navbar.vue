<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="w-screen py-2 px-3 text-white flex items-center justify-between bg-slate-800"
  >
    <div class="font-semibold">Navbar</div>
    <div>
      <RouterLink to="/" class="transition">Home</RouterLink>
      <RouterLink to="/about" class="mx-4 transition">About</RouterLink>
    </div>
  </div>
</template>
