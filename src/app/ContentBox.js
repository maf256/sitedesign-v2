"use client";
import "./contentBox.scss";
import SideBar from "./components/SideBar";
import AboutMe from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Top from "./components/Top";

import TopIllustrations from "./components/TopIllustration";
import AboutIllustration from './components/AboutIllustration'
import CareerIllustration from './components/CareerIllustration';
import ContactIllustration from './components/ContactIllustration';

import { useState, useEffect, useRef } from "react";
import FadeMount from './components/FadeMount';


export default function ContnetBox() {

  const [opacity, setOpacity] = useState(1);
  const [topOffset, setTopOffset] = useState(0);     // for top Abstract Lines path
  const [bottomOffset, setBottomOffset] = useState(0); // for bottom Abstract Lines path
  const contentRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('top');

  //Top Section Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      if (!content) return;
      const scrollTop = content.scrollTop;
      const seventyFiveVh = window.innerHeight * 0.75;
      const progress = Math.min(scrollTop / seventyFiveVh, 1);
      setOpacity(1 - progress);
      setTopOffset(-20 * progress);
      setBottomOffset(20 * progress);
      setScrollProgress(progress);
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['top', 'about', 'career', 'contact'];
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: contentRef.current,
      threshold: 0.5,
    });
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <main className="content-box">
      <div className="inner-content">
        <div className="content" id="content" ref={contentRef} style={{ overflowY: "auto", maxHeight: "100vh" }}>
          <Top scrollProgress={scrollProgress} />
          <AboutMe />
          <Career />
          <Contact />
          {/* <Footer /> */}
        </div>
        <div className="filler-ribbon">
          <FadeMount show={currentSection === 'top'}>
            <TopIllustrations opacity={opacity} topOffset={topOffset} bottomOffset={bottomOffset} />
          </FadeMount>
          <FadeMount show={currentSection === 'about'}>
            <AboutIllustration />
          </FadeMount>
          <FadeMount show={currentSection === 'career'}>
            <CareerIllustration />
          </FadeMount>
          <FadeMount show={currentSection === 'contact'}>
            <ContactIllustration />
          </FadeMount>
          <div>

          </div>
        </div>
        <div className="sidebar-wrapper">
          <SideBar currentSection={currentSection} />
        </div>
      </div>
    </main>
  );
}


