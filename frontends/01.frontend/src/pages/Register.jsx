import React, { useState } from 'react';
import '../styles/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contact: '',
    profession: '',
    age: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Registration successful');
        // Optional: Redirect to login page
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label htmlFor="contact">Contact No.</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} pattern="[0-9]{10}" required />

        <label htmlFor="profession">Profession</label>
        <select name="profession" value={formData.profession} onChange={handleChange} required>
          <option value="">Select your profession</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="developer">Developer</option>
          <option value="doctor">Doctor</option>
          <option value="engineer">Engineer</option>
          <option value="artist">Artist</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} min="1" max="120" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        {/*<label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />*/}

        <button type="submit">Register</button>

        <div className="content">
          <a href="/Login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
