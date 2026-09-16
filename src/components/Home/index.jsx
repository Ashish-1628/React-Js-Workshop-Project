import React from 'react'

const Home = ({ products, cart, setCart }) => {
  const productQty = (productId) => {
    const item = cart.find((item) => item.id === productId)
    return item ? item.qty : 0
  }

  const add = (product) => {
    const alreadyExisted = cart.some((item) => item.id === product.id)

    const updatedCart = alreadyExisted
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      : [...cart, { ...product, qty: 1 }]

    setCart(updatedCart)
  }

  const remove = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)

    setCart(updatedCart)
  }

  return (
    <main className="home-page">
      <section className="hero-section">
        <div>
          <p className="hero-subtitle">Welcome to Shopify Cart</p>
          <h1>Everything you need, all in one place.</h1>
          <p>
            Explore useful products at affordable prices and add your
            favourites to your cart.
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <h2>Popular Products</h2>
          <p>Explore our latest collection</p>
        </div>

        {products.length === 0 ? (
  <div className="no-products">
    <h3>No products found</h3>
    <p>Try searching with a different product name.</p>
  </div>
) : (
  <div className="product-grid">
    {products.map((product) => (
      <article className="product-card" key={product.id}>
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="product-info">
          <p className="product-category">Featured Product</p>

          <h3>{product.title}</h3>

          <p className="product-price">₹{product.price}</p>

          <div className="quantity-controls">
            <button
              className="quantity-button"
              onClick={() => remove(product)}
            >
              -
            </button>

            <span>{productQty(product.id)}</span>

            <button
              className="quantity-button"
              onClick={() => add(product)}
            >
              +
            </button>
          </div>

          <button
            className="add-cart-button"
            onClick={() => add(product)}
          >
            Add to Cart
          </button>
        </div>
      </article>
    ))}
  </div>
  )}
      </section>
    </main>
  )
}

export default Home