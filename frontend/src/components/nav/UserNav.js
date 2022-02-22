import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav className="navbar fixed-bottom navbar-light bg-light">
    <div className="container-fluid">
      <div>
        <Link to="/home" className="nav-link">
          Home
        </Link>
      </div>
      <div>
        <Link to="/user/workoutlist" className="nav-link">
          WorkOuts
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/user/exerciselist" className="nav-link">
          GET SWOLE
          {/* if pressed goes to the last workout completed/attempted */}
        </Link>
      </div>
      <div>
        <Link to="/user/profile" className="nav-link">
          Profile
        </Link>
      </div>
      <div>
        <Link to="/signout" className="nav-link">
          SignOut
        </Link>
      </div>
    </div>
  </nav>
);

export default UserNav;
