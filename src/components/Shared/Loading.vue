<template>
    <div class="my_loading" v-if="loading">
        <q-spinner-dots
          style="z-index: 100;"
          color="primary"
          :size="size"
        ></q-spinner-dots>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  const props = defineProps({
    size: {
      type: String,
      default: '6em'
    },
    loading: {
      type: Boolean,
      default: false
    },
  });
  
  </script>