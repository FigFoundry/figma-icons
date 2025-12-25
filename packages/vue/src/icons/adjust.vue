
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Adjust',
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
    <path fill="#000" fill-rule="evenodd" d="M7 4.5a.5.5 0 0 1 1 0V12l-.002.05a2.5 2.5 0 0 1 0 4.9L8 17v2.5a.5.5 0 1 1-1 0V17l.002-.05a2.5 2.5 0 0 1 0-4.9L7 12zm2 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 5a.5.5 0 1 0 1 0V12l-.002-.05a2.5 2.5 0 0 0 0-4.9L17 7V4.5a.5.5 0 1 0-1 0V7q0 .025.003.05a2.5 2.5 0 0 0 0 4.9L16 12zm2-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clip-rule="evenodd"/>
  </svg>
</template>
