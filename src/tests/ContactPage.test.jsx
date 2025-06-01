import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactPage from '../components/ContactPage.jsx'

describe('ContactPage component', () => {

    it('Changes name input value', async () => {

        const user = userEvent.setup()
        render(<ContactPage />)
        const input = screen.getByPlaceholderText('Name')

        await user.click(input)
        await user.keyboard('foo')

        expect(input.value).toMatch('foo')
    })

    it('Changes phone input value', async () => {

        const user = userEvent.setup()
        render(<ContactPage />)
        const input = screen.getByPlaceholderText('Phone')

        await user.click(input)
        await user.keyboard('3')

        expect(input.value).toMatch('3')

    })

    it('Changes comment textarea', async () => {

        const user = userEvent.setup()
        render(<ContactPage />)
        const input = screen.getByPlaceholderText('Comment')

        await user.click(input)
        await user.keyboard('bar')

        expect(input.value).toMatch('bar')
    })

    it('"Submits" form', async () => {

        const user = userEvent.setup()
        render(<ContactPage />)
        const btn = screen.getByRole('button')
        const input = screen.getByPlaceholderText('Phone')

        await user.click(input)
        await user.keyboard('+7966904')
        await user.click(btn)

        expect(input.value).toMatch('')
    })
})