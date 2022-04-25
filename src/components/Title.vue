<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
  <div class="mt-16 ml-3 text-3xl capitalize">{{ route.name }} page</div>
</template>
