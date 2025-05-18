import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // change if your backend URL differs

export function useEventLiveUpdates(eventId, initialEvent) {
  const [event, setEvent] = useState(initialEvent);

  useEffect(() => {
    function handleEventUpdate(updatedEvent) {
      if (updatedEvent._id === eventId) {
        setEvent(updatedEvent);
      }
    }

    socket.on('eventUpdated', handleEventUpdate);

    return () => {
      socket.off('eventUpdated', handleEventUpdate);
    };
  }, [eventId]);

  return event;
}
