import "../scss/expertise.scss";
import { Code, Database, Users, Settings } from "lucide-react";
import content from "../../locales/en.json";

export default function Expertise() {
  const { expertise } = content;

  const iconMap = {
    "Frontend Development": Code,
    "Backend Development": Database,
    "Soft Skills": Users,
    "Tools & Technologies": Settings,
  };

  const skillCategories = expertise.skillCategories.map((category) => ({
    ...category,
    icon: iconMap[category.title],
  }));

  return (
    <section className="expertise" id="expertise">
      <div className="expertise__container">
        <h2>{expertise.title}</h2>
        <div className="expertise__grid">
          <div className="expertise__skills">
            <h3>{expertise.technicalSkills}</h3>
            <div className="expertise__skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="expertise__skill-category">
                  <div className="expertise__skill-header">
                    <category.icon className="expertise__skill-icon" />
                    <h4>{category.title}</h4>
                  </div>
                  <div className="expertise__skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise__skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
