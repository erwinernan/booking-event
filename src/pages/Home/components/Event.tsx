import AppButton from "../../../components/Button/AppButton";
// import Icon from '@mdi/react';
// import { mdiSeatPassenger, mdiMapMarker } from '@mdi/js';
import { useState } from 'react';
import WhatsAppForm from "../../../components/Form/WhatsApp";
import Icon from "@mdi/react";
import { mdiClockTimeEightOutline, mdiMapMarker, mdiSeatPassenger } from "@mdi/js";
import './modal.css';

interface EventProps {
  event: string;
  day: string;
  className?: string;
}

const events = [
  {
    id: 1,
    name: 'Wade Cooper',
    organizer: 'Vice Digital Creative',
    date: '10:45',
    time: 50,
    location: 'Jakarta',
    seat: 10,
    booked: 4,
    waiting_list: 0,
    status: 0, //0 = open, 1 = waiting list, 2 = close
  },
  {
    id: 2,
    name: 'J-Rocks is Back',
    organizer: 'Vice Digital Creative',
    date: '16:25',
    time: 120,
    location: 'Surabaya',
    seat: 24,
    booked: 4,
    waiting_list: 0,
    status: 0, //0 = open, 1 = waiting list, 2 = close
  },
  {
    id: 3,
    name: 'Avenged Seven Fold',
    organizer: 'Vice Digital Creative',
    date: '10:45',
    time: 50,
    location: 'Bandung',
    seat: 30,
    booked: 4,
    waiting_list: 0,
    status: 0, //0 = open, 1 = waiting list, 2 = close
  },
]

export default function EventSection ({day, event}: EventProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleBookNowClick = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="py-5">
      <div className="flex items-center text-white gap-2">
        <div className="font-extrabold">{day}</div>
        <div className="text-sm">&#8226;</div>
        <div className="text-sm">{event} Events</div>
      </div>
      <br />
      <div className="grid text-gray-400 gap-5">
        {events.map((event) => (
          <div key={event.id} className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-2">
            <div className="bg-black md:col-span-3 md:divide-y divide-gray-700 shadow-lg rounded-t-lg md:rounded-lg px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 py-2 gap-1 md:gap-4 text-base md:text-lg">
                <div>
                  <div className="font-bold text-white">{event.name}</div>
                  <div className="text-xs md:text-sm">{event.organizer}</div>
                </div>
                <div className="md:text-center">
                  <div className="flex md:block font-bold text-white items-center"><Icon className="pr-1 md:hidden" path={mdiClockTimeEightOutline} size={1} /> {event.date} - 11:20
                  <div className="text-xs md:text-sm text-gray-400 md:hidden pl-1">({event.time} mins)</div></div>
                  <div className="text-xs md:text-sm hidden md:block">{event.time} mins</div>
                </div>
                {/* DESKTOP */}
                <div className="hidden md:block md:text-right">
                  <div className="font-bold text-white">Location</div>
                  <div className="flex md:block text-xs md:text-sm">{event.location}</div>
                </div>
                {/* MOBILE */}
                <div className="md:hidden">
                  <div className="flex md:block font-bold text-white items-center"><Icon className="pr-1 md:hidden" path={mdiMapMarker} size={1} /> {event.location}</div>
                </div>
              </div>
              {/* DESKTOP */}
              <div className="hidden md:flex pt-0 md:pt-2 pb-3 gap-2 text-xs md:text-sm">
                <p className="flex font-bold text-red-500"><Icon path={mdiSeatPassenger} size={0.8} /> {event.seat} left</p>
              </div>
              {/* MOBILE */}
              <div className="md:hidden pb-3">
                <p className="flex font-bold text-red-500 items-center"><Icon className="mr-1" path={mdiSeatPassenger} size={0.8} /> {event.seat} left</p>
                {/* <div className="flex bg-white italic text-orange-500 rounded-full p-1 px-3">
                  {event.seat} seats left
                </div>
                <div className="flex bg-orange-500 text-white rounded-full p-1 px-3">
                  Outdoor
                </div> */}
                {/* <div className="flex text-red-500 font-bold">
                  <Icon path={mdiSeatPassenger} size={0.8} /> 10 left
                  <Icon path={mdiMapMarker} size={1} /> {event.location}
                </div> */}
              </div>
            </div>
            <div className="bg-black shadow-lg rounded-b-lg md:rounded-lg p-4 grid grid-cols-2 md:flex md:flex-col items-center justify-center md:mt-0 border-t border-dashed border-gray-500 md:border-none">
              <div className="text-orange-500 font-bold text-lg md:text-center">
                Rp 1.720.000
              </div>
              <div className="flex justify-end md:justify-center md:mt-2">
                <AppButton onClick={handleBookNowClick} className="hover:bg-transparent hover:text-white font-bold py-1 px-3 bg-white text-black text-sm w-full" label="Book Now" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Login Modal */}
      {showLoginModal && (
        <div className="modalContainer fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="modalContent relative w-full h-full my-15 mx-15">
            {/* DESKTOP */}
            <div className="bg-black rounded-2xl shadow-lg w-full h-full hidden sm:flex">
              <div className="flex-1 flex text-orange-500 font-bold items-center justify-center text-lg tracking-widest">
                BOOKING EVENT
              </div>
              <div className="flex-1 rounded-r-xl flex items-center justify-center bg-white text-black relative">
                <button onClick={() => setShowLoginModal(false)} className="absolute bg-transparent top-0 right-0 m-4 hover:text-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  X
                </button>
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">Login to continue</div>
                  <div className="text-xs">Don’t have an account? <a className="font-bold cursor-pointer text-orange-500">Sign up now</a></div>
                  <br />
                  <br />
                  <WhatsAppForm />
                  {/* <input type="text" placeholder="Enter WhatsApp number" className="border border-gray-300 px-4 py-2 rounded-lg" /> */}
                </div>
              </div>
            </div>
            <div className="flex sm:hidden bg-white py-10 px-4 rounded-2xl shadow-lg w-full h-full flex-col justify-center items-center">
              <button onClick={() => setShowLoginModal(false)} className="absolute bg-transparent top-0 right-0 m-6 hover:text-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                X
              </button>
              <div className="flex text-orange-500 font-bold items-center justify-center text-lg tracking-widest mb-10">
                BOOKING EVENT
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Login to continue</div>
                <div className="text-xs">Don’t have an account? <a className="font-bold cursor-pointer text-orange-500">Sign up now</a></div>
                <br />
                <br />
                <WhatsAppForm />
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  )
}