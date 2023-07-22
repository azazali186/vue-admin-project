<template>
    <div class="outer_scroll" :class="$q.dark.isActive ? 'dark' : 'gray-light'">
      <div class="btn-con left-btn">
        <Button style="height: 28px; padding-left: 6px; padding-right: 6px;" type="text" @click="handleScroll(true)">
          <Icon :class="$q.dark.isActive ? 'orange' : 'gray'" :size="18" type="ios-arrow-back" />
        </Button>
      </div>
      <!-- <div class="outerScroll"> -->
      <div class="flex-1 scrollBody" ref="scrollBody">
        <Tag v-for="(itm, index) in items" :key="index" @click="tagClick(itm)"
          :color="routePath == itm.path ? 'primary' : 'gray'" class="pointer" closable @on-close="handleClose(itm)">{{
            $t(Utils.getKey(itm.name)) }}</Tag>
      </div>
      <!-- </div> -->
      <div class="btn-con right-btn">
        <Button style="height: 28px; padding-right: 6px;  padding-left: 6px;" type="text" @click="handleScroll(false)">
          <Icon :class="$q.dark.isActive ? 'orange' : 'gray'" :size="18" type="ios-arrow-forward" />
        </Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from "vue-router";
  import { computed, onMounted, watch, ref } from "vue";
  import { store } from "@/store/store";
  import Utils from "@/helpers/Utils";
  
  const scrollBody = ref(null);
  const items = computed(() => store.tages);
  const route = useRoute();
  const router = useRouter();
  const handleClose = (itm) => {
    store.tages = store.tages.filter((tag) => tag.path != itm.path);
    if (store.tages.length > 0) {
      router.push({ path: store.tages[store.tages.length - 1].path });
    } else {
      router.push({ path: "/" });
    }
  };
  
  const tagClick = (itm) => {
    router.push({ path: itm.path });
    routePath.value = itm.path;
  };
  
  const handleScroll = (isLeft) => {
    if (isLeft) {
      scrollBody.value.scrollLeft -= 60
    } else {
      scrollBody.value.scrollLeft += 60
    }
  };
  
  const routePath = computed(() => route.path);
  watch(
    () => store.tages,
    () => {
      console.log("tag change", store.tages);
    }
  );
  onMounted(() => {
  });
  </script>
  
  <style>
  .outerScroll {
    position: relative;
  }
  
  .outer_scroll {
    height: 32px;
    width: 100%;
    padding: 3px;
    display: flex;
  }
  
  .scrollBody {
    transform: 0.5s;
    white-space: nowrap;
    display: inline-block;
    height: 32px;
    width: 94%;
    overflow: hidden;
  }
  </style>