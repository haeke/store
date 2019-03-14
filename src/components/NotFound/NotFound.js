import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div>
      <h1 style={{ fontSize: "4rem", textAlign: "center" }}>
        This page does not exist.
      </h1>
      <h2 style={{ fontSize: "4rem", textAlign: "center" }}>
        The Requested URL{" "}
        <span style={{ fontSize: "4rem", color: "red" }}>
          {props.location.pathname}
        </span>{" "}
        does not exist.
      </h2>
      <Link to="/" style={{ textDecoration: "none", color: "red" }}>
        <p style={{ fontSize: "4rem", textAlign: "center" }}>Go Back</p>
      </Link>
    </div>
  );
};

export default NotFound;
