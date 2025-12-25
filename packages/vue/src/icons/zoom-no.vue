
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZoomNo',
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
    <path fill="#000" d="M8.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M10.5 16a5.48 5.48 0 0 0 3.544-1.294.5.5 0 0 0 .103.148l3 3a.5.5 0 1 0 .707-.708l-3-3a.5.5 0 0 0-.148-.102A5.5 5.5 0 1 0 10.5 16m0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" clip-rule="evenodd"/>
  </svg>
</template>
