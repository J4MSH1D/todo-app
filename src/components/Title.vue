<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
  <div class="w-full mt-16 text-center text-3xl capitalize">{{ route.name }} page</div>
</template>
