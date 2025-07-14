import Image from "next/image";
import "../scss/top.scss";
import { useState, useEffect } from "react";
import langdata from "../../../language.json";
const content = await import(`../../locales/${langdata.lang}.json`);

export default function LandingSection({ scrollProgress = 0 }) {
  const [chevronOpacity, setChevronOpacity] = useState(1);

  useEffect(() => {
    const newOpacity = 0.5 - scrollProgress;
    setChevronOpacity((prev) => (newOpacity < prev ? newOpacity : prev));
  }, [scrollProgress]);

  const { landingSection } = content;

  return (
    <section className="landing-section" id="top">
      <div className="landing-content">
        <h1 className="title">
          <span className="title-line-one">Majid</span>
          <span className="avatar">
            <Image
              src="/avatar.jpg"
              alt="Profile picture"
              width={96}
              height={96}
            />
          </span>
          <span className="title-line-two">Askarifarsangi</span>
        </h1>
        <p>
          <span>{landingSection.description.role1}</span> and{" "}
          <span>{landingSection.description.role2}</span>,<br />
          {landingSection.description.text}
        </p>
      </div>
      <span className="arrow-down" style={{ opacity: chevronOpacity }}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 8.793l7 7 7-7v1.414l-7 7-7-7z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </span>
    </section>
  );
}
