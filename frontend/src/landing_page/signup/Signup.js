import React from 'react';
function Signup() {
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-5' style={{padding:"8.0rem",width:"40%"}}>
             <img src='media\images\signup.png' />
            </div>
            <div className='col-7' style={{padding:"13.0rem",paddingLeft:"20.0rem"}}>
                <h1>Signup now </h1>
                <p className='text-muted'>Or track your existing application.</p>
                <p className='text-muted'> You will receive an OTP on your number </p>
                <button className='p-2 fs-5' style={{width:"50%",margin:"0 auto",backgroundColor:"blue"}}>continue</button>
                <p><b>Want to open an NRI account?</b></p>
            </div>
        </div>
        </div>
     );
}

export default Signup;