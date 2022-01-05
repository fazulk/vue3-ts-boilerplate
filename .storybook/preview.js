import * as jest from '@storybook/jest'

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
window.jest = jest

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
