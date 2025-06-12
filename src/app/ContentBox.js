import "./contentBox.scss";
import SideBar from "./components/SideBar";
import AboutMe from "./components/AboutMe";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
export default function ContnetBox() {
  return (
    <main className="content-box">
      <div className="inner-content">
        <div className="content">
          <LandingSection />
          <AboutMe />
          <Contact />
          <Booking />
          <Footer />
        </div>
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
      </div>
    </main>
  );
}

