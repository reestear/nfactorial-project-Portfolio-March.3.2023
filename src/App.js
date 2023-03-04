import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useContext, useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Outro from './components/Outro';
import { Context } from './components/Context';

function App() {

  function moveTo(id){
    const section = document.getElementById(id);

    section.scrollIntoView({behavior: 'smooth'});
  }

  return (
    
    <div className="App">
      <section id='main'>
        <Context.Provider value = {moveTo}>
          <Header></Header>
          <Intro></Intro>
        </Context.Provider>
      </section>
  
      <section id='about' className='pd100'>
        <About></About>
      </section>

      <section id='experience' className='pd100'>
        <Experience></Experience>
      </section>

      <section id='projects' className='pd100'>
        <Projects></Projects>
      </section>

      <section id='contacts' className='pd100'>
        <Outro></Outro>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
