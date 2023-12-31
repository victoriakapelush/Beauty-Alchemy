import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import React, { useState } from 'react';

export default function App() {

  return (
    <>
      <Header />
      <Navigation />
      <Gallery />
      <Footer />
    </>
  );
}
