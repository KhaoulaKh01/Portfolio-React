import React, { useState, useEffect } from "react";
import testimonialsData from "../../data/Testimonials.json";
import styles from "./Testimonials.module.css";
import { TestimonialForm } from "./TestimonialForm";
import EmailModal from "./EmailModal";

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [currentTestimonialId, setCurrentTestimonialId] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [actionType, setActionType] = useState(null); // New state to differentiate actions
  const [currentIndex, setCurrentIndex] = useState(0); // Ajout de l'index actuel


  useEffect(() => {
    const storedTestimonials = localStorage.getItem("testimonials");
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    } else {
      const initialTestimonials = testimonialsData.map((testimonial, index) => ({
        ...testimonial,
        id: index + 1,
      }));
      setTestimonials(initialTestimonials);
      localStorage.setItem("testimonials", JSON.stringify(initialTestimonials));
    }
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }, [testimonials]);

  const handleEdit = (id) => {
    const testimonialToEdit = testimonials.find(t => t.id === id);
    if (testimonialToEdit) {
      setCurrentTestimonialId(id);
      setEditingTestimonial(testimonialToEdit);
      setActionType('edit'); // Set action type to edit
      setEmailModalOpen(true); // Open email modal
    }
  };

  const handleDelete = (id) => {
    setCurrentTestimonialId(id);
    setActionType('delete'); // Set action type to delete
    setEmailModalOpen(true); // Open email modal
  };

  const confirmAction = (email) => {
    const testimonial = testimonials.find((t) => t.id === currentTestimonialId);
    if (testimonial && testimonial.email === email) {
      if (actionType === 'edit') {
        setShowForm(true); // Show form for editing
      } else if (actionType === 'delete') {
        const updatedTestimonials = testimonials.filter((t) => t.id !== currentTestimonialId);
        setTestimonials(updatedTestimonials); // Delete testimonial
      }
      setEmailModalOpen(false); // Close email modal
      setCurrentTestimonialId(null); // Reset current testimonial ID
    } else {
      alert("L'email saisi ne correspond pas à l'auteur du témoignage.");
    }
  };

  const handleAddOrUpdateTestimonial = (newTestimonial) => {
    if (editingTestimonial) {
      setTestimonials((prev) =>
        prev.map((t) =>
          t.id === editingTestimonial.id ? { ...newTestimonial, id: editingTestimonial.id } : t
        )
      );
    } else {
      setTestimonials((prev) => [...prev, { ...newTestimonial, id: Date.now() }]);
    }
    setEditingTestimonial(null);
    setShowForm(false);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.container}id="testimonials">
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.testimonialContainer}>
      <button className={styles.navButton} onClick={prevTestimonial}>❮</button>
       {testimonials.length > 0 && (
  <div className={styles.testimonial}>
    <p>{testimonials[currentIndex].message}</p>
    <p>
      <strong>{testimonials[currentIndex].author}</strong> - {testimonials[currentIndex].date}
    </p>
    <div className={styles.buttonContainer}>
      <button onClick={() => handleEdit(testimonials[currentIndex].id)}>Edit</button>
      <button onClick={() => handleDelete(testimonials[currentIndex].id)}>Delete</button>
    </div>
  </div>
)}

        <button className={styles.navButton} onClick={nextTestimonial}>❯</button>
      </div>
      
      {showForm && (
        <TestimonialForm
          existingTestimonial={editingTestimonial}
          onSubmit={handleAddOrUpdateTestimonial}
        />
      )}
      <EmailModal 
        isOpen={emailModalOpen} 
        onClose={() => setEmailModalOpen(false)} 
        onConfirm={confirmAction}
        testimonialEmail={currentTestimonialId ? testimonials.find(t => t.id === currentTestimonialId).email : ""}
      />
      <button onClick={() => {
        setEditingTestimonial(null);
        setShowForm(true);
      }}>
        Add Testimonial
      </button>
    </section>
  );
};

export default Testimonials;
