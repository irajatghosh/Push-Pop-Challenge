<template>
  <base-card mode="backlog">
    <template v-slot:title>
      Backlog
    </template>
    <error-table
      mode="backlog"
      :error-data="backlog"
      @backlog-error="backlogError"
    ></error-table>
  </base-card>
</template>

<script>
import BaseCard from "~/UI/BaseCard.vue";

import ErrorTable from "./ErrorTable.vue";

export default {
  props: ["backlog"],

  components: {
    BaseCard,

    ErrorTable
  },
  methods: {
    backlogError(index) {
      this.$store.dispatch("moveBacklogToUnresolved", index);
    }
  }
};
</script>

<style></style>
