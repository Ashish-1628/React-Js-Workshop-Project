import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer'

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 'Product-1',
      title: 'Premium Ball Pen',
      price: 20,
      image:
        'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500'
    },
    {
      id: 'Product-2',
      title: 'Wooden Pencil',
      price: 10,
      image:
        'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=500'
    },
    {
      id: 'Product-3',
      title: 'Geometry Compass',
      price: 25,
      image:
        '/Images/compass.jpg'
    }
  ])

  const [cart, setCart] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <BrowserRouter>
      <Header
        cart={cart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App