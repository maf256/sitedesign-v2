import Image from "next/image";
import "../scss/landingSection.scss";
export default function LandingSection() {
  return (
    <section className="landing-section">

      <div className="landing-content">
        <h1 className="title">
          <span className="title-line-one">Majid</span>
          <span className="avatar">
            <Image src="/avatar.jpg" alt="Profile picture" width={96} height={96} />
          </span>
          <span className="title-line-two">Askarifarsangi</span>
        </h1>
        <p>
          <span>Software Engineer</span> and <span>Web Developer</span>,<br />I'm happy to have a digital chat or meet over a cup of coffee.
        </p>
      </div >
      <span className="arrow-down">
        ↓
      </span >
    </section >
  );
}
