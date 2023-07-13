<template>
  <div class="grid h-screen place-items-center">
    <div class="">
      <h1 class="text-center font-bold">My Bus</h1>
      <LoginForm v-if="$store.state.isLogin" />
      <RegisterForm v-else />
    </div>
  </div>
</template>
<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
export default {
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>

<style></style>
