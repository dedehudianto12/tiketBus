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
                    {{ pending.bangku }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">Update</a>
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
  }
}
</script>

<style lang="scss" scoped></style>
