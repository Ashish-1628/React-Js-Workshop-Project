import React from 'react'

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="page-label">About Our Store</p>

        <h1>Making online shopping simple and convenient.</h1>

        <p>
          Shopify Cart is a simple e-commerce website created to provide
          customers with a smooth and convenient shopping experience.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <div className="about-card-icon">🛍️</div>

          <h2>Who We Are</h2>

          <p>
            We are a customer-focused online store offering useful products
            at affordable prices. Our goal is to make product discovery,
            cart management, and online shopping easy for everyone.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">🎯</div>

          <h2>Our Mission</h2>

          <p>
            Our mission is to create a simple, reliable, and user-friendly
            shopping platform where customers can explore products and
            manage their purchases comfortably.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">⭐</div>

          <h2>Why Choose Us?</h2>

          <p>
            We focus on simple navigation, affordable products, transparent
            pricing, and a convenient shopping experience.
          </p>
        </div>
      </section>

      <section className="about-highlight">
        <h2>Shop smarter. Shop simpler.</h2>

        <p>
          Explore our products and add your favourite items to the cart.
        </p>
      </section>
    </main>
  )
}

export default About