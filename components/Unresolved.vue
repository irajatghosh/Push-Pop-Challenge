<template>
  <base-card mode="unresolved">
    <template v-slot:title>
      Unresolved
    </template>

    <!-- <error-lists
        v-for="error in unresolved"
        :key="error.index"
        :code="error.code"
        :text="error.text"
      ></error-lists> -->
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
// import ErrorLists from "./ErrorLists.vue";
import ErrorTable from "./ErrorTable.vue";
export default {
  components: { BaseCard, ErrorTable },
  emits: ["resolve-error", "undo-backlog"],
  props: ["unresolved"],
  methods: {
    resolveError(index) {
      // console.log("unresolved data", index, code, text);
      this.$emit("resolve-error", index);
    },
    undoBacklog(index) {
      this.$emit("undo-backlog", index);
    }
  }
};
</script>

<style></style>
