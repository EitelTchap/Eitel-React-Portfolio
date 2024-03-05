import React, { useState } from 'react';
import './style.css';
import contact from "./contact.json"

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
    alert(`Hi ${formData.firstName} ${formData.lastName}, thank you for your message. We will get back to you as soon as possible!`);
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
            <div className="mt-3 mb-3 row">
                <div className="col">
                <label>First Name</label>
                <input
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                />
                </div>
                <div className="col">
                <label>Last Name</label>
                <input
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                />
                </div>
            </div>
            <div className="mt-3 mb-3">
                    <label htmlFor="email_addr">Email address</label>
                    <input
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    className="form-control"
                    id="email_addr"
                    placeholder="name@example.com"
                    />
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here."
                    rows="6"
                ></textarea>
            </div>
            <button type="button" className="btn btn-primary px-4 btn-lg" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>

        <div className="mt-5">
          <h2>Contact List</h2>
              <ul className="list-unstyled">
                {contact.map((contact, index) => (
                  <li key={index}>
                      <strong>{contact.name}</strong><a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.link}</a>
                  </li>
                    ))}
              </ul>
        </div>     
    </div>
  );
}

export default Form;
