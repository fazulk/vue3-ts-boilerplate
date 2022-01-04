import { Story } from '@storybook/vue3'

import Counter from './counter.vue'

export default {
  title: 'Example/Counter',
  component: Counter
}

const Template: Story = (args) => ({
  components: { Counter },
  setup() {
    return { args }
  },
  template: '<counter v-bind="args" />'
})

export const DefaultMessage = Template.bind({})

export const CustomMessage = Template.bind({})

CustomMessage.args = {
  clickMessage: 'Custom Message'
}
