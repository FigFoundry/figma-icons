
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Rotate180',
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
    <path fill="#000" d="M8 11a4 4 0 1 1 8 0v1.5a.5.5 0 0 0 1 0V11a5 5 0 0 0-10 0v.293l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8 11.293z"/><path fill="#000" d="M17.147 17.854 12 12.707l-5.146 5.147a.5.5 0 0 1-.708-.708l5.324-5.323a.75.75 0 0 1 1.06 0l5.324 5.323a.5.5 0 0 1-.707.708"/>
  </svg>
</template>
