
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Underline',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    title: {
      type: String,
      default: undefined
    }
  },
  setup(props) {
    return {
      ...props
    };
  }
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="color"
    :aria-hidden="title ? 'false' : 'true'"
  >
    <title v-if="title">{{ title }}</title>
    <path fill="#000" d="M9 6.5a.5.5 0 0 0-1 0V11a4 4 0 0 0 8 0V6.5a.5.5 0 0 0-1 0V11a3 3 0 0 1-6 0zM17.5 18a.5.5 0 1 0 0-1h-11a.5.5 0 0 0 0 1z"/>
  </svg>
</template>
