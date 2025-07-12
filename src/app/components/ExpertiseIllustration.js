import React from "react"


import {
    GraduationCap,
    Calendar,
} from "lucide-react";
import "../scss/expertise.scss";

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

export default function ExpertiseIllustration() {
    return (
        <div className="expertise__education">
            <h3>Education</h3>
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
    )
}


