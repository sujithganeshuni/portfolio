// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // To display submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! Thank you.');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setStatus(`Error: ${result.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error: Could not connect to the server.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Get In Touch</h1>
      <p className={styles.subtitle}>
        Have a question, a project idea, or just want to connect? I'd love to hear from you.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </div>
  );
};

export default ContactPage;