import React, {useRef, useState} from 'react';
import "../styles/Contact.css";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_message, setUserMessage] = useState("");

  const sendEmail = (e) => {
    alert("Thank you for your submission.")
    e.preventDefault();
    setUserName("");
    setUserEmail("");
    setUserMessage("");

    emailjs.sendForm('outlook', 'receipt_msg', form.current, '6NSTcaNsKZrclMGvh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
  
  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <h2>Contact.</h2>
      <div className="contact-subtitle">
        <p>I'd love to hear from you.</p>
      </div>
      <div className="contact-name">
        <label style={{color:"#fff"}}>Name:</label>
        <input type="text" name="name" onChange={(e) => setUserName(e.target.value)} value={user_name} required />
      </div>
      <div className="contact-email">
        <label style={{color:"#fff"}}>Email:</label>
        <input type="text" name="email" onChange={(e) => setUserEmail(e.target.value)} value={user_email} required />
      </div>
      <div className="contact-msg">
        <label style={{color:"#fff"}}>Message:</label>
        <textarea name="message" rows="10" cols="50" onChange={(e) => setUserMessage(e.target.value)} value={user_message} required />
      </div>
      <div className="contact-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Contact