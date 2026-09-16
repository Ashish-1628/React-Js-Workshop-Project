import React from 'react'
import Nav from './Nav'

const Header = ({ cart, searchTerm, setSearchTerm }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">S</span>
          <span>Shopify Cart</span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <button>Search</button>
        </div>

        <Nav cart={cart} />
      </div>
    </header>
  )
}

export default Header