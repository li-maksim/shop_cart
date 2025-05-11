import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Card from "../components/Card"

describe('Card component',  () => {

    const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

    it('Adds +1 to amount with the plus button', async () => {

        const user = userEvent.setup()
        render(<Card product={product}/>)
        const input = screen.getByRole('input')
        const btn = screen.getByRole('button', {name: '+'})

        await user.click(btn)

        expect(input.value).toMatch(2)
    })

    it('Changes amount based on user input', async () => {

        const user = userEvent.setup()
        render(<Card product={product}/>)
        const input = screen.getByRole('input')

        await user.click(input)
        await user.keyboard('4')

        expect(input.value).toMatch(4)
    })

    it('Decreases amount with the minus button', async () => {

        const user = userEvent.setup()
        render(<Card product={product}/>)
        const input = screen.getByRole('input')
        const minusBtn = screen.getByRole('button', {name: '-'})

        await user.click(input)
        await user.keyboard('4')
        await user.click(minusBtn)

        expect(input.value).toMatch(3)
    })

    it('Does not decrease amount to zero', async () => {

        const user = userEvent.setup()
        render(<Card product={product}/>)
        const input = screen.getByRole('input')
        const minusBtn = screen.getByRole('button', {name: '-'})

        await user.click(minusBtn)

        expect(input.value).toMatch(1)
    })

    it('Does not increase amount to 100', async () => {

        const user = userEvent.setup()
        render(<Card product={product}/>)
        const input = screen.getByRole('input')
        const btn = screen.getByRole('button', {name: '+'})

        await user.click(input)
        await user.keyboard('{Backspace}')
        await user.keyboard('9')
        await user.keyboard('9')
        await user.keyboard('{Enter}')
        await user.click(btn)

        expect(input.value).toMatch(99)
    })
})