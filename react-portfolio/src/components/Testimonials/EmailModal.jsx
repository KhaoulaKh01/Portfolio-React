import React, { useState } from 'react';
import styles from './EmailModal.module.css'; // Assurez-vous que le chemin est correct

const EmailModal = ({ isOpen, onClose, onConfirm, testimonialEmail }) => {
    if (!isOpen) return null;

    const [email, setEmail] = useState('');

    const handleConfirm = () => {
        if (email === testimonialEmail) {
            onConfirm(email);
            onClose();
        } else {
            alert("L'email saisi ne correspond pas à l'auteur du témoignage.");
        }
    };

    return (
        <div className={styles.modal}>
            <h2>Confirmer Action</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
            />
            <button onClick={handleConfirm}>Confirmer</button>
            <button onClick={onClose}>Annuler</button>
        </div>
    );
};

export default EmailModal;
