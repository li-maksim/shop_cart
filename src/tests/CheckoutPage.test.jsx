import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CheckoutPage from "../components/CheckoutPage.jsx"
import Card from "../components/Card.jsx"

describe('CartPage component', () => {

    const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

    it('Adds product to the Cart', async () => {
        const user = userEvent.setup()
        render(<Card product={product}/>)
        const btn = screen.getByRole('button', {name: 'Add to Cart'})
        await user.click(btn)
        render(<CheckoutPage />)
        const item = screen.getByTestId('product_title')
        expect(item.textContent).toMatch(product.title)
    })
})