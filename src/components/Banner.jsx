import React from "react";
import "./Banner.scss";

function Banner({ imageUrl, title }) {
  const bannerStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};

  return (
    <div className="banner" style={bannerStyle}>
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;
