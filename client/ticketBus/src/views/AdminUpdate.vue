<template>
  <div class="container dark:bg-blue-800">
    <form>
      <div class="grid gap-y-4">
        <!-- Form Group -->
        <div>
          <label for="text" class="block text-sm mb-2 dark:text-white">Nomor</label>
          <div class="relative">
            <input
              v-model="nomor"
              type="text"
              id="text"
              name="text"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white-800 dark:border-white-700 dark:text-gray-400"
              required
              aria-describedby="text-error"
            />
            <div
              class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
            >
              <svg
                class="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
          </div>
          <p class="hidden text-xs text-red-600 mt-2" id="text-error">
            Please include a valid bus number
          </p>
        </div>
        <!-- End Form Group -->

        <!-- Form Group -->
        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm mb-2 dark:text-white">Tujuan</label>
          </div>
          <div class="relative">
            <input
              v-model="tujuan"
              type="text"
              id="tujuan"
              name="tujuan"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white-800 dark:border-white-700 dark:text-gray-400"
              required
              aria-describedby="tujuan-error"
            />
            <div
              class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
            >
              <svg
                class="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- End Form Group -->
        <!-- Form Group -->
        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm mb-2 dark:text-white"
              >Waktu Berangkat (Format MM/DD/YY, HH:MM)</label
            >
          </div>
          <div class="relative">
            <input
              v-model="wktBrgkt"
              type="text"
              id="wktBrgkt"
              name="wktBrgkt"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white-800 dark:border-white-700 dark:text-gray-400"
              required
              aria-describedby="wktBrgkt-error"
            />
            <div
              class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
            >
              <svg
                class="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- End Form Group -->
        <!-- Form Group -->
        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm mb-2 dark:text-white"
              >Waktu Tiba (Format MM/DD/YY, HH:MM)</label
            >
          </div>
          <div class="relative">
            <input
              v-model="wktTiba"
              type="text"
              id="wktTiba"
              name="wktTiba"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white-800 dark:border-white-700 dark:text-gray-400"
              required
              aria-describedby="wktTiba-error"
            />
            <div
              class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
            >
              <svg
                class="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- End Form Group -->
        <!-- Form Group -->
        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm mb-2 dark:text-white">Jumlah Bangku</label>
          </div>
          <div class="relative">
            <input
              v-model="jumlahBgku"
              type="number"
              id="bangku"
              name="bangku"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white-800 dark:border-white-700 dark:text-gray-400"
              required
              aria-describedby="bangku-error"
            />
            <div
              class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
            >
              <svg
                class="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- End Form Group -->
        <!-- Form Group -->
        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm mb-2 dark:text-white">Harga</label>
          </div>
          <div class="relative">
            <input
              v-model="harga"
              type="number"
              id="harga"
              name="harga"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white-800 dark:border-white-700 dark:text-gray-400"
              required
              aria-describedby="harga-error"
            />
            <div
              class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
            >
              <svg
                class="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- End Form Group -->
        <button
          type="submit"
          class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          data-hs-overlay="#hs-modal-signin"
          @click.prevent="updateBus"
        >
          Add Bus
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailBus: [],
      nomor: '',
      tujuan: '',
      wktBrgkt: '',
      wktTiba: '',
      jumlahBgku: '',
      harga: ''
    }
  },
  created() {
    this.$store.dispatch('getBus', this.$route.params.id)
  },
  computed: {
    bus() {
      return this.$store.state.bus
    },
    updateBus() {
      let obj = {
        nomor: this.nomor,
        tujuan: this.tujuan,
        wktBrgkt: this.wktBrgkt,
        wktTiba: this.wktTiba,
        jumlahBgku: this.jumlahBgku,
        harga: this.harga
      }
      let temp = [obj, this.$route.params.id]
      this.$store.dispatch('updateBus', temp)
      this.$router.push({ path: `/admin/bus` })
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
