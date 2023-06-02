
<template>
  <div class="grid h-screen place-items-center">
    <div class="">
      <div>
        <h1 class="text-3xl font-bold text-center">
          MyBus
        </h1>
      </div>
      <LoginForm v-if="$store.state.isLogin"/>
      <RegisterForm v-else/>
    </div>
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm.vue"
import RegisterForm from "../components/RegisterForm.vue";
export default {
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>

<style></style>