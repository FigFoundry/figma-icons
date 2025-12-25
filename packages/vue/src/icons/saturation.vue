
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Saturation',
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
    <path fill="#000" fill-opacity=".3" d="M13.977 13.544A4.5 4.5 0 0 0 12 10.258a4.5 4.5 0 0 0-1.977 3.286A4.5 4.5 0 0 0 12 14c.71 0 1.38-.164 1.977-.456"/><path fill="#000" fill-rule="evenodd" d="M12 18.9a5.5 5.5 0 0 0 5.499-9.512 5.5 5.5 0 0 0-10.998 0A5.5 5.5 0 0 0 12 18.9M7.546 8.857A5.5 5.5 0 0 1 9.5 8.5c.9 0 1.75.216 2.5.6.75-.384 1.6-.6 2.5-.6.688 0 1.347.126 1.954.357a4.501 4.501 0 0 0-8.908 0m3.455.9a5.5 5.5 0 0 0-1.9 3.185 4.5 4.5 0 0 1-1.578-2.986A4.5 4.5 0 0 1 9.5 9.5c.526 0 1.031.09 1.5.256m.999.5a4.5 4.5 0 0 1 1.977 3.287A4.5 4.5 0 0 1 12 14a4.5 4.5 0 0 1-1.977-.457A4.5 4.5 0 0 1 12 10.259m2.898 2.685A5.5 5.5 0 0 0 13 9.756c.47-.166.975-.256 1.501-.256.71 0 1.38.164 1.977.456a4.5 4.5 0 0 1-1.579 2.986m-.944 1.7A5.5 5.5 0 0 1 12 15a5.5 5.5 0 0 1-1.954-.357 4.5 4.5 0 0 0 1.954 3.1 4.5 4.5 0 0 0 1.954-3.1M13 18.245a5.49 5.49 0 0 0 2-4.133 5.5 5.5 0 0 0 2.4-3.553 4.5 4.5 0 0 1-4.4 7.686m-1.998 0a4.5 4.5 0 0 1-4.4-7.686 5.5 5.5 0 0 0 2.4 3.553 5.49 5.49 0 0 0 2 4.133" clip-rule="evenodd"/>
  </svg>
</template>
