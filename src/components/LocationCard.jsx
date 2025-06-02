import React from "react";
import { Link } from "react-router-dom";
import "./LocationCard.scss";

function LocationCard({ id, title, cover }) {
  return (
    <Link to={`/location/${id}`} className="location-card">
      <img src={cover} alt={title} className="location-card-image" />
      <div className="location-card-title-container">
        <span className="location-card-title">{title}</span>
      </div>
    </Link>
  );
}

export default LocationCard;
