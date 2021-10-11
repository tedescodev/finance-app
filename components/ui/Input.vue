<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ label }}
    </label>
    <input
      v-model="value"
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      :type="type"
      :placeholder="label"
      @change="$emit('input', value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    label: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    type: {
      type: String,
    },
  },
  data: () => ({
    value: '',
  }),
}
</script>
