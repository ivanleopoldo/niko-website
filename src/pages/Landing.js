import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import welcome from './welcome.json';
import user from "./user.json";
import Lottie from "lottie-react";
import { useParallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParaLanding } from "../components";

function Landing() {
  const animationControllerRef = useRef(null);
  const userAnimationRef = useRef(null); // Define userAnimationRef here
  const parallaxRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (animationControllerRef.current) {
      observer.observe(animationControllerRef.current);
    }

    return () => {
      if (animationControllerRef.current) {
        observer.unobserve(animationControllerRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animationControllerRef.current?.play();
        userAnimationRef.current?.play();
      } else {
        animationControllerRef.current?.pause();
        userAnimationRef.current?.pause();
      }
    });
  };

  return (
    <div>
      <div style={{ height: "10vh" }}></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "90%" }}>
          <Lottie
            animationData={welcome}
            lottieRef={(ref) => (animationControllerRef.current = ref)}
          />
        </div>
        <div className="mr-2" style={{ width: "10%" }}>
          <Lottie
            animationData={user}
            lottieRef={(ref) => (userAnimationRef.current = ref)}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <button className="btn btn-success mr-4">
          <Link to="/login">Login</Link>
        </button> 
        <button className="btn btn-success" onClick={() => window.location.href = "./AboutUs.js"}>About Us</button>
      </div>
      <div style={{ marginTop:"20%", height:"50%"}}>
        <ParallaxProvider>
              <div ref={parallaxRef}>
                <ParaLanding />
              </div>
            </ParallaxProvider>
      </div>
    
    </div>
  );
}

export default Landing;
