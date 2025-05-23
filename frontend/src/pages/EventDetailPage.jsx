import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RSVPForm from "../components/RSVPForm";
import Loader from "../components/Loader";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEventLiveUpdates } from '../hooks/useEventLiveUpdates';
import axios from 'axios';

function EventDetailPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [initialEvent, setInitialEvent] = useState(null);

 


const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${id}`);
        setEvent(res.data.event);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <Loader />;
  if (!event) return <p className="text-center text-red-500">Event not found</p>;

   useEffect(() => {
    async function fetchEvent() {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/events/${id}`);
        setInitialEvent(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id]);

  const event = useEventLiveUpdates(id, initialEvent);

  if (loading) return <p>Loading event...</p>;
  if (!event) return <p>Event not found</p>;

 
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600">{event.date} • {event.location}</p>
      <p className="mt-4">{event.description}</p>
      <div className="mt-6">
        <RSVPForm eventId={event._id} />
      </div>
    </div>
  );
};

   return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Date & Time: {new Date(event.dateTime).toLocaleString()}</p>
      
    </div>
  );
}

export default EventDetailPage;
