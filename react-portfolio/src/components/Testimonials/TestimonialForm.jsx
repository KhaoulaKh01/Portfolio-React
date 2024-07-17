import React, { useState, useEffect, useContext } from "react";
//import { CurrentUserContext } from "../../CurrentUserProvider.jsx";
import styles from "./TestimonialForm.module.css";

export const TestimonialForm = ({ existingTestimonial, onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(""); // État pour l'email
  //const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (existingTestimonial) {
      setAuthor(existingTestimonial.author);
      setMessage(existingTestimonial.message);
      setEmail(existingTestimonial.email || ""); // Si l'email existe déjà, le remplir
    }
  }, [existingTestimonial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, message, email, date: new Date().toLocaleDateString() }); // Inclure l'email ici
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </label>
      <label>
        Email: {/* Nouveau champ pour l'email */}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button type="submit">{existingTestimonial ? "Update" : "Submit"}</button>
    </form>
  );
};
