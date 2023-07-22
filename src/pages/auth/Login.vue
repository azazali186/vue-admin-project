<template>
  <main class="login-container">
    <div class="card border-none p-2">
      <div class="card fusion-cosmic">
      <div class="card-header"><div class="header-containt">
        <span class="left-login-color right-line-color">{{ 
          // @ts-ignore
          $t(Utils.getKey("Welcome")) }}</span><span class="left-login-color">{{ 
          // @ts-ignore
          $t(Utils.getKey("login")) }}</span>
      </div></div>
      <div class="card-body">
        <InputBox
          headingClass="left-login-color inputBox-lable"
          inputClass="inputBox-input text-color-primary"
          name="email"
          lableName="Email :"
          type="text"
          placeholder="Enter your email"
          required="1"
        />
        <InputBox
          headingClass="left-login-color inputBox-lable"
          inputClass="inputBox-input text-color-primary "
          name="password"
          lableName="Password :"
          type="password"
          placeholder="Enter your password"
          required="1"
        />
      </div>
      <div class="card-footer">
        <ButtonBox name="Login" :onclickFunction="login" styleclasses="primary-button line-color fusion-cosmic-btn" />
      </div>
    </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import InputBox from '@/components/common/InputBox.vue'
import ButtonBox from '@/components/common/ButtonBox.vue'
// @ts-ignore
import Utils from '@/helpers/Utils'

const login = () => {
  console.log('hello Login')
}
</script>
