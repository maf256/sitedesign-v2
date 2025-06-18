"use client";
import "./contentBox.scss";
import { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Contact from "./components/Contact";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";

function scrollListener() {
  document.getElementById("content").scrollIntoView({ behavior: "smooth" });
}

// Mobile/Tablet detection function
function isMobileDevice() {
  const userAgent = window.navigator.userAgent;
  const mobilePatterns = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  
  return mobilePatterns.some(pattern => pattern.test(userAgent));
}

export default function ContentBox() {
  const contentRef = useRef(null);
  const [topScrollProgress, setToptopScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("intro"); // New state for current section
  
  // Refs for each section
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // Smooth scrolling state
  const scrollState = useRef({
    currentScroll: 0,
    targetScroll: 0,
    isScrolling: false
  });

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    // Initialize scroll position
    scrollState.current.currentScroll = contentElement.scrollTop;
    scrollState.current.targetScroll = contentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = contentElement.scrollTop;
      const maxScroll = window.innerHeight * 0.5; // 50vh in pixels
      
      // Calculate progress (0 to 1) within the 50vh range
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      setToptopScrollProgress(progress);
      
      // Update current scroll position for smooth scrolling
      scrollState.current.currentScroll = scrollTop;
    };

    // Intersection Observer setup for section tracking
    const observerOptions = {
      root: contentElement, // Use the content div as the root
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% from top
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          setCurrentSection(sectionId);
          console.log(sectionId)
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = [landingRef, aboutRef, careerRef, contactRef, footerRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Smooth scroll animation function
    const smoothScrollAnimation = () => {
      const { currentScroll, targetScroll } = scrollState.current;
      
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        // Easing function for smooth deceleration
        const ease = 0.08; // Adjust this value to change smoothness (0.05-0.15 range)
        const newScroll = currentScroll + (targetScroll - currentScroll) * ease;
        
        scrollState.current.currentScroll = newScroll;
        contentElement.scrollTop = newScroll;
        
        requestAnimationFrame(smoothScrollAnimation);
      } else {
        // Stop animation when close enough
        contentElement.scrollTop = scrollState.current.targetScroll;
        scrollState.current.isScrolling = false;
      }
    };

    // Enhanced wheel event handler with smooth scrolling
    const handleWheel = (e) => {
      e.preventDefault(); // Prevent default page scrolling
      
      // Calculate scroll amount with momentum
      const scrollMultiplier = 1.2; // Adjust scroll sensitivity
      const scrollAmount = e.deltaY * scrollMultiplier;
      
      // Update target scroll position
      const maxScrollTop = contentElement.scrollHeight - contentElement.clientHeight;
      scrollState.current.targetScroll = Math.max(
        0, 
        Math.min(maxScrollTop, scrollState.current.targetScroll + scrollAmount)
      );
      
      // Start smooth scrolling animation if not already running
      if (!scrollState.current.isScrolling) {
        scrollState.current.isScrolling = true;
        requestAnimationFrame(smoothScrollAnimation);
      }
    };

    // Add scroll listener to content element
    contentElement.addEventListener("scroll", handleScroll);
    
    // Only add wheel listener if not on mobile/tablet
    if (!isMobileDevice()) {
      document.addEventListener("wheel", handleWheel, { passive: false });
    }
    
    // Cleanup
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
      if (!isMobileDevice()) {
        document.removeEventListener("wheel", handleWheel);
      }
      observer.disconnect();
    };
  }, []);

  // Calculate animation values based on scroll progress
  const animationValues = {
    opacity: 0.25 + (topScrollProgress * -0.40), // Opacity from 0.25 to 0
    gradientOffset: topScrollProgress * 50, // Gradient animation
    pathTransform: topScrollProgress * 10, // Path translation
  };

  // Debug: Log current section (remove in production)
  console.log("Current Section:", currentSection);

  return (
    <main className="content-box">
      <div className="inner-content">
        <div 
          className="content" 
          id="content" 
          ref={contentRef}
          style={{ 
            overflowY: "auto", 
            height: "100vh",
            // Hide scrollbar to make it look like page scrolling
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            // Add smooth scrolling for programmatic scrolls
            scrollBehavior: isMobileDevice() ? "smooth" : "auto"
          }}
        >
          <div ref={landingRef} data-section="intro" id="#intro">
            <LandingSection />
          </div>
          <div ref={aboutRef} data-section="about" id="#about">
            <AboutMe />
          </div>
          <div ref={careerRef} data-section="career" id="#career">
            <Career />
          </div>
          <div ref={contactRef} data-section="contact" id="#contact">
            <Contact />
          </div>
          <div ref={footerRef} data-section="footer" id="#footer">
            <Footer />
          </div>
        </div>
        
        <div className="filler-ribbon">
          <div className="abstract-lines">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              opacity={animationValues.opacity}
              style={{
                transition: "opacity 0.1s ease-out"
              }}
            >
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop 
                    offset={`${Math.max(0, animationValues.gradientOffset - 25)}%`} 
                    style={{ stopColor: '#6a0dad', stopOpacity: 1 }} 
                  />
                  <stop 
                    offset={`${Math.max(25, animationValues.gradientOffset)}%`} 
                    style={{ stopColor: '#8d3da3', stopOpacity: 1 }} 
                  />
                  <stop 
                    offset={`${Math.max(50, animationValues.gradientOffset + 25)}%`} 
                    style={{ stopColor: '#b15cdb', stopOpacity: 1 }} 
                  />
                  <stop 
                    offset={`${Math.min(75, animationValues.gradientOffset + 50)}%`} 
                    style={{ stopColor: '#000717', stopOpacity: 1 }} 
                  />
                  <stop 
                    offset="100%" 
                    style={{ stopColor: '#355EF2', stopOpacity: 1 }} 
                  />
                </linearGradient>
              </defs>

              <path
                d="M0 25 L50 0 L100 25 L50 50 Z"
                fill="none"
                stroke="url(#purpleGradient)"
                strokeWidth="0.25"
                strokeLinecap="square"
                strokeLinejoin="miter"
                transform={`translate(0, ${animationValues.pathTransform * -5.7})`}
                style={{ transition: "all 0.1s ease-out" }}
              />
              <path
                d="M0 50 L50 25 L100 50 L50 75 Z"
                fill="none"
                stroke="url(#purpleGradient)"
                strokeWidth="0.25"
                strokeLinecap="square"
                strokeLinejoin="miter"
                transform={`translate(0, 0)`}
                style={{ transition: "all 0.1s ease-out" }}
              />
              <path
                d="M0 75 L50 50 L100 75 L50 100 Z"
                fill="none"
                stroke="url(#purpleGradient)"
                strokeWidth="0.25"
                strokeLinecap="square"
                strokeLinejoin="miter"
                transform={`translate(0, ${animationValues.pathTransform * 5.7})`}
                style={{ transition: "all 0.1s ease-out" }}
              />
            </svg>
          </div>
        </div>
        
        <div className="sidebar-wrapper">
    <div>
        <SideBar currentSection={currentSection} />
        {/* Your other components */}
    </div>
        </div>
      </div>
    </main>
  );
}
