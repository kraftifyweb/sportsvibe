import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div>
    <div className="vid">
      <video autoPlay loop muted className="position-relative">
        <source src="multisports.mp4" type="video/mp4"></source>
        
      </video></div>
      <div className="m-0 mt-0 position-absolute">
          <h1>Sports Vibes</h1>
          <h3>One place for all sports news and content</h3>
        </div>
    
    </div>
  );
}

export default Hero;
