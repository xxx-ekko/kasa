import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Carousel from "../../components/Carousel";
import "./LocationPage.scss";
import Tags from "../../components/Tags";
import HostInfo from "../../components/HostInfo";
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";

export default function LogementPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logementsData.find((item) => item.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate("/404");
      console.error("Logement non trouvé!");
    }
  }, [id, navigate]);

  return (
    <div className="logement-page">
      {/* <h1>{logement.title}</h1>
      <p>ID du logement : {logement.id}</p>
      <p>Emplacement : {logement.location}</p> */}

      <Carousel images={logement.pictures} />
      <div className="logement-header">
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className="host-info-and-rating">
          <HostInfo name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="collapses-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}
