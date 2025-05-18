import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RSVPForm = ({ eventId }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/events/${eventId}/rsvp`, form);
      toast.success("RSVP submitted!");
      setForm({ name: "", email: "", phone: "", numberOfPeople: 1 });
    } catch (err) {
      console.error(err);
      toast.error("Failed to RSVP.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold text-blue-600">RSVP to this event</h3>
      <input name="name" placeholder="Your Name" required onChange={handleChange} value={form.name} className="input" />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={form.email} className="input" />
      <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} value={form.phone} className="input" />
      <input type="number" name="numberOfPeople" min="1" placeholder="Number of People" required onChange={handleChange} value={form.numberOfPeople} className="input" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;

