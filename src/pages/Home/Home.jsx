import Banner from "../../components/Banner";
import LocationCard from "../../components/LocationCard.jsx";
import logements from "../../data/logements.json";
import "./Home.scss";

import homeBannerImage from "../../assets/banner_img.png";
//const homeBannerImage = "../../../../assets/banner_img.png";
const homeBannerTitle = "Chez vous, partout et ailleurs";

export default function Home() {
  return (
    <div>
      <Banner imageUrl={homeBannerImage} title={homeBannerTitle} />
      <section className="locations-grid">
        {logements.map((logement) => (
          <LocationCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  );
}
