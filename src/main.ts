/* eslint-disable @typescript-eslint/no-unused-vars */
import './assets/main.css'
import { createApp, computed, provide } from 'vue'
import App from './App.vue'
import Router from './router'
import i18nPlugin from './i18n/i18nPlugin'
import messages from './i18n'
import { api, axios } from "@/boot/axios";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ViewUIPlus from 'view-ui-plus'

const app = createApp(App)

const elLocale = computed(() => {
  switch (locale.value) {
    case 'en':
      return en
    case 'ch':
      return zhCn
    case 'kh':
      return km
    default:
      return en
  }
})



app.use(Vue3Toastify, {
  autoClose: 3000,
  limit: 1,
  multiple: false,
} as ToastContainerOptions);

const localKey = computed(() => {
  return locale.value
})

app.use(ViewUIPlus, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
      arrow: 'md-arrow-dropdown',
      arrowSize: 20
  }
} as any);

provide('locale', localKey)

app.use(i18nPlugin, messages)
app.config.globalProperties.$axios = { ...axios }
app.config.globalProperties.$api = { ...api }
app.use(Router)

app.mount('#app')
