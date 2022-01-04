<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Counter',
  props: {
    clickMessage: { type: String, default: 'You did it!' }
  },
  data: () => ({
    count: 0,
    showClickMessage: false
  }),
  methods: {
    increment() {
      this.count++
      this.showClickMessage = true
    }
  }
})
</script>

<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
    <p v-if="showClickMessage">{{ clickMessage }}</p>
  </div>
</template>
