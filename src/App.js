import React from 'react';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
// import {Future} from './Components/Future';
import {HeroSection} from './Components/HeroSection';
import { Section2 } from './Components/Section2';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <HeroSection/>
        <Section2/>
      <Footer />
    </div>
  );
}

export default App;
