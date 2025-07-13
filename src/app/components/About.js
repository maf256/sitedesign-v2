import "../scss/aboutMe.scss";
import content from "../../locales/no.json";

export default function AboutMe() {
  const { aboutMe } = content;

  return (
    <section className="about-me" id="about">
      <h2>{aboutMe.title}</h2>
      <p className="about-paragraph">{aboutMe.paragraph}</p>
      <div className="personal-details">
        <ul>
          {aboutMe.personalDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="services-overview">
        <h3>{aboutMe.servicesOverview.title}</h3>
        <p>{aboutMe.servicesOverview.description}</p>
      </div>
    </section>
  );
}
