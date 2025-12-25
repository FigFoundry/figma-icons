
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cut',
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
    <path fill="#000" d="M6.224 15.448a.5.5 0 1 1-.448-.895l4-2a.5.5 0 0 1 .448.895z"/><path fill="#000" fill-rule="evenodd" d="M12 11.441 6.224 8.553a.5.5 0 1 0-.448.895l5.995 2.997.01.005 1.673.836-.25 1.753a2.45 2.45 0 0 0 1.329 2.537l.243.122a2.177 2.177 0 1 0 1.948-3.895l-2.49-1.245-.02-.01L13.117 12l1.095-.547.021-.01 2.49-1.245a2.177 2.177 0 0 0-1.947-3.894l-.244.122a2.45 2.45 0 0 0-1.33 2.537l.251 1.751zm2.194-2.62.203 1.422 1.88-.94a1.177 1.177 0 0 0-1.053-2.105l-.244.122a1.45 1.45 0 0 0-.786 1.502m0 6.36.203-1.423 1.88.94a1.177 1.177 0 0 1-1.053 2.105l-.244-.122a1.45 1.45 0 0 1-.786-1.5" clip-rule="evenodd"/>
  </svg>
</template>
