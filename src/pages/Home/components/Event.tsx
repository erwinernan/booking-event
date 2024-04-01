import AppButton from "../../../components/Button/AppButton"

const events = [
  {
    id: 1,
    name: 'Wade Cooper',
    description: 'Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:flex-1 to only apply the flex-1 utility on hover.',
    organizer: 'Vice Digital Creative',
    date: '10:45 AM',
    time: 50,
    location: 'Jakarta',
    seat: 4,
    waiting_list: 0,
    status: 0, //0 = open, 1 = waiting list, 2 = close
    background:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function EventSection () {
  return (
    <div className="">
      <div className="flex items-center text-white gap-2">
        <div className="font-extrabold">Today, Mon 1 Apr</div>
        <div className="text-sm">&#8226;</div>
        <div className="text-sm">3 Events</div>
      </div>
      <br />
      <div className="grid gap-5 text-gray-400">
        <div className="grid-cols-1 ">
          {events.map((event) => (
            <div key={event.id} className="ring-white ring-1 shadow-lg rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className=""><span className="font-bold text-lg text-white">{event.date}</span> - {event.time} mins</div>
                <div className="text-center font-semibold">{event.name}</div>
                <div className="text-right">Status: {event.status === 0 ? 'Open' : event.status === 1 ? 'Waiting List' : 'Close'}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm flex items-center"> {/* Added flex container */}
                  {event.description}
                </div>
                <div className="flex items-center"> {/* Added flex container */}
                  Organizer: {event.organizer}
                </div>
              </div>
              <br/>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid grid-cols-4 col-span-2">
                  <div className="">Seats: {event.seat}</div>
                  <div className="text-center">Location: {event.location}</div>
                  <div className="text-center">Waiting List: {event.waiting_list}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <AppButton label="Book" />
                  <AppButton label="Join Waitinglist" />
                </div>
              </div>
              {/* <img src={event.background} alt="Event" className="rounded-lg mt-2" style={{ width: '100%', maxHeight: '200px' }} /> */}
            </div>
          ))}
        </div>
        <div className="grid-cols-1 ">
          {events.map((event) => (
            <div key={event.id} className="ring-white ring-2 rounded-lg p-4">
              <div className="font-semibold">{event.name}</div>
              <div className=" text-sm">{event.description}</div>
              <div className="">Organizer: {event.organizer}</div>
              <div className="">Date: {event.date} - Time: {event.time}</div>
              <div className="">Location: {event.location}</div>
              <div className="">Seats: {event.seat}</div>
              <div className="">Waiting List: {event.waiting_list}</div>
              <div className="">Status: {event.status === 0 ? 'Open' : event.status === 1 ? 'Waiting List' : 'Close'}</div>
              {/* <img src={event.background} alt="Event" className="rounded-lg mt-2" style={{ width: '100%', maxHeight: '200px' }} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}