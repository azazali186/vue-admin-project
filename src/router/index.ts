import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
  type RouteRecordName
} from 'vue-router'
import routes from './routes'
import { store, state } from '../store/store'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const createHistory = import.meta.env.SERVER
  ? createMemoryHistory
  : import.meta.env.VUE_ROUTER_MODE === 'history'
  ? createWebHistory
  : createWebHashHistory

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  history: createHistory(import.meta.env.MODE === 'ssr' ? void 0 : import.meta.env.VUE_ROUTER_BASE)
})

Router.beforeEach((to, from, next) => {
  if (store.tages.filter((it: any) => it.name == to.name).length == 0) {
    store.tages.push({
      name: to.name,
      path: to.path
    })
    if (
      to.matched.some((record) => record.meta.requiresAuth) &&
      !state.token
    ) {
      next({ name: 'Page: Login'})
    } else {
      next()
    }
  }

  // console.log(to, "=to");
  // if (to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/isSignedIn']) {
  //   next({ name: 'account-signin', query: { next: to.fullPath } })
  // } else {
  //   next()
  // }
  next()
})
export default Router
