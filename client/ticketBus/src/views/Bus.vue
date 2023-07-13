<template>
  <div class="dashboard">
    <NavBar />
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3 text-center">Bus</th>
              <th scope="col" class="px-6 py-3 text-center">Waktu Berangkat</th>
              <th scope="col" class="px-6 py-3 text-center">Waktu Tiba</th>
              <th scope="col" class="px-6 py-3 text-center">Tujuan</th>
              <th scope="col" class="px-6 py-3 text-center">Sisa Bangku</th>
              <th scope="col" class="px-6 py-3 text-center">Price</th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody v-for="(bus, index) in busses">
            <BusCard :listBus="bus" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import BusCard from '../components/BusCard.vue'
export default {
  components: {
    NavBar,
    BusCard
  },
  created() {
    this.$store.dispatch('getBusses')
  },
  computed: {
    busses() {
      return this.$store.state.busses
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
