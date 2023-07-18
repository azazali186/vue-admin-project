<script setup lang="ts">
const props = defineProps([
  'name',
  'lableName',
  'type',
  'placeholder',
  'required',
  'headingClass',
  'inputClass'
])
</script>

<template>
  <div class="inputBox-container">
    <lable
      :for="props.name"
      :name="props.lableName"
      :class="props.headingClass != '' ? props.headingClass : 'inputBox-lable'"
      >{{ props.lableName }}</lable
    >
    <input
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :placeholder="props.placeholder"
      :class="props.inputClass != '' ? props.inputClass : 'inputBox-input'"
      :required="props.required == 1 ? required : ''"
      autocomplete="off"
    />
  </div>
</template>
