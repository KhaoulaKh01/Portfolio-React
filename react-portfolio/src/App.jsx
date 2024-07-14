import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import Skills from './components/Skills/Skills'; 
import Contact from './components/Contact/Contact';




function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero />
    <Skills/>
    <Contact/>
  </div>;
}

export default App;
