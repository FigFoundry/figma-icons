
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Actions',
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
    <path fill="#000" fill-rule="evenodd" d="M8.207 3.793a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414zM4.5 7.5l3 3 3-3-3-3zm12 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M19 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" clip-rule="evenodd"/><path fill="#000" d="M16.5 13a.5.5 0 0 1 .5.5V16h2.5a.5.5 0 0 1 0 1H17v2.5a.5.5 0 0 1-1 0V17h-2.5a.5.5 0 0 1 0-1H16v-2.5a.5.5 0 0 1 .5-.5"/><path fill="#000" fill-rule="evenodd" d="M11 15a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2zm-6 0a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" clip-rule="evenodd"/>
  </svg>
</template>
