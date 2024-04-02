import AppButton from "../../../components/Button/AppButton";
// import Icon from '@mdi/react';
// import { mdiSeatPassenger, mdiMapMarker } from '@mdi/js';
import { useState } from 'react';
import WhatsAppForm from "../../../components/Form/WhatsApp";

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
          <div key={event.id} className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-1">
            <div className="md:col-span-3 md:divide-y divide-gray-600 ring-white ring-1 shadow-lg rounded-lg px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 py-2 gap-1 md:gap-4 text-base md:text-lg">
                <div>
                  <div className="font-bold text-white">{event.name}</div>
                  <div className="text-xs md:text-sm">{event.organizer}</div>
                </div>
                <div className="md:text-center">
                  <div className="font-bold text-white">{event.date} - 11:20</div>
                  <div className="text-xs md:text-sm">{event.time} mins</div>
                </div>
                <div className="md:text-right">
                  <div className="font-bold text-white">Location</div>
                  <div className="text-xs md:text-sm">{event.location}</div>
                </div>
              </div>
              <div className="flex pt-0 md:pt-2 pb-4 gap-2 text-xs md:text-sm">
                <div className="flex bg-orange-500 text-white rounded-full p-1 px-3">
                  {event.seat} seats left
                </div>
                <div className="flex bg-orange-500 text-white rounded-full p-1 px-3">
                  Outdoor
                </div>
                {/* <div className="flex">
                  <Icon path={mdiSeatPassenger} size={0.8} />
                  <Icon path={mdiMapMarker} size={1} /> {event.location}
                </div> */}
              </div>
            </div>
            <div className="ring-white ring-1 border-white shadow-lg rounded-lg p-4 grid grid-cols-2 md:flex md:flex-col items-center justify-center">
              <div className="text-orange-500 font-bold text-lg md:text-center">
                Rp 1.720.000
              </div>
              <div className="flex justify-end md:justify-center md:mt-2">
                <AppButton onClick={handleBookNowClick} className="hover:bg-transparent hover:text-white font-bold py-1 px-3 bg-white text-black text-sm" label="Book Now" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-2/4 h-3/4 my-6 mx-auto">
            {/* Modal content */}
            <div className="bg-black rounded-2xl shadow-lg w-full h-full flex">
              {/* Left column for logo */}
              <div className="flex-1 flex items-center justify-center text-lg tracking-widest">
                {/* <img src={LogoImage} alt="Logo" className="h-16" /> */}
                BOOKING EVENT
              </div>
              {/* Right column for WhatsApp input */}
              <div className="flex-1 rounded-r-xl flex items-center justify-center bg-white text-black relative">
                {/* Close button */}
                <button onClick={() => setShowLoginModal(false)} className="absolute bg-transparent top-0 right-0 m-4 hover:text-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  X
                </button>
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">Login to continue</div>
                  <div className="text-xs">Don’t have an account? <a className="font-bold text-base cursor-pointer">Sign up now</a></div>
                  <br />
                  <br />
                  <WhatsAppForm />
                  {/* <input type="text" placeholder="Enter WhatsApp number" className="border border-gray-300 px-4 py-2 rounded-lg" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}