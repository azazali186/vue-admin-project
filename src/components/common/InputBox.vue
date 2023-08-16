<!-- eslint-disable vue/no-setup-props-destructure -->

<template>
  <div class="inputBox-container">
    <label
      :for="name"
      :class="headingClass !== '' ? headingClass : 'inputBox-label'"
    >
      {{ lableName }}
    </label>
    <input
      :type="type"
      v-model="localModel"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :class="inputClass !== '' ? inputClass : 'inputBox-input'"
      :required="required"
      autocomplete="off"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, } from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const {
  name,
  lableName,
  type,
  placeholder,
  required,
  headingClass,
  inputClass,
  modelValue
} = defineProps<{
  name: string;
  lableName: string;
  type: string;
  placeholder: string;
  required: boolean;
  headingClass: string;
  inputClass: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localModel = ref(modelValue);
watch(localModel, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
