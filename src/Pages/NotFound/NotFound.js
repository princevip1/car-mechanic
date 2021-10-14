import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../images/404.png";

const pageNotFound = () => {
  return (
    <div>
      <img
        style={{
          width: "80%",
        }}
        src={img404}
        alt=""
      />{" "}
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default pageNotFound;
