<script setup lang="ts">
const props = defineProps(['name', 'onclickFunction', 'styleclasses'])
</script>

<template>
  <div class="button-container-box">
    <button
      type="button"
      :class="props.styleclasses != '' ? props.styleclasses : 'primary-button'"
      :onClick="props.onclickFunction"
    >
      {{ props.name }}
    </button>
  </div>
</template>
