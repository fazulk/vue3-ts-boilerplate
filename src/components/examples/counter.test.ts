import { composeStories } from '@storybook/testing-vue3'
import { fireEvent, render, screen } from '@testing-library/vue'

import * as stories from './counter.stories'

const { DefaultMessage, CustomMessage } = composeStories(stories)

describe('this comp', () => {
  test('increments value on click', async () => {
    // The render method returns a collection of utilities to query your component.
    const { getByText } = render(DefaultMessage())

    // getByText returns the first matching node for the provided text, and
    // throws an error if no elements match or if more than one match is found.
    getByText('Times clicked: 0')

    const button = getByText('increment')

    expect(screen.queryByText('You did it!')).toBeFalsy()

    // Dispatch a native click event to our button element.
    await fireEvent.click(button)
    await fireEvent.click(button)

    getByText('Times clicked: 2')

    expect(screen.queryByText('Custom Message')).toBeFalsy()
    expect(screen.queryByText('You did it!')).toBeTruthy()
  })

  test('shows custom display message', async () => {
    // The `render` method renders the component into the document.
    // It also binds to `screen` all the available queries to interact with
    // the component.
    render(CustomMessage())

    // queryByText returns the first matching node for the provided text
    // or returns null.
    expect(screen.queryByText('Times clicked: 0')).toBeTruthy()

    // getByText returns the first matching node for the provided text
    // or throws an error.
    const button = screen.getByText('increment')

    // Click a couple of times.
    await fireEvent.click(button)
    await fireEvent.click(button)

    expect(screen.queryByText('Times clicked: 2')).toBeTruthy()

    expect(screen.queryByText('Custom Message')).toBeTruthy()
  })
})
