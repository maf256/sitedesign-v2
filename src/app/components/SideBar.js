import "../scss/sideBar.scss";

export default function SideBar({ currentSection }) {
  const sections = ["top", "about", "expertise", "career", "contact"];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={currentSection === section ? "active" : ""}
          >
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(section);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {" "}
              |
              <span className="section-name">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
