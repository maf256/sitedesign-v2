import "../scss/expertise.scss";
import { Code, Database, Users, Settings } from "lucide-react";

export default function Expertise() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        "React",
        "JavaScript",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Styled-components",
        "Material UI",
        "Bootstrap",
        "Tailwind CSS",
        "SASS",
        "React Query",
        "Axios",
        "Vite",
        "Figma",
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "Kotlin",
        "PostgreSQL",
        "MongoDB",
        "Spring Boot",
        "JWT Authentication",
        "REST APIs",
        "Webhooks",
        "Document Store",
        "C++",
        "SQL Server",
        "MySQL",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Problem-solving",
        "Communication",
        "Adaptability",
        "Time Management",
        "Teamwork",
        "Attention to Detail",
        "Work Ethic",
        "Creativity",
        "Leadership",
        "Interpersonal Skills",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: [
        "Git",
        "Docker",
        "Azure",
        "Vim",
        "Netlify",
        "Jira",
        "WordPress",
        "Shopify",
        "WCAG",
        "SEO",
      ],
    },
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="expertise__container">
        <h2>Expertise</h2>

        <div className="expertise__grid">
          <div className="expertise__skills">
            <h3>Technical Skills</h3>
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

