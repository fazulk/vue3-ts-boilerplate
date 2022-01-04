<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title Goes Here'
    }
  },
  setup() {
    const user = reactive({
      password: '',
      email: ''
    })

    const newUser = reactive({
      password: '',
      email: ''
    })

    const submit = () => {
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
  <form @submit.prevent="submit">
    Email<br />
    <span data-testid="emailDisplay">{{ newUser.email }}</span>
    <br />
    <input v-model="user.email" data-testid="email" type="email" />
    Password
    <input v-model="user.password" data-testid="password" type="password" />
    <button>Submit</button>
  </form>
</template>
