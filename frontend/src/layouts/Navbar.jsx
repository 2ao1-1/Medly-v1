import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-lg font-bold">My Project</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
