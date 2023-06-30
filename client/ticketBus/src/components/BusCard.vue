<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ listBus.nomor }}
    </th>
    <td class="px-6 py-4 text-center">{{ realDateOrigin(listBus.wktBrgkt) }}</td>
    <td class="px-6 py-4 text-center">{{ realDateOrigin(listBus.wktTiba) }}</td>
    <td class="px-6 py-4 text-center">{{ listBus.tujuan }}</td>
    <td class="px-6 py-4 text-center">{{ sisaBangku }}</td>
    <td class="px-6 py-4 text-center">{{ fixedPrice }}</td>
    <td class="px-6 py-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click.prevent="busDetail(listBus._id)"
      >
        Pilih
      </button>
    </td>
  </tr>
</template>

<script>
import moment from 'moment'
export default {
  props: ['listBus'],
  computed: {
    sisaBangku() {
      let bangku = this.listBus.jumlahBgku
      this.listBus.bangku.forEach((el) => {
        if (el.user != 'none') {
          bangku -= 1
        }
      })
      return bangku
    },
    fixedPrice() {
      let bilangan = this.listBus.harga
      let number_string = bilangan.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g)

      if (ribuan) {
        let separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }
      return `Rp ${rupiah}`
    }
  },
  methods: {
    realDateOrigin(value) {
      const oldWaktu = value
      const newWaktu = moment(oldWaktu).format('Do MMM YYYY, h:mm a')
      return newWaktu
    },
    busDetail(value) {
      this.$router.push({ path: `/${value}` })
    }
  }
}
</script>

<style scoped></style>
