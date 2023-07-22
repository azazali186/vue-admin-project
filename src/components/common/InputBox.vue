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
import Utils from '../../helpers/Utils'
</script>

<template>
  <div class="inputBox-container">
    <lable
      :for="props.name"
      :name="props.lableName"
      :class="props.headingClass != '' ? props.headingClass : 'inputBox-lable'"
      >{{ $t(Utils.getKey(props.lableName)) }}</lable
    >
    <input
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :placeholder="$t(Utils.getKey(props.placeholder))"
      :class="props.inputClass != '' ? props.inputClass : 'inputBox-input'"
      :required="props.required == 1 ? required : ''"
      autocomplete="off"
    />
  </div>
</template>
