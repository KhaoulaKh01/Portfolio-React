import React from 'react';
import styles from "./Skills.module.css";
import styled from 'styled-components'
import { skills as skillData } from '../../data/Skills.js'; 

const Skills = () => {
    return (
        <div className={styles.container} id="skills">
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Skills</h2>
                <p className={styles.desc}>
                    Here are some of my skills on which I have been working on for the past 2 years.
                </p>
                <div className={styles.skillsContainer}>
                    {skillData.map((skill) => (
                        <div className={styles.skill} key={skill.title}>
                            <h3 className={styles.skillTitle}>{skill.title}</h3>
                            <div className={styles.skillList}>
                                {skill.skills.map((item) => (
                                    <div className={styles.skillItem} key={item.name}>
                                        <img className={styles.skillImage} src={item.image} alt={item.name}/>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
