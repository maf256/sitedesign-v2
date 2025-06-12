import Image from "next/image";
import "../scss/landingSection.scss";
export default function LandingSection() {
  return (
    <section>
      <h1 className="main-title">
        <span>MAJID</span>
        <Image src="/avatar.jpg" alt="Profile picture" width={59} height={59} />
        <br />
        <span> ASKARIFARSANGI</span>
      </h1>

      <p>
        I am a software engineer and web developer,I am happy to have a digital
        chat or meet over a cup of coffee.
      </p>
    </section>
  );
}
