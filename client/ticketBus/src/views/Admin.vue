<template>
  <div class="container">
    <div>
      <div class="text-center">
        <button
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
              <tbody v-for="(bus, index) in busses">
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
                        type="button"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#hs-basic-modal"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                  <td>
                    <div
                      id="hs-basic-modal"
                      class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                    >
                      <div
                        class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
                      >
                        <div
                          class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                        >
                          <div
                            class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
                          >
                            <h3 class="font-bold text-gray-800 dark:text-white"></h3>
                            <button
                              type="button"
                              class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                              data-hs-overlay="#hs-basic-modal"
                            >
                              <span class="sr-only">Close</span>
                              <svg
                                class="w-3.5 h-3.5"
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                            <ModalBus :detailBus="bus" />
                          </div>
                        </div>
                      </div>
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
    passUpdate(value) {
      this.busses
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
