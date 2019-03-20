import React from "react";

import "./Title.css";

const Title = ({ name, title }) => {
  return (
    <div className="titleContainer">
      <h1 className="titleName">{name}</h1>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Title;
