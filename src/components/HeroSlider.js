import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import required modules
import { EffectFade, Autoplay } from 'swiper';
// images
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img1,
    btnText: 'Book Now',
    link: 'https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605152,78.3895091,17z/data=!4m20!1m10!3m9!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!2sHotel+oak+by+signature+airport+zone+hyderabad!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu', 
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img2,
    btnText: 'Book Now',
    link: 'https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605152,78.3895091,17z/data=!4m20!1m10!3m9!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!2sHotel+oak+by+signature+airport+zone+hyderabad!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu', 
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img3,
    btnText: 'Book Now',
    link: 'https://www.google.com/maps/place/Hotel+oak+by+signature+airport+zone+hyderabad/@17.2605152,78.3895091,17z/data=!4m20!1m10!3m9!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!2sHotel+oak+by+signature+airport+zone+hyderabad!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm!3m8!1s0x3bcbbdc2dc0e8837:0xc4b1d21f0157408!5m2!4m1!1i2!8m2!3d17.2605153!4d78.3916975!16s%2Fg%2F11rfc82rcm?entry=ttu',
    
  },
];

const HeroSlider = () => {
  return (
    <div id='home'>

    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'
    >
      {slides.map((slide, index) => {
        // destructure slide
        const { title, bg, btnText, link } = slide;
        return (
          <SwiperSlide
            className='h-full relative flex justify-center items-center'
            key={index}
          >
            <div className='z-20 text-white text-center'>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                Just Enjoy and relax
              </div>
              <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>
                {title}
              </h1>
              <a href={link} 
              target='_blank'
                rel='noopener noreferrer'
              className='inline-block bg-yellow-500 text-black py-4 px-4 rounded-full'>
                {btnText}
              </a>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt='' />
            </div>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
};

export default HeroSlider;
