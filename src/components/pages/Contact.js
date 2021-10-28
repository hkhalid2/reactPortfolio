import React, { useState } from 'react';
import '../../styles/style.css';

//function that uses regex to validate email.
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Contact() {
  
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email invalid');
      
      return;
    }
   
    setName('');
    setComment('');
    setEmail('');
  };

  return (
    <div>
      <p></p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Input your fullname"
        />
        <input
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="Leave a comment or Question."
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
