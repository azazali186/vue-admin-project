<!-- LoginComponent.vue -->

<template>
  <main class="login-container">
    <div class="card border-none p-2">
      <div class="card fusion-cosmic">
        <div class="card-header">
          <div class="header-containt">
            <span class="left-login-color right-line-color logo-image">
              <img :src="logoImage" alt="Logo" />
            </span>
          </div>
        </div>
        <div class="card-body">
          <form ref="loginForm">
            <InputBox
              headingClass="left-login-color inputBox-lable"
              inputClass="inputBox-input text-color-primary"
              name="email"
              lableName="Email :"
              type="text"
              placeholder="Enter your email"
              :required="true"
              v-model="username"
            />
            <InputBox
              headingClass="left-login-color inputBox-lable"
              inputClass="inputBox-input text-color-primary "
              name="password"
              lableName="Password :"
              type="password"
              placeholder="Enter your password"
              :required="true"
              v-model="password"
            />
          </form>
        </div>
        <div class="card-footer">
          <ButtonBox
            name="Login"
            :onclickFunction="login"
            styleclasses="primary-button line-color fusion-cosmic-btn"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import InputBox from '@/components/common/InputBox.vue';
import ButtonBox from '@/components/common/ButtonBox.vue';
import useLanguage from '@/composables/useLanguage';
import logoImage from '@/assets/logo_big.png';

const { all } = useLanguage();
const username = ref("");
const password = ref("");
const loginForm = ref(null);

const login = () => {
  console.log('Logging in with:', username.value, password.value);
};

const languages = ref([]);
onMounted(async () => {
  languages.value = await all();
  console.log('Languages value is:', languages.value);
});
</script>
