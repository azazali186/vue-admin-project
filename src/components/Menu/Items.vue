<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-item :to="to" clickable active-class="active-menu-link-dark" class="q-py-none nav-item-wrapper q-mb-sm" exact>
      <q-item-section avatar>
        <q-icon :name="icon" size="xs" />
      </q-item-section>
  
      <q-item-section>
        <q-item-label>{{ $t(Utils.getKey(label)) }}</q-item-label>
        <!-- <q-item-label caption>{{ $t(Utils.getKey(caption)) }}</q-item-label> -->
      </q-item-section>
    </q-item>
  </template>
  
  <script setup>
  import Utils from '@/helpers/Utils';
  
  
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
  
    caption: {
      type: String,
      default: "",
    },
  
    to: {
      type: Object,
      default: () => ({ name: "home" }),
      required: true,
    },
  
    icon: {
      type: String,
      default: "",
    },
  });
  </script>