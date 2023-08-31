<template>
  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-black-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    UserId
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    BusId
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    NoBangku
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody
                v-for="(pending, index) in pendings"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <tr>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black-800 dark:text-black-200"
                  >
                    {{ pending.userId }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200"
                  >
                    {{ pending.busId }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200"
                  >
                    {{ pending.status }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-black-800 dark:text-black-200"
                  >
                    {{ pending.bangku }}
                  </td>
                  <td v-if="pending.status !== true" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button @click="updatePending(pending._id)" type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                      Update
                    </button>                  
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

export default {
  created() {
    this.$store.dispatch('getPendings')
  },
  computed: {
    pendings() {
      return this.$store.state.pendings
    }
  },
  methods: {
    updatePending(value){
      this.$store.dispatch("updatePending", value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
