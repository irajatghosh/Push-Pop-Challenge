<template>
  <button
    v-if="mode === 'unresolved'"
    @click="$emit('move-item')"
    class="px-2 py-1 text-sm text-green-400 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
  >
    Resolve
  </button>
  <button
    v-else-if="mode === 'resolved'"
    @click="$emit('move-item')"
    class="px-2 py-1 text-sm text-red-400 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
  >
    Undo
  </button>
  <button
    v-else-if="mode === 'backlog'"
    @click="$emit('move-item')"
    class="px-2 py-1 text-sm text-blue-400 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
  >
    Move
  </button>
</template>

<script>
export default {
  props: ["mode"],
  created() {
    console.log("button mode", this.mode);
  }
};
</script>

<style></style>
