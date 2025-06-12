import Image from "next/image";
import "../scss/landingSection.scss";
export default function LandingSection() {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <h1 className="main-title">
          <div className="title-line-one">
            <span>Majid</span>
            <Image src="/avatar.jpg" alt="Profile picture" width={96} height={96} />
          </div>
          <span> Askarifarsangi</span>
        </h1>

        <p>
          <span>Software Engineer</span> and <span>Web Developer</span>,<br />I am happy to have a digital chat or meet over a cup of coffee.
        </p>

      </div>
      <span className="arrow-down">
        ↓
      </span >
    </section >
  );
}
