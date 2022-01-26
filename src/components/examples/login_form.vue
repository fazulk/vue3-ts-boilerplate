<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title Goes Here'
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const user = reactive({
      password: '',
      email: ''
    })

    const newUser = reactive({
      password: '',
      email: ''
    })

    const submit = () => {
      emit('submit')
      newUser.email = user.email
    }

    return {
      user,
      submit,
      newUser
    }
  }
})
</script>

<template>
  <h1 data-testid="title">{{ title }}</h1>
  <form @submit.prevent>
    Email<br />
    <span data-testid="emailDisplay">{{ newUser.email }}</span>
    <br />
    <input v-model="user.email" data-testid="email" type="email" />
    Password
    <input v-model="user.password" data-testid="password" type="password" />
    <button @click="submit">Submit</button>
  </form>
</template>
