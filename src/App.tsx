// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Product';
import Business from './components/Business';
import Lending from './components/Lending';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <Products />
      <Business />
      <Lending />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default App;