import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        CommunityEvents
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link to="/post" className="text-gray-700 hover:text-blue-500">
          Post Event
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
