
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagesNew',
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
    <path fill="#000" d="M11 10a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 1 1-1 0v-2h-2a.5.5 0 1 1 0-1h2v-2a.5.5 0 0 1 .5-.5"/><path fill="#000" fill-rule="evenodd" d="M20 16a2 2 0 0 1-2 2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM6 19h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1" clip-rule="evenodd"/>
  </svg>
</template>
