import Banner from "../../components/Banner";
//import Footer from "../../components/Footer";
//import Header from "../../components/Header";
import LocationCard from "../../components/LocationCard.jsx";
import logements from "../../data/logements.json";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
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
