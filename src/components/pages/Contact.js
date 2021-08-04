import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import '../../App.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {

  // Create state variables for the fields in the form & an error message.
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('')
 const [message, setMessage] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleInputChange = (e) => {
   const { target } = e;
   const inputType = target.name;
   const inputValue = target.value;
  
   // Based on the input type, we set the state of either field of the form.
   if (inputType === 'firstName') {
     setFirstName(inputValue);
   } else if (inputType === 'lastName') {
     setLastName(inputValue);
   } else if (inputType === 'email') {
     setEmail(inputValue);
   } else if (inputType === 'message') {
     setMessage(inputValue);
   }
 }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page).
    e.preventDefault();
    // First we check to see if the email is not valid or if any of the fields is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !firstName || !lastName || !message) {
      setErrorMessage('Please use a valid email and/or complete all fields');
       // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    alert(`${firstName} ${lastName}, thank you for contacting me`)
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <section id='Contact Me'>
      {/* React Helmet takes plain HTML tags and outputs plain HTML tags. */}
      <Helmet>
        <title>Contact | Aran</title>
      </Helmet>
      <h2>Contact Me</h2>
      <figure>
      <p>Not a fan of forms? You can always reach me by phone or email:
        <br/>
        <a href='tel:+01-919-869-6193'>PHONE: +1-919-869-6193 </a>
        <br/>
        <a href='mailto: ghibli.github@gmail.com'> EMAIL: ghibli.github@gmail.com </a>
        <br/>
        <br/>
      </p>
     
      <form className='form'>
        <input
          value={firstName}
          name='firstName'
          onChange={handleInputChange}
          type='text'
          placeholder='First Name*'        
        />
        <br/>
        <input
          value={lastName}
          name='lastName'
          onChange={handleInputChange}
          type='text'
          placeholder='Last Name*'
        />
        <br/>

        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email*'
        />
        <br/>
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Your Message*'
          className='message'
        />
        <button className='form-button' type='button' onClick={handleFormSubmit}>
        Submit
        </button>
      </form>
      <div>
        <p className='error-text'>
          {errorMessage}
        </p>
      </div>
      </figure>
    </section>
  );
};

export default Contact
