import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
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
      <h1>MY APP</h1>
      <div>
        <Outlet context={{addToCart, products}}></Outlet>
      </div>
    </>
  )
}

export default App
