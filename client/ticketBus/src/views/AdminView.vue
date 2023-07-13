<template>
  <div>
    <div class="grid h-screen place-items-center">
      <div class="">
        <h1 class="text-center font-bold">Admin</h1>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginAdminForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped></style>
