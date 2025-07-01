import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>✨ Khushi's Form ✨</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Username */}
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              className={styles.input}
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div className={styles.formGroup}>
            <label>Gender:</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
