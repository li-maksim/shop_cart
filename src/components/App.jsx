import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/App.module.css'
import { Outlet, Link } from "react-router-dom"

function App() {
  const [products, setProducts] = useState([])
  
  function addToCart(obj) {
    // console.log(obj)
    if (products.some(e => e.id === obj.id)) {
      let item = products.find(e => e.id === obj.id)
      let newArr = products.filter(e => e.id !== obj.id)
      newArr.unshift({id: obj.id, amount: item.amount + obj.amount})
      setProducts(newArr)
    } else {
      setProducts([...products, {id: obj.id, amount: obj.amount}])
    }
  }
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet context={{addToCart, products}}></Outlet>
      </main>
      <Footer />
    </>
  )
}

export default App
