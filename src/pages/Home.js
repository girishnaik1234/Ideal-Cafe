// src/pages/HomePage.js
import React from 'react';
import CarouselHero from '../components/CarouselHero';

const HomePage = () => {
  return (
    <div>
      <CarouselHero />
      <section className="mt-4 text-center">
        <h2>Welcome to Ideal Café 🍨</h2>
        <p>Famous for our award-winning Gadbad ice cream and more!</p>
      </section>
    </div>
  );
};

export default HomePage;
