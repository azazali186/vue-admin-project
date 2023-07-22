<template>
    <div class="side-menu-wrapper">
      <slot></slot>
  
      <Menu
        :theme="$q.dark.isActive ? 'dark' : 'light'"
        ref="menuRef"
        width="auto"
        class="sidebar"
        style="height: 100vh; overflow-y: auto"
        :open-names="openMenu"
        :updateOpened="updateOpened"
        :active-name="activeNameValue"
        accordion
      >
        <MenuItem name="/">
          <q-img
            src="~/assets/logo.png"
            :style="{ maxWidth: '97px', margin: 'auto' }"
        /></MenuItem>
  
        <div v-for="(modul, key, j) in items" :key="j">
          <MenuItem
            v-if="modul.children.length == 0"
            :name="j"
            :to="modul.to.name"
            :key="modul.label"
            class="capitalize"
          >
            <q-icon :name="modul.icon" size="xs" />
            {{ $t(Utils.getKey(modul.label)) }}
          </MenuItem>
          <Submenu :name="modul.label" v-if="modul.children.length > 0">
            <template #title>
              <q-icon :name="modul.icon" size="xs" />
              {{ $t(Utils.getKey(modul.label)) }}
            </template>
            <MenuItem
              :name="modul.label + '-' + index"
              :to="child.to.name"
              v-for="(child, index) in modul.children"
              :key="child.label"
            >
              <q-icon :name="child.icon" size="xs" />
              {{ $t(Utils.getKey(child.label)) }}
            </MenuItem>
          </Submenu>
        </div>
      </Menu>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from "vue-router";
  import navItems from "@/components/Menu/nav-items";
  import Utils from "@/helpers/Utils";
  import { computed, onMounted, watch, ref } from "vue";
  
  const openMenu = ref([""]);
  const activeNameValue = ref("");
  const showSideBar = ref(true);
  const menuRef = ref(null);
  const route = useRoute();
  const router = useRouter();
  const props = defineProps({ items: Object });
  
  const routePath = computed(() => route.path);
  
  const updateOpened = (e) => {
    console.log("updateOpened", e);
  };
  
  watch(
    () => routePath.value,
    () => {
      onActiveMenu();
    }
  );
  const onActiveMenu = () => {
    for (const key in props.items) {
      if (props.items[key].children.length > 0) {
        let activeName = props.items[key]?.children?.filter(
          (it) => it?.to.name == route.name
        );
        if (activeName.length > 0) {
          openMenu.value = [props.items[key].label];
          let findIndex = props.items[key]?.children.findIndex(
            (it) => it.label == activeName[0].label
          );
          activeNameValue.value = props.items[key].label + "-" + findIndex;
          setTimeout(() => {
            menuRef.value.updateOpened();
          }, 400);
        }
      }
    }
  };
  
  onMounted(() => {
    onActiveMenu();
  });
  </script>
  <style scope>
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    border-right: none;
    color: #f46932;
    background: none !important;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .sidebar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .sidebar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .ivu-menu-item>i {
      margin-right: 6px;
      margin-top: -5px;
  }
  </style>