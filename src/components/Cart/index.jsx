import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    )

    setCart(updatedCart)
  }

  const decreaseQuantity = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)

    setCart(updatedCart)
  }

  const removeProduct = (product) => {
    const updatedCart = cart.filter(
      (item) => item.id !== product.id
    )

    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            Looks like you have not added anything to your cart yet.
          </p>

          <Link to="/" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <h1>Shopping Cart</h1>
          <p>Review your selected products</p>
        </div>

        <button
          className="clear-cart-button"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((product) => {
            const itemTotal = product.price * product.qty

            return (
              <article className="cart-item" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                />

                <div className="cart-item-details">
                  <h3>{product.title}</h3>

                  <p className="cart-item-price">
                    ₹{product.price} per item
                  </p>

                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-button"
                        onClick={() => decreaseQuantity(product)}
                      >
                        -
                      </button>

                      <span>{product.qty}</span>

                      <button
                        className="quantity-button"
                        onClick={() => increaseQuantity(product)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => removeProduct(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong className="cart-item-total">
                  ₹{itemTotal}
                </strong>
              </article>
            )
          })}
        </section>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{total}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong className="free-delivery">FREE</strong>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row grand-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button
            className="checkout-button"
            onClick={() =>
              alert('Checkout feature will be added soon!')
            }
          >
            Proceed to Checkout
          </button>

          <Link
            to="/"
            className="continue-shopping-link"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  )
}

export default Cart