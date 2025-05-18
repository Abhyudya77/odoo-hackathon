import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import CategoryFilter from "../components/CategoryFilter";
import Loader from "../components/Loader";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const API_URL = "http://localhost:5000/api/events";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_URL);
        setEvents(res.data.events);
        setFilteredEvents(res.data.events);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events:", err);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((e) => e.category === activeCategory));
    }
  }, [activeCategory, events]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Community Events Near You</h1>
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      {loading ? (
        <Loader />
      ) : filteredEvents.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-gray-600">No events found in this category.</p>
      )}
    </div>
  );
};

export default HomePage;
