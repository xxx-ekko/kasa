import React from "react";
import "./Rating.scss";
import starFull from "../assets/star-full.png";
import starEmpty from "../assets/star-empty.png";

function Rating({ rating }) {
  const totalStars = 5;
  const ratingValue = parseInt(rating, 10);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((star, index) => {
        const starNumber = index + 1;
        return (
          <img
            key={index}
            src={starNumber <= ratingValue ? starFull : starEmpty}
            alt={starNumber <= ratingValue ? "Étoile pleine" : "Étoile vide"}
            className="rating-star"
          />
        );
      })}
    </div>
  );
}

export default Rating;
