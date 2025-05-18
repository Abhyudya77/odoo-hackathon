import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-500">{event.category}</p>
      <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
      <p className="text-gray-700 mt-2">{event.description.slice(0, 80)}...</p>
      <Link to={`/events/${event._id}`} className="text-blue-600 font-medium mt-2 inline-block">
        View Details →
      </Link>
    </div>
  );
};

export default EventCard;
