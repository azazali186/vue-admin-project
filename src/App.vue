<template>
  <RouterView />
</template>


<script>

import { defineComponent, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import store from "./store/store";


export default defineComponent({
  name: "app",
  data() {
    return store;
  },

  setup() {
    const i18n = useI18n();
    watch(()=>store.currentLang,(newVal) => { //watch the getter
      i18n.locale.value = store.currentLang;
    },{
      immediate:true
    });
  },
});
</script>
