<template>
  <div
    class="flex flex-wrap h-screen overflow-auto border-b border-gray-200 sm:rounded-lg "
  >
    <table
      class="table-auto min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
    >
      <thead class="bg-gray-50 ">
        <tr>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Code
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Error Message
          </th>
          <th
            scope="col"
            class="px-3 py-3 text-center md:text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="data in errorData" :key="data.index">
          <td class="px-3 py-4 whitespace-normal">
            <div class="flex items-center">
              <div class="text-sm font-medium text-gray-900">
                <span
                  class="px-2 inline-flex text-normal  font-medium rounded-full text-white"
                  :class="chipColor"
                >
                  {{ data.code }}
                </span>
              </div>
            </div>
          </td>
          <td class="px-3 py-4 whitespace-normal">
            <div class="flex items-center">
              <div class="text-xs font-normal text-gray-900 md:break-words">
                {{ data.text }}
              </div>
            </div>
          </td>
          <td class="px-3 py-4 whitespace-normal flex justify-between">
            <base-button
              :mode="mode"
              @move-item="move(data.index)"
            ></base-button>
            <button
              v-if="mode === 'unresolved'"
              @click="moveToBacklog(data.index)"
              class="px-3 py-1 text-sm text-red-400 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Undo
            </button>
          </td>
        </tr>

        <!-- More items... -->
      </tbody>
    </table>
    <!-- </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import BaseButton from "~/UI/BaseButton.vue";

export default {
  components: { BaseButton },
  props: ["errorData", "mode", "undoMode"],
  emits: [
    "resolved-error",
    "unreolved-error",
    "backlog-error",
    "move-to-backlog"
  ],
  computed: {
    chipColor() {
      if (this.mode === "resolved") {
        return "bg-green-400";
      } else if (this.mode === "unresolved") {
        return "bg-red-400";
      } else {
        return "bg-gray-400";
      }
    }
  },
  methods: {
    move(index) {
      // console.log("selected data", index, code, text);
      if (this.mode === "unresolved") {
        this.$emit("unreolved-error", index);
      }
      if (this.mode === "resolved") {
        this.$emit("resolved-error", index);
      }
      if (this.mode === "backlog") {
        this.$emit("backlog-error", index);
      }

      //   this.$emit("move-error", index);
    },
    moveToBacklog(index) {
      this.$emit("move-to-backlog", index);
    }
  }
};
</script>

<style></style>
