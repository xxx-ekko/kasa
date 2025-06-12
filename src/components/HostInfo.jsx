import React from "react";
import "./HostInfo.scss";

function HostInfo({ name, picture }) {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="host-info">
      <div className="host-name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img src={picture} alt={`Portrait de ${name}`} className="host-picture" />
    </div>
  );
}

export default HostInfo;
