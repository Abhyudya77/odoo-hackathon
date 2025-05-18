import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostEventPage from "./pages/PostEventPage";
import EventDetailPage from "./pages/EventDetailPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Add a Navbar later */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostEventPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
