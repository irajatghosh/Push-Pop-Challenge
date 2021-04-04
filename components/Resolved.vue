<template>
  <base-card mode="resolved">
    <template v-slot:title>
      Resolved
    </template>

    <!-- <error-lists
      v-for="error in resolved"
      :key="error.index"
      :code="error.code"
      :text="error.text"
    ></error-lists> -->
    <error-table
      mode="resolved"
      :error-data="resolved"
      @resolved-error="unresolveError"
    ></error-table>
  </base-card>
</template>

<script>
import BaseCard from "~/UI/BaseCard.vue";

import ErrorTable from "./ErrorTable.vue";
export default {
  props: ["resolved"],
  emits: ["undo-resolved"],
  components: { BaseCard, ErrorTable },
  methods: {
    unresolveError(index) {
      this.$emit("undo-resolved", index);
    }
  }
};
</script>

<style></style>
