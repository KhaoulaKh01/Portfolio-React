import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8s9umz2', 'template_7w6zdgn', form.current, 'BPHvQ2fiVYzzippSm')
      .then((result) => {
        toast.success('Email sent successfully!');
        form.current.reset();
      }, (error) => {
        toast.error('Failed to send email.');
        console.log(error.text);
      });
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.title}>Contact</div>
        <div className={styles.desc}>Feel free to reach out to me for any questions or opportunities!</div>
        <form className={styles.contactForm} ref={form} onSubmit={handleSubmit}>
          <div className={styles.contactTitle}>Email Me 🚀</div>
          <input className={styles.contactInput} placeholder="Your Email" name="from_email" required />
          <input className={styles.contactInput} placeholder="Your Name" name="from_name" required />
          <input className={styles.contactInput} placeholder="Subject" name="subject" required />
          <textarea className={styles.contactInputMessage} placeholder="Message" rows="4" name="message" required />
          <input className={styles.contactButton} type="submit" value="Send" />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
