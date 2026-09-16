import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <p className="page-label">Get In Touch</p>

        <h1>We would love to hear from you.</h1>

        <p>
          Have a question, suggestion, or feedback? Send us a message.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            Our support team is here to help you with your questions and
            suggestions.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">📧</span>

            <div>
              <h3>Email</h3>
              <p>support@shopifycart.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">📞</span>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">📍</span>

            <div>
              <h3>Address</h3>
              <p>Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>

          {submitted && (
            <div className="success-message">
              Thank you! Your message has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <button type="submit" className="submit-message-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact