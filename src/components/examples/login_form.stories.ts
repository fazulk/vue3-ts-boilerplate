import { expect } from '@storybook/jest'
import { getNodeText, screen, userEvent } from '@storybook/testing-library'
import { Story } from '@storybook/vue3'

import LoginForm from './login_form.vue'

export default {
  title: 'Example/LoginForm',
  component: LoginForm
}

const Template: Story = (args) => ({
  components: { LoginForm },
  setup() {
    return { args }
  },
  template: '<login-form v-bind="args" />'
})

export const NoTitle = Template.bind({})

export const HasTitle = Template.bind({})

HasTitle.play = async () => {
  await userEvent.type(screen.getByTestId('email'), 'email@provider.com')
  await userEvent.type(screen.getByTestId('password'), 'a-random-password')

  await expect(getNodeText(screen.getByTestId('emailDisplay'))).toBe('')

  await userEvent.click(screen.getByRole('button'))

  await expect(getNodeText(screen.getByTestId('emailDisplay'))).toBe(
    'email@provider.com'
  )
}

HasTitle.args = {
  title: 'Some new Title'
}
