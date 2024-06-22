import React from 'react';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import LogoOak from '../assets/img/logo-oak.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex flex-col lg:flex-row justify-between items-start'>
        <div className='flex flex-col lg:items-start'>
          {/* Logo */}
          <a href='/' className='mb-4 lg:mb-0'>
            <img src={LogoOak} alt='Logo' />
          </a>
          {/* Address */}
          <a
            href='https://maps.google.com/?q=10-23'
            className='mt-4 flex items-center'
            target='_blank' // Open link in a new tab
            rel='noopener noreferrer' // Prevent security risk with target='_blank'
          >
            <FaMapMarkerAlt className='mr-2' />
            <span>10-23, New Airport road, shamshabad, Hyderabad. 501218</span>
          </a>
          {/* Phone number */}
          <a href='tel:+919666212345' className='mt-4 flex items-center'>
            <FaPhone className='mr-2' />
            <span>+91 96662 12345</span>
          </a>
          {/* Book Now button */}
          <a
            href='https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605152,78.3895091,17z/data=!4m20!1m10!3m9!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!2sHotel+oak+by+signature+airport+zone+hyderabad!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu'
            className='inline-block bg-yellow-500 text-black mt-8 py-2 px-4 rounded-full'
            target='_blank' // Open link in a new tab
            rel='noopener noreferrer' // Prevent security risk with target='_blank'
          >
            Book Now
          </a>
        </div>
        <div className='flex mt-8 lg:mt-0'>
          {/* Our Services */}
          <div className='mr-8'>
            <h4 className='font-bold border-b-2 border-yellow-500 pb-2'>OUR SERVICES</h4>
            <ul>
              <li>- Luxury Rooms</li>
              <li>- Restaurant</li>
              <li>- Banquet Hall</li>
              <li>- Conference</li>
              <li>- Board Room</li>
            </ul>
          </div>
          {/* Our Restaurant */}
          <div>
            <h4 className='font-bold border-b-2 border-yellow-500 pb-2'>OUR RESTAURANT</h4>
            <ul>
              <li>- Indian</li>
              <li>- Chinese</li>
              <li>- Tandoor</li>
              <li>- Special Biryani</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className='text-center mt-8 text-white'>
        Copyright © Oak by Signature Group, Shamshabad Airport Zone 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;