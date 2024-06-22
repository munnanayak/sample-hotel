// RestaurantPage.js
import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
// import Footer from '../components/Footer';
import restaurantImage from '../assets/img/restaurant.jpg';

const Restaurant = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <div className="container mx-auto py-12 flex">
        {/* Left-side image section */}
        <div className="w-1/2 pr-8">
          <img src={restaurantImage} alt="Restaurant" className="rounded-lg shadow-lg" />
        </div>
        {/* Right-side menu section */}
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">Menu</h2>
          <div className="menu-item">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <ul className="list-disc pl-5">
              <li>Salad</li>
              <li>Soup</li>
            </ul>
          </div>
          <div className="menu-item">
            <h3 className="text-xl font-semibold mb-2">Main Course</h3>
            <ul className="list-disc pl-5">
              <li>Indian Curry</li>
              <li>Chinese Noodles</li>
            </ul>
          </div>
          <div className="menu-item">
            <h3 className="text-xl font-semibold mb-2">Dessert</h3>
            <ul className="list-disc pl-5">
              <li>Ice Cream</li>
              <li>Cake</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Restaurant;