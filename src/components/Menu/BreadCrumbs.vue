<template>
    <q-card square flat class="bg-accent">
      <q-card-section class="q-pb-xl">
        <q-breadcrumbs class="text-white">
          <q-breadcrumbs-el style="color:#A0D9F6"  :label="$t(Utils.getKey($route.meta.title))" v-if="$route.meta.title" />
          <q-breadcrumbs-el
            class="cursor-pointer text-white"
            :label="$t(Utils.getKey($route.meta.subtitle))"
            v-if="$route.meta.subtitle"
            @click="back"
          />
          <q-breadcrumbs-el
            :label="$t(Utils.getKey($route.meta.caption))"
            v-if="$route.meta.caption"
          />
        </q-breadcrumbs>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup>
  import Utils from "@/helpers/Utils";
  import { useRoute, useRouter } from "vue-router";
  
  const route = useRoute();
  const router = useRouter();
  
  const back = () => {
    if (route.meta.caption) {
      router.go(-1);
    }
  };
  </script>