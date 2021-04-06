<template>
  <base-card mode="resolved">
    <template v-slot:title>
      Resolved
    </template>

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

  components: { BaseCard, ErrorTable },
  methods: {
    unresolveError(index) {
      this.$store.dispatch("undoResolved", index);
    }
  }
};
</script>

<style></style>
