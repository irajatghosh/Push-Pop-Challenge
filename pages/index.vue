<template>
  <div class="min-h-screen bg-white  ">
    <the-header></the-header>

    <div class="md:grid md:grid-cols-3 md:gap-2 md:container md:mx-auto">
      <div>
        <unresolved
          :unresolved="unresolved"
          @resolve-error="moveToResoved"
          @undo-backlog="undoBacklog"
        ></unresolved>
      </div>
      <div>
        <resolved :resolved="resolved" @undo-resolved="undoResolved"></resolved>
      </div>
      <div>
        <backlog :backlog="backlog" @move-backlog="moveToUnresolved"></backlog>
      </div>
    </div>
  </div>
</template>

<script>
import Backlog from "~/components/Backlog.vue";

import Resolved from "~/components/Resolved.vue";
import TheHeader from "~/components/TheHeader.vue";
import Unresolved from "~/components/Unresolved.vue";

// import ItemLists from "~/.nuxt/components/ItemLists.vue";
export default {
  components: { Resolved, Unresolved, Backlog, TheHeader },
  async asyncData({ $axios }) {
    try {
      const { resolved, unresolved, backlog } = await $axios.$get(
        "http://localhost:8000/get_lists"
      );
      return {
        resolved,
        unresolved,
        backlog
      };
    } catch (error) {
      console.log(
        `Couldn't get error lists:\n${error}\nDid you start the API?`
      );
      console.log(
        "HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to."
      );
    }
  },
  data() {
    return {
      resolved: [],
      unresolved: [],
      backlog: []
    };
  },
  methods: {
    moveToResoved(index, code, message) {
      // console.log("unresolve data to be resolved:", index, code, message);
      const selectedData = this.unresolved.find(item => item.index === index);
      // console.log("actual data", this.unresolved);
      const newData = this.unresolved.filter(item => item.index !== index);
      this.unresolved = newData;
      this.resolved.unshift(selectedData);

      // console.log("unresolved data is:", this.unresolved);
    },
    undoResolved(index) {
      const selectedData = this.resolved.find(item => item.index === index);
      // console.log("actual data", this.unresolved);
      const newData = this.resolved.filter(item => item.index !== index);
      this.resolved = newData;
      this.unresolved.unshift(selectedData);
    },
    moveToUnresolved(index) {
      const selectedData = this.backlog.find(item => item.index === index);
      // console.log("actual data", this.unresolved);
      const newData = this.backlog.filter(item => item.index !== index);
      this.backlog = newData;
      this.unresolved.unshift(selectedData);
    },
    undoBacklog(index) {
      const selectedData = this.unresolved.find(item => item.index === index);
      // console.log("actual data", this.unresolved);
      const newData = this.unresolved.filter(item => item.index !== index);
      this.unresolved = newData;
      this.backlog.unshift(selectedData);
    }
  }
};
</script>
