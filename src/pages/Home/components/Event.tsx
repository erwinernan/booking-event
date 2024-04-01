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
    <div>
      <div className="flex items-center text-white gap-2">
        <div className="font-extrabold">Today, Mon 1 Apr</div>
        <div className="text-sm">&#8226;</div>
        <div className="text-sm">3 Events</div>
      </div>
      <br />
      <div className="flex gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg p-4">
            <div className="text-gray-800 font-semibold">{event.name}</div>
            <div className="text-gray-600 text-sm">{event.description}</div>
            <div className="text-gray-600">Organizer: {event.organizer}</div>
            <div className="text-gray-600">Date: {event.date} - Time: {event.time}</div>
            <div className="text-gray-600">Location: {event.location}</div>
            <div className="text-gray-600">Seats: {event.seat}</div>
            <div className="text-gray-600">Waiting List: {event.waiting_list}</div>
            <div className="text-gray-600">Status: {event.status === 0 ? 'Open' : event.status === 1 ? 'Waiting List' : 'Close'}</div>
            <img src={event.background} alt="Event" className="rounded-lg mt-2" style={{ width: '100%', maxHeight: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  )
}