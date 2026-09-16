import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ cart }) => {
  const productQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  )

  return (
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Link to="/cart" className="cart-link">
        Cart
        <span className="cart-badge">{productQty}</span>
      </Link>
    </nav>
  )
}

export default Nav