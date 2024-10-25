import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  gogglePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
        <div className="col-6  mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <diV className="mt-3">
            <a style={{ textDecoration: "none" }} href={tryDemo}>
              <p>{tryDemo}</p>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              <p>{learnMore}</p>
            </a>
          </diV>
          <diV className="mt-3">
            <a href={gogglePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </diV>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
