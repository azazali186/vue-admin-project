<script setup lang="ts">
const props = defineProps(['name', 'onclickFunction', 'styleclasses'])
import Utils from '../../helpers/Utils'
</script>

<template>
  <div class="button-container-box">
    <button
      type="button"
      :class="props.styleclasses != '' ? props.styleclasses : 'primary-button'"
      :onClick="props.onclickFunction"
    >{{ $t(Utils.getKey(props.name)) }}
    </button>
  </div>
</template>
