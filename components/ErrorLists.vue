<template>
  <!-- <div class="h-20 mx-0 border mt-2 mb-2 border-black-600 rounded p-4 mx-auto">
    `{{ code }}` - {{ text }}
  </div> -->
  <tr>
    <td class="px-3 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-900">
            <span
              class="px-2 bg-blue-100 inline-flex text-base leading-5 font-semibold rounded-full text-white"
            >
              {{ code }}
            </span>
          </div>
        </div>
      </div>
    </td>
    <td class="px-3 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-900">
            {{ text }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["code", "text"]
};
</script>

<style></style>
