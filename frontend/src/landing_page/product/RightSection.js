import React from 'react';
function RightSection({
    productName,
    productDescription,
    tryDemo,
    imageURL,
  }) {
    return ( 
<div className="container">
    <div className="row p-5">
        <div className="col-4  mt-5 p-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <diV className="mt-3">
            <a style={{textDecoration:"none"}} href={tryDemo}><p>{tryDemo}</p></a>
            </diV>
        </div>
        <div className='col-1'></div>
        <div className="col-7 ">
            <img src={imageURL} />
        </div>
    </div>
  </div>
     );
}

export default RightSection;