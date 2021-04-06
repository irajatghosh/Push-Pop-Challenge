<template>
  <div class="min-h-screen bg-white  ">
    <the-header></the-header>

    <div
      class="md:grid sm:grid lg:grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-2 px-4 md:gap-2 container sm:container sm:mx-auto"
    >
      <div>
        <unresolved :unresolved="unresolvedErrors"></unresolved>
      </div>
      <div>
        <resolved :resolved="resolvedErrors"></resolved>
      </div>
      <div>
        <backlog :backlog="backlogErrors"></backlog>
      </div>
    </div>
  </div>
</template>

<script>
import Backlog from "~/components/Backlog.vue";

import Resolved from "~/components/Resolved.vue";
import TheHeader from "~/components/TheHeader.vue";
import Unresolved from "~/components/Unresolved.vue";

export default {
  components: { Resolved, Unresolved, Backlog, TheHeader },
  computed: {
    unresolvedErrors() {
      return this.$store.getters["getUnresolvedErros"];
    },
    resolvedErrors() {
      return this.$store.getters["getResolvedErros"];
    },
    backlogErrors() {
      return this.$store.getters["getBacklogErros"];
    }
  },
  created() {
    this.$store.dispatch("loadErrors");
  }
};
</script>
