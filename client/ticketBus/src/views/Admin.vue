<template>
  <div class="container">
    <div>
      <div class="text-center">
        <button
          @click.prevent=""
          type="button"
          class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          data-hs-overlay="#hs-modal-signin"
        >
          Add Bus
        </button>
      </div>

      <div
        id="hs-modal-signin"
        class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div
          class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
        >
          <div
            class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="p-4 sm:p-7">
              <div class="mt-5">
                <!-- Form -->
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
                        <label for="password" class="block text-sm mb-2 dark:text-white"
                          >Tujuan</label
                        >
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
                        <label for="password" class="block text-sm mb-2 dark:text-white"
                          >Jumlah Bangku</label
                        >
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
                        <label for="password" class="block text-sm mb-2 dark:text-white"
                          >Harga</label
                        >
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
                      @click.prevent="addBus"
                    >
                      Add Bus
                    </button>
                  </div>
                </form>
                <!-- End Form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Bus
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Waktu Berangkat
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Waktu Tiba
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    Tujuan
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    Sisa Bangku
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody v-for="(bus, index) in busses" :key="bus._id">
                <tr
                  class="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    {{ bus.nomor }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {{ realDateOrigin(bus.wktBrgkt) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {{ realDateOrigin(bus.wktTiba) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {{ bus.tujuan }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {{ sisaBangku(bus.jumlahBgku, bus.bangku) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {{ fixedPrice(bus.harga) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div
                      class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
                    >
                      <button
                        type="button"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        @click.prevent="deleteBus(bus._id)"
                      >
                        Delete
                      </button>
                      <button
                        @click="updateBus(bus._id)"
                        type="button"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import ModalBus from '../components/UpdateModal.vue'
export default {
  components: {
    ModalBus
  },
  data() {
    return {
      idBus: '',
      nomor: '',
      tujuan: '',
      wktBrgkt: '',
      wktTiba: '',
      jumlahBgku: '',
      harga: '',
      tempIndex: ''
    }
  },
  created() {
    this.$store.dispatch('getBusses')
  },
  computed: {
    busses() {
      return this.$store.state.busses
    },
    addBus() {
      let obj = {
        nomor: this.nomor,
        tujuan: this.tujuan,
        wktBrgkt: this.wktBrgkt,
        wktTiba: this.wktTiba,
        jumlahBgku: this.jumlahBgku,
        harga: this.harga
      }
      this.$store.dispatch('addBus', obj)
    }
  },
  methods: {
    updateBus(value) {
      this.$router.push({ path: `/admin/bus/${value}` })
    },
    deleteBus(value) {
      this.$store.dispatch('deleteBus', value)
    },
    realDateOrigin(value) {
      const oldWaktu = value
      const newWaktu = moment(oldWaktu).format('Do MMM YYYY, h:mm a')
      return newWaktu
    },
    busDetail(value) {
      this.$router.push({ path: `/${value}` })
    },
    fixedPrice(value) {
      let bilangan = value
      let number_string = bilangan.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g)

      if (ribuan) {
        let separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }
      return `Rp ${rupiah}`
    },
    sisaBangku(jumlah, busBangku) {
      let bangku = jumlah
      busBangku.forEach((el) => {
        if (el.user != 'none') {
          bangku -= 1
        }
      })
      return bangku
    }
  }
}
</script>

<style lang="scss" scoped></style>
