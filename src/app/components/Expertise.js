import { useState, useEffect } from "react";
import "../scss/expertise.scss";
import {
  GraduationCap,
  Calendar,
  Code,
  Database,
  Users,
  Settings,
} from "lucide-react";

export default function Expertise() {
  return (
    <div id="expertise">
      <div>
        Expertise
      </div>
      <br />
      <div>
        Expertise
      </div>
      <br />
      <div>
        Expertise
      </div>
      <br />
      <div>
        Expertise
      </div></div>
  )
}
/*
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

  const education = [
    {
      period: "2013 - 2015",
      degree: "Master in Business Strategic",
      institution: "PNU University of IRAN",
      type: "degree",
    },
    {
      period: "2011 - 2013",
      degree: "Bachelor in Computer Engineering",
      institution: "AZAD University of IRAN",
      type: "degree",
    },
    {
      period: "2001 - 2004",
      degree: "Associate in Computer Science",
      institution: "AZAD University of IRAN",
      type: "degree",
    },
    {
      period: "2024",
      degree: "Kotlin for Beginners",
      institution: "Udemy",
      type: "course",
    },
    {
      period: "2024",
      degree: "Project Management",
      institution: "Holte Academy",
      type: "course",
    },
    {
      period: "2022",
      degree: "Next.js & React Complete Guide",
      institution: "Udemy",
      type: "course",
    },
    {
      period: "2021",
      degree: "Web Developer Bootcamp",
      institution: "Udemy",
      type: "course",
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
        <div className="expertise__education">
          <div className="expertise__education-header">
            <GraduationCap className="expertise__education-icon" />
            <h3>Education</h3>
          </div>

          <div className="expertise__timeline">
            {education.map((item, index) => (
              <div
                key={index}
                className={`expertise__timeline-item expertise__timeline-item--${item.type}`}
              >
                <div className="expertise__timeline-marker"></div>
                <div className="expertise__timeline-content">
                  <div className="expertise__timeline-period">
                    <Calendar className="expertise__timeline-calendar" />
                    <span>{item.period}</span>
                  </div>
                  <h5 className="expertise__timeline-degree">
                    {item.degree}
                  </h5>
                  <p className="expertise__timeline-institution">
                    {item.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


*/