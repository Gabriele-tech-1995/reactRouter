import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const context = useContext(UserContext);

  if (!context) {
    return null;
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>

      <div className="flex gap-2">
        {context.user && (
          <Link to="/posts" className="btn btn-primary">
            Posts
          </Link>
        )}

        <Link to="/login" className="btn btn-outline">
          Login
        </Link>

        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
