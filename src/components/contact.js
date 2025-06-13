import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({}); // reset errors on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ email: "", name: "", message: "" });
      }, 2000); // Fake submission delay
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} id="contact">
      <h2 className={styles.heading}>Get In Touch</h2>
        
 <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  className={styles.input}
/>
{errors.name && <p className={styles.error}>{errors.name}</p>}
      <input
        type="email"
        name="email"
        placeholder="Your email Id"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      {/* <select
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className={styles.input}
      >
        <option value="">Subject</option>
        <option value="Support">Support</option>
        <option value="Sales">Sales</option>
        <option value="Other">Other</option>
      </select>
      {errors.subject && <p className={styles.error}>{errors.subject}</p>} */}

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
      />
      {errors.message && <p className={styles.error}>{errors.message}</p>}

      <button type="submit" className={styles.button}>
        SUBMIT
      </button>

      {submitted && <p className={styles.success}>Message submitted successfully!</p>}
    </form>
  );
};

export default ContactForm;
