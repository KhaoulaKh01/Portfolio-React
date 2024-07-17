import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import Modal from "./Modal";

export const ProjectCard = ({
  project: { title, imageSrc, description, detailedDescription, skills, source },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <button onClick={handleOpenModal} className={styles.link}>
          See more
        </button>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{title}</h2>
        <p className={styles.detailedDescription}> {detailedDescription}</p>
        <button onClick={handleCloseModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>
    </div>
  );
};
