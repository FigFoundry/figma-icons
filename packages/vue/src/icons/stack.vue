
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Stack',
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
    <path fill="#000" fill-rule="evenodd" d="M6 14a1 1 0 0 1 .486-.858L8.389 12l-1.903-1.143a1 1 0 0 1 0-1.715l4.485-2.69a2 2 0 0 1 2.058 0l4.486 2.69a1 1 0 0 1 0 1.715L15.61 12l1.904 1.142a1 1 0 0 1 0 1.715l-4.486 2.692a2 2 0 0 1-2.058 0l-4.485-2.692A1 1 0 0 1 6 14m11-4-4.485-2.691a1 1 0 0 0-1.03 0L7 10l4.486 2.691a1 1 0 0 0 1.028 0zm-2.361 2.583L17 14l-4.485 2.691a1 1 0 0 1-1.03 0L7 14l2.361-1.417 1.61.966a2 2 0 0 0 2.058 0z" clip-rule="evenodd"/>
  </svg>
</template>
