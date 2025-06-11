import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import CheckoutCard from '../components/CheckoutCard.jsx'
import { useState } from 'react'

describe('Checkout Card component',  () => {

    const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}


    it('Adds 1 when clicked on a Plus button', async () => {

        const user = userEvent.setup()

        const mockFn = vi.fn()

        render(<CheckoutCard product={product} amount={1} fns={mockFn}/>)
        const btn = screen.getByRole('button', {name: '+'})

        await user.click(btn)

        expect(mockFn).toHaveBeenCalledWith(1, 2)
    })

    it('Subtracts 1 when clicked on a Minus button', async () => {

        const user = userEvent.setup()

        const mockFn = vi.fn()

        render(<CheckoutCard product={product} amount={3} fns={mockFn}/>)
        const btn = screen.getByRole('button', {name: '-'})

        await user.click(btn)

        expect(mockFn).toHaveBeenCalledWith(1, 2)
    })

    it('Changes amount based on user input', async () => {

        const user = userEvent.setup()

        const mockFn = vi.fn()

        render(<CheckoutCard product={product} amount={1} fns={mockFn}/>)
        const input = screen.getByRole('input')

        await user.click(input)
        await user.keyboard('5')

        expect(mockFn).toHaveBeenCalledWith(1, '15')
    })

    it('Deletes product if amount reached 0', async () => {

        const user = userEvent.setup()

        const mockFn = vi.fn()
        const delFn = vi.fn()

        render(<CheckoutCard product={product} amount={1} fns={mockFn} delFn={delFn}/>)
        const btn = screen.getByRole('button', {name: '-'})

        await user.click(btn)

        expect(delFn).toHaveBeenCalled()
    })

    it('Deletes product when clicked on Delete button', async () => {

        const user = userEvent.setup()

        const mockFn = vi.fn()
        const delFn = vi.fn()

        render(<CheckoutCard product={product} amount={1} fns={mockFn} delFn={delFn}/>)
        const btn = screen.getByTestId('del_btn')

        await user.click(btn)

        expect(delFn).toHaveBeenCalled()
    })
})