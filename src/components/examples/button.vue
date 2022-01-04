<script lang="ts">
import './button.css'

import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small',
      validator: (value: string) => {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props.primary
    props = reactive(props)
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor
      })),
      onClick() {
        emit('click')
      }
    }
  }
})
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="onClick">{{
    label
  }}</button>
</template>
