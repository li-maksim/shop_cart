import { useState } from 'react'
import Header from './Header.jsx';
import styles from '../styles/App.module.css'
import { Outlet, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([])
  
  function addToCart(obj) {
    console.log(obj)
    setProducts([...products, {id: obj.id, amount: obj.amount}])
  }
  return (
    <>
      <Header />
      <main>
        <Outlet context={{addToCart, products}}></Outlet>
      </main>
    </>
  )
}

export default App
