import { Close, EmailOutlined } from '@mui/icons-material';
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Contact.scss';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="contact">
      {showAlert ? (
        <Alert
          onClose={() => setShowAlert(false)}
          variant="filled"
          severity="success"
        >
          <span style={{ color: 'lightgray' }}>(fake)</span> Message
          successfully sended!
        </Alert>
      ) : null}

      <Link to="/">
        <Close fontSize="large" />
        {/* <span>Close</span> */}
      </Link>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowAlert(true);
        }}
        className="contact-form"
      >
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name..." required />
        <input type="email" placeholder="E-mail..." required />
        <input
          type="text"
          placeholder="Message..."
          className="message"
          required
        />
        <button type="submit">
          <EmailOutlined />
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
