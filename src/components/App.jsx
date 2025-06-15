import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/App.module.css'
import { Outlet, Link } from "react-router-dom"
import { clear } from '@testing-library/user-event/dist/cjs/utility/clear.js'

function App() {
  const [products, setProducts] = useState([])
  
  let productAmounts = products.map((item) => {
    return item.amount
  })
  let total = productAmounts.reduce((acc, curr) => acc + parseInt(curr), 0)

  function addToCart(obj) {
    if (total < 450 && total + obj.amount < 450) {
      let newArr = products.filter(e => e.id !== obj.id)
      newArr.unshift({id: obj.id, amount: obj.amount})
      setProducts(newArr)
    } else {
      alert('Sorry! No more than 450 products can be added to the cart')
    }
  }

  function delFromCart(id) {
    let newArr = products.filter(e => e.id !== id)
    setProducts(newArr)
  }

  function changeAmount(id, amount) {
    let newArr = [...products]
    newArr.forEach(e => {
      if (e.id === id) {
        e.amount = amount
        setProducts(newArr)
      }
    })
  }

  function clearProducts() {
    setProducts([])
  }

  return (
    <>
      <Header totalAmount={total} />
      <main className={styles.main}>
        <Outlet context={{addToCart, delFromCart, changeAmount, clearProducts, products}}></Outlet>
      </main>
      <Footer />
    </>
  )
}

export default App
