<template>
  <div class="v-input-wrapper">
    <input :value="value" @change="handleValueChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'VInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    shortcuts: {
      type: Boolean,
      default: true,
    },
    noBtns: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  setup(_, ctx) {
    const handleValueChange = (e: Event) => {
      ctx.emit('input', (e.target as HTMLInputElement).value)
    }
    return {
      handleValueChange,
    }
  },
})
</script>

<style lang="scss" scoped>
.v-input-wrapper {
  font-size: 14px;
}
</style>
