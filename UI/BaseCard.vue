<template>
  <div
    class="shadow bg-gray-50  sm:rounded-md md:overflow-hidden sm:overflow-hidden"
    :class="borderColor"
  >
    <div class="px-4 py-5  space-y-3 sm:p-6">
      <span
        class="px-2 inline-flex text-base leading-5 font-semibold rounded-full text-white"
        :class="chipColor"
      >
        <slot name="title"></slot>
      </span>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    borderColor() {
      if (this.mode === "resolved") {
        return "border-t-4 border-green-500";
      } else if (this.mode === "unresolved") {
        return "border-t-4 border-red-500";
      } else {
        return "border-t-4 border-black-500";
      }
    },
    chipColor() {
      if (this.mode === "resolved") {
        return "bg-green-400";
      } else if (this.mode === "unresolved") {
        return "bg-red-400";
      } else {
        return "bg-gray-400";
      }
    }
  }
};
</script>

<style></style>
