import React from "react";
function Hero() {
  return (
    <div
      className="container-fluid p-5" id="supporthero"
      style={{ paddingLeft: "20px", background: "rgb(56,126,209)",color:"white" }}
    >
      <div className="row">
        <div className="col-10" style={{paddingLeft:"50px"}}>
          <h3 >Support Portal</h3>
        </div>
        <div className="col-2">
          <a href="#">Track tickets</a>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-6 pb-5">
          <p className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </p>{" "}
          <br />
          <input
            className="fs-6"
            placeholder=" Eg:how do i active F&O, why is my order getting rejected ... "
            style={{ marginBottom: "10px", width: "100%", height: "30%" }}
          />
          <br />
          <a href="#">Track account opening </a> &nbsp;&nbsp;&nbsp;{" "}
          <a href="#">Track segment activation </a> &nbsp;&nbsp;&nbsp;{" "}
          <a href="#"> Intraday margins </a>
          <br />
          <a href="#"> Kite user manual</a>
        </div>
        <div className="col-6" style={{paddingTop:"4.1rem",paddingLeft:"3.0rem"}}>
          <h3>Featured</h3>
          <p style={{paddingLeft:"2.0rem"}}>
            1. <a href="#">Surveillance measure on scrips - July 2024</a>
          </p>
          <p style={{paddingLeft:"2.0rem"}}>
            2.<a href="#" >Latest Intraday leverages and Square-off timings</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
