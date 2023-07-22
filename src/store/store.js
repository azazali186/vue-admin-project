/* eslint-disable no-unused-vars */
import { reactive, readonly } from "vue";
import { api } from "../boot/axios";
import { useRouter } from "vue-router";

const router = useRouter();

export const store = reactive({
  leftDrawerOpen: false,
  isOne : true,
  menuSelect: 0,
  orderNav: [
    {
      id: 1,
      name: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      name: 'Report',
      icon: 'home'
    },
    {
      id: 3,
      name: 'Detial',
      icon: 'home'
    }
  ],
  tages: [

  ]
})

const state = reactive({
  loggedIn: false,
  user: null,
  token: null,
  roles: [],
  permissions: [],
  languages: [],
  currentLang: null
});

function setAuth(data) {
  state.loggedIn = true;
  state.user = data.user;
  state.token = data.token;
  state.user.roles = data?.roles || [];
  state.user.permissions = data.permissions?.map((p) => p.name) || [];
  localStorage.setItem("template-admin-token", data.token);
}

function setCurrentLanguage(lang){
  state.currentLang = lang;
}

const token = localStorage.getItem("template-admin-token")
  ? localStorage.getItem("template-admin-token")
  : state.token;
const headers = {};
if (token) {
  headers.authorization = "Bearer " + token;
}

async function checkAuth() {
  try {
    const response = await api.get("/auth/user", { headers: headers });
    setAuth(response.data);
  } catch (err) {
    await logout();
    console.log(err);
  }
}

async function logout() {
  try {
    state.loggedIn = false;
    state.user = null;
    state.token = null;
    localStorage.removeItem("template-admin-token");
    await api.post("/user/logout");
  } catch (err) {
    // Force redirect
    window.location = "/#/auth/login";
  }
}

export default {
  state: readonly(state),
  setAuth,
  checkAuth,
  logout,
  setCurrentLanguage
};
