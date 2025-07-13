import "../scss/career.scss";
import content from "../../locales/no.json";

export default function Career() {
  const { career } = content;

  return (
    <section className="career" id="career">
      <h2>{career.title}</h2>
      <p>{career.description}</p>
      <div className="experience-timeline">
        {career.experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{experience.year}</div>
            <div className="timeline-content">
              <h3>{experience.position}</h3>
              <p className="company">{experience.company}</p>
              <p className="duration">{experience.duration}</p>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
