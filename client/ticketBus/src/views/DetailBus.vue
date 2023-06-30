<template>
  <div class="w-screen h-screen">
    <NavBar />
    <div class="container px-20 flex">
      <div class="container basis-3/4">
        <h1>Nomor : {{ bus.nomor }}</h1>
        <h1>Tujuan : {{ bus.tujuan }}</h1>
        <h1>Waktu Berangkat : {{ realDateOrigin(bus.wktBrgkt) }}</h1>
        <h1>Waktu Tiba : {{ realDateOrigin(bus.wktTiba) }}</h1>
        <h1>Harga : {{ fixedPrice }}</h1>
        <h1>Bangku Tersedia: {{ sisaBangku }}</h1>
      </div>
      <div class="container basis-1/4">
        <Bangku :newBus="bus" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Bangku from '../components/Bangku.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    NavBar,
    Bangku
  },
  created() {
    this.$store.dispatch('getBus', this.$route.params.id)
  },
  computed: {
    bus() {
      return this.$store.state.bus
    },
    fixedPrice() {
      let bilangan = this.bus.harga
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
    sisaBangku() {
      let newBangku = this.bus.bangku
      let sisaBangku = this.bus.jumlahBgku
      newBangku.forEach((element) => {
        if (element.user != 'none') {
          sisaBangku -= -1
        }
      })
      return sisaBangku
    }
  },
  methods: {
    realDateOrigin(value) {
      const oldWaktu = value
      const newWaktu = moment(oldWaktu).format('Do MMM YYYY, h:mm a')
      return newWaktu
    }
  }
}
</script>

<style lang="scss" scoped></style>
