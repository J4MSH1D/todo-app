<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="text-lg mb-5 ml-2">{{ name }}</div>
</template>
