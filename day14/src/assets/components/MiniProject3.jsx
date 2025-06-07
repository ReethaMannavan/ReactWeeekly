import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');
    setMessageError('');

    let hasError = false;

    if (!name.trim()) {
      setNameError('Name is required');
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError('Message is required');
      hasError = true;
    }

    if (!hasError) {
      alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
     
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <div>
          <label>Message:</label><br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            cols="40"
          ></textarea>
          {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
