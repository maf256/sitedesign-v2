import "../scss/aboutMe.scss";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2>About Me</h2>

      <p className="about-paragraph">
        I am an experienced web developer who is passionate about innovative and
        user-friendly web design with front-end and back-end development
        expertise. I create modern, responsive websites that engage visitors and
        strengthen your business's digital profile.
      </p>

      <div className="personal-details">
        <ul>
          <li>I'm 41 years old</li>
          <li>I'm a hardworking freelancer</li>
          <li>I was born in Iran, currently I live in Norway</li>
          <li>I like playing football</li>
        </ul>
      </div>

      <div className="services-overview">
        <h3>What I Do</h3>
        <p>
          I specialize in full-stack web development using React.js, Next.js,
          Node.js, and PostgreSQL. I've worked with companies like Konsulenthus
          Oslo, TechPros Oslo, and Osloweb Sandvika, building everything from
          business websites to complex web applications.
        </p>
      </div>

      <div className="value-proposition">
        <p className="cta-text">
          Currently available for work. I'm based in Sandvika, Norway, and happy
          to meet in person or have a digital chat to discuss your software
          development needs.
        </p>
      </div>
    </section>
  );
}
