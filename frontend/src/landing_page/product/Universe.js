import React from "react";
function Universe() {
  return (
    <div className="container text-center p-6">
      <div className="row p-5">
        <p style={{ fontSize: "1.2rem" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech{" "}
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="row p-6 tp-5" style={{ lineHeight: "50px" }}>
        <h1>The Zerodha Universe</h1>
      </div>
      <div className="row" style={{ lineHeight: "50px" }}>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-3 text-small text-muted">
        <div className="col mt-5">
          <img style={{ width: "50%" }} src="media\images\smallcaseLogo.png" />
          <p>Thematic invesment platform</p>
        </div>
        <div className="col mt-5">
          <img style={{ width: "50%" }} src="media\images\streakLogo.png" />
          <p>Algo & strategy platform</p>
        </div>
        <div className="col mt-5">
          <img style={{ width: "50%" }} src="media\images\sensibullLogo.svg" />
          <p>Options and trading platform</p>
        </div>
      </div>
      <div className="row p-3 text-small text-muted mb-3">
        <div className="col mt-5">
          <img
            style={{ width: "50%" }}
            src="media\images\zerodhaFundhouse.png"
          />
          <p>Asset management</p>
        </div>
        <div className="col mt-5">
          <img style={{ width: "50%" }} src="media\images\tijori.svg" />
          <p>Algo & strategy platform</p>
        </div>
        <div className="col mt-5">
          <img style={{ width: "50%" }} src="media\images\dittoLogo.png" />
          <p>Insurance</p>
        </div>
      </div>
      <button
        className="p-2 fs-5 mb-5"
        style={{ width: "20%", margin: "0 auto", backgroundColor: "blue" }}
      >
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
