import { useState } from 'react';

function SubscriptionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setNameError('');
    setEmailError('');

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

    if (!hasError) {
      alert(`Subscribed!\nName: ${name}\nEmail: ${email}`);
     
      setName('');
      setEmail('');
      setAgreed(false);
    }
  };

  return (
    <div>
      <h2>Subscription Form</h2>
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
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit" disabled={!agreed}>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;
