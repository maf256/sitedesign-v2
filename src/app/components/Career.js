import "../scss/career.scss";

export default function Career() {
  return (
    <section className="career" id="career">
      <h2>Career</h2>

      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h3>React Developer</h3>
            <p className="company">MERCOR – San Francisco, USA</p>
            <p className="duration">01.2025 - present</p>
            <p className="description">
              AI training, problem-solving, prompt engineering using React,
              JavaScript, CSS, Tailwind
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-content">
            <h3>Software Engineer</h3>
            <p className="company">CELESTE – San Francisco, USA</p>
            <p className="duration">04.2024 - 09.2024</p>
            <p className="description">
              Built AI training pipelines, implemented prompt engineering
              solutions, developed AI model training interfaces
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-content">
            <h3>Technical Project Management Training</h3>
            <p className="company">Bærum kommune – Norway</p>
            <p className="duration">02.2024 - 05.2024</p>
            <p className="description">
              Led digitization project coordination, managed municipal IT
              infrastructure modernization
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2022</div>
          <div className="timeline-content">
            <h3>Fullstack Developer</h3>
            <p className="company">TECHPROS AS – Oslo, Norway</p>
            <p className="duration">04.2022 - 05.2022</p>
            <p className="description">
              Developed automation framework for financial collections, built
              React dashboard with Node.js/PostgreSQL
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2009</div>
          <div className="timeline-content">
            <h3>Web Developer</h3>
            <p className="company">Municipality of Tehran – Iran</p>
            <p className="duration">01.2009 - 01.2020</p>
            <p className="description">
              Built large-scale digital platforms serving 50,000+ daily users,
              improved public service accessibility by 60%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
