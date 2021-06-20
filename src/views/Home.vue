<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App">
      <template #default="{ item }">
        {{ item.msg }}
      </template>
    </HelloWorld>
    <v-input v-model="bind" @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import VInput from '@/components/VInput.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    VInput,
  },
  setup() {
    const bind = ref('hello')
    const handleChange = () => {
      /* */
    }
    return {
      bind,
      handleChange,
    }
  },
})
</script>
