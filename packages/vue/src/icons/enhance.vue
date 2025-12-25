
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Enhance',
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
    <path fill="#000" d="M18.015 5.44 17.7 6.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L19.3 8.3l1.26-.315c.505-.126.505-.844 0-.97L19.3 6.7l-.315-1.26c-.126-.505-.844-.505-.97 0M14.5 7a.5.5 0 0 1 0 1h-8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 15.5v-7A1.5 1.5 0 0 1 6.5 7z"/><path fill="#000" d="M8.5 9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-2h2v2a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v2h-2z"/><path fill="#000" fill-rule="evenodd" d="M12.5 9.5A.5.5 0 0 1 13 9h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H13a.5.5 0 0 1-.5-.5zm1 4.5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1z" clip-rule="evenodd"/>
  </svg>
</template>
