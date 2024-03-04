import React, { useState } from 'react';
import './style.css';

function Form() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //Clear the input after submission and alert the user 'Thank you for your message' message.
    alert(`Hi ${formData.firstName}, thank you for your message. We will get back to you as soon.`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  // State each input's value, name and onchange properties
  return (
    <div>
        <h1>Contact Form</h1>
        <form className="form">
            <div class="mb-5 row">
                <div class="col">
                <label>First Name</label>
                <input
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                </div>
                <div class="col">
                <label>Last Name</label>
                <input
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                </div>
            </div>
            <div class="mb-10 row">
                    <label for="email_addr">Email address</label>
                    <input
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="name@example.com"
                    />
            </div>
            <div class="mb-5">
                <label for="message">Message</label>
                <input
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your message here."
                />
            </div>
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>     
    </div>
  );
}

export default Form;
