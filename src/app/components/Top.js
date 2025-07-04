import Image from "next/image";
import "../scss/landingSection.scss";
import { useState, useEffect } from "react";


export default function LandingSection({ scrollProgress = 0 }) {
  const [chevronOpacity, setChevronOpacity] = useState(1);

  useEffect(() => {
    // Only decrease opacity, never increase
    const newOpacity = 0.5 - scrollProgress;
    setChevronOpacity(prev => (newOpacity < prev ? newOpacity : prev));
  }, [scrollProgress]);

  return (
    <section className="landing-section" id="top">

      <div className="landing-content">
        <h1 className="title">
          <span className="title-line-one">Majid</span>
          <span className="avatar"> <Image src="/avatar.jpg" alt="Profile picture" width={96} height={96} /> </span>
          <span className="title-line-two">Askarifarsangi</span>
        </h1>
        <p>
          <span>Software Engineer</span> and <span>Web Developer</span>,<br />I'm happy to have a digital chat or meet over a cup of coffee.
        </p>
      </div >
      <span className="arrow-down" style={{ opacity: chevronOpacity }}>
        <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 8.793l7 7 7-7v1.414l-7 7-7-7z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
      </span >
    </section >
  );
}
