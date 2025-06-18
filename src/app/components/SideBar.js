import '../scss/sideBar.scss'

export default function SideBar({ currentSection }) {
    const sections = ['intro', 'about', 'career', 'contact'];
    
    return (
        <nav>
            <ul>
                {sections.map((section, index) => (
                    <li 
                        key={section}
                        className={currentSection === section ? 'active' : ''}
                    >
                        |
                    </li>
                ))}
            </ul>
        </nav>
    )
}
