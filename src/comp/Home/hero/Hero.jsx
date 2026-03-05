import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div>
    <div className="banner">
      <video autoPlay loop muted playsInline className="position-relative">
        <source src="multisports.mp4" type="video/mp4"></source>
      </video>

      <div className="hero text-center text-white py-5 position-absolute left-0" style={{ top: "25%" }}>
        <h1>Sports Vibes</h1>
        <h3>One place for all sports news and content</h3>
      </div>
    </div>
    </div>
  );
}

export default Hero;
