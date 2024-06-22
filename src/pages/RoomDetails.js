import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
// scroll top component
import ScrollToTop from '../components/ScrollToTop';
// context
import { RoomContext } from '../context/RoomContext';
// icons
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  // destructure room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='' />
            {/* facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
              Our hotel rooms are designed for your comfort and convenience, featuring plush beds with high-quality linens, a flat-screen TV with cable channels, and free high-speed Wi-Fi. Enjoy refreshments from the minibar or coffee/tea making facilities, and relax in the ensuite bathroom with premium toiletries. Additional amenities include a spacious work desk, in-room safe, and daily housekeeping, ensuring a pleasant and hassle-free stay.
              </p>
              {/* grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  // destructure item
                  const { name, icon } = item;
                  return (
                    <div
                      className='flex items-center gap-x-3 flex-1'
                      key={index}
                    >
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full'>
                book now for ₹{price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6'>
              To ensure a pleasant stay for all guests, please adhere to our hotel room rules. Check-in is from 12 PM and check-out is by 11 AM. Smoking is prohibited, and quiet hours are from 10 PM to 7 AM. Pets are not allowed unless specified, and visitors must leave by 10 PM. Please keep the room in good condition; damages may incur extra charges. Use the in-room safe for valuables, and contact the front desk for any emergencies. Thank you for your cooperation.
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 12:00 PM 
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out: 11:00 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Pets
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
