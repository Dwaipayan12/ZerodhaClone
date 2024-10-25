import React from "react";
function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5">
      <div className="row text-center">
        <h1 style={{fontSize:"2.9rem"}}>Technology</h1>
        <p  className="text-muted"style={{lineHeight:"2.0",fontSize:"1.4rem"}}>Sleek, modern, and intuitive trading platforms</p>
        <p className="text-muted" style={{lineHeight:"3.3",fontSize:"1.1rem"}}>Check out our<a href="#" style={{textDecoration:"none"}}> investment offerings →</a></p>
      </div>
    </div>
  );
}

export default Hero;
