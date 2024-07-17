import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import Skills from './components/Skills/Skills'; 
import Contact from './components/Contact/Contact';
import {Projects} from './components/Projects/Projects';
import {Testimonials} from './components/Testimonials/Testimonials';
import {Footer} from './components/Footer/Footer';




function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero />
    <Skills/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </div>;
}

export default App;
