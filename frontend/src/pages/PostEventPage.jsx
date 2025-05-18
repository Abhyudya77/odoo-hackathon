import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PostEventPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events", formData);
      toast.success("Event created!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create event.");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">Post a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Event Title" required onChange={handleChange} className="input" />
        <textarea name="description" placeholder="Description" required onChange={handleChange} className="input" />
        <input type="date" name="date" required onChange={handleChange} className="input" />
        <input type="text" name="location" placeholder="Location" required onChange={handleChange} className="input" />
        <select name="category" required onChange={handleChange} className="input">
          <option value="">Select Category</option>
          {["Garage Sales", "Sports Matches", "Community Classes", "Volunteer Opportunities", "Exhibitions", "Festivals"].map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <input type="text" name="image" placeholder="Image URL (optional)" onChange={handleChange} className="input" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Post Event</button>
      </form>
    </div>
  );
};

export default PostEventPage;
