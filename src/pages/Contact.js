import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    const SERVICE_ID = 'service_j419cnq';
    const TEMPLATE_ID = 'template_aql6vg4';
    const PUBLIC_KEY = 'jmHUWcrvgGIsJUSew';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Nqobile',
        },
        PUBLIC_KEY,
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: "✅ Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message:
          '❌ Oops! Something went wrong. Please try again or email me directly.',
      });
    }
  };

  return (
    <Main
      title="Contact"
      description="Contact Nqobile Masombuka via email nqobilemasombuka77@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>
            Feel free to get in touch! You can use the form below, click any of
            the linked icons, or email me directly at:{' '}
            <a href="mailto:nqobilemasombuka77@gmail.com">
              nqobilemasombuka77@gmail.com
            </a>
          </p>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message here..."
            />
          </div>

          {/* Status Messages */}
          {status.message && (
            <div
              className={`status-message ${status.success ? 'success' : 'error'}`}
            >
              {status.message}
            </div>
          )}

          <div className="form-actions">
            <button
              type="submit"
              className="button primary"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
