import "../scss/sideBar.scss";
import langdata from "../../../language.json";

const content = await import(`../../locales/${langdata.lang}.json`);

export default function SideBar({ currentSection }) {
  const sections = ["top", "about", "expertise", "career", "contact"];
  const { navigation } = content;

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
              |<span className="section-name">{navigation[section]}</span>
            </a>
          </li>
        ))}
      </ul>
      <div>
        <a href="https://en.sitedesign.no/" className="lang">
          {langdata.lang == "en" ? "EN" : "NO"}
        </a>
      </div>
    </nav>
  );
}
