<template lang="">
  <div>
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nama"> Nama Lengkap</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="nama"
            placeholder="Nama Lengkap"
            v-model="nama"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">Jenis Kelamin</label>
          <div class="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="laki-laki"
              v-model="kelamin"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Laki-laki</label
            >
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value="perempuan"
              v-model="kelamin"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Perempuan</label
            >
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="ttl">
            Tempat Tanggal Lahir
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ttl"
            type="text"
            placeholder="Tempat tanggal Lahir"
            v-model="ttl"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="password"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click.prevent="registerForm"
          >
            Register
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="changeRegister"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      nama: '',
      kelamin: '',
      ttl: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerForm() {
      const obj = {
        username: this.username,
        nama: this.nama,
        jenisKelamin: this.kelamin,
        ttl: this.ttl,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', obj)
    },
    changeRegister() {
      this.$store.commit('ADD_LOGIN', true)
    }
  }
}
</script>
<style lang=""></style>
