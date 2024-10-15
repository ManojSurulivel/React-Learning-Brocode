// 3. Implement Auto-Save form details with Debouncing
// Create a react form with username and password fileds
// Create a custom debounce function to delay the operations
// When user stops typing use the debounce function to autosave the username and

import React, { useState, useEffect } from 'react';
import './App.css'

const Practice2 = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Simulate an auto-save function
  const saveData = (data) => {
    console.log("Auto-saving data: ", data);
    // Replace with your save logic (e.g., API call)
  };

  useEffect(() => {
      const handler = setTimeout(() => {
        saveData(formData);
      }, 1000);

      return () => {
        clearTimeout(handler);
      };
    
  }, [formData]);

  // Handle input changes and trigger isTyping
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
   <div className="container">
      <form className="form">
        <div className="inputGroup">
          <label className="label">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>
      </form>
    </div>
  );
};

export default Practice2;


