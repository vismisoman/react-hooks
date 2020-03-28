import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Manage Courses</h1>
      <p> React, Forms, Hooks and React Router used in this app.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}
export default HomePage;
