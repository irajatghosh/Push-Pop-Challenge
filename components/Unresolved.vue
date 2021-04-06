<template>
  <base-card mode="unresolved">
    <template v-slot:title>
      Unresolved
    </template>
    <error-table
      mode="unresolved"
      undo-mode="unresolvedUndo"
      :error-data="unresolved"
      @unreolved-error="resolveError"
      @move-to-backlog="undoBacklog"
    ></error-table>
  </base-card>
</template>

<script>
import BaseCard from "~/UI/BaseCard.vue";

import ErrorTable from "./ErrorTable.vue";
export default {
  components: { BaseCard, ErrorTable },

  props: ["unresolved"],
  methods: {
    resolveError(index) {
      console.log("position", index);
      this.$store.dispatch("moveToResoved", index);
    },
    undoBacklog(index) {
      console.log("undo position", index);
      this.$store.dispatch("undoBacklog", index);
    }
  }
};
</script>

<style></style>
