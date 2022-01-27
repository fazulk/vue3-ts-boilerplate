import { composeStories } from '@fazulk/testing-vue3'
import { render } from '@testing-library/vue'

import * as stories from './login_form.stories'

const { HasTitle, NoTitle } = composeStories(stories)

test('Displays default prop value', async () => {
  expect(NoTitle()).toBeTruthy()

  const wrapper = render(NoTitle())
  const { getByTestId } = wrapper

  expect(getByTestId('title').textContent).toBe('Title Goes Here')
})
test('Displays prop', async () => {
  expect(HasTitle()).toBeTruthy()

  const wrapper = render(HasTitle())
  const { getByTestId } = wrapper

  expect(getByTestId('title').textContent).toBe('Some new Title')
})

test('Runs Interactions as a test', async () => {
  const { container } = render(HasTitle())
  if (container instanceof HTMLElement)
    await HasTitle.play({ canvasElement: container as HTMLElement })
})
