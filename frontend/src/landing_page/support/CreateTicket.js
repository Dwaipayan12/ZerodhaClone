import React from 'react';
function CreateTicket() {
    return ( 
       <div>
        <div className='container p-5'>
            <div className='row'>
                <p className=' fs-4'>
                To create a ticket, select a relevant topic
                </p>
            </div>
            <div className='row p-3 mt-6'>
                <div className='col-4'>
                <p className=' fs-5'>
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                {" "}Account Opening
                </p>
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Getting started</a> <br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Online</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Offline</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Charges</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership and HUF</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br />
                </div>
                <div className='col-4'>
                <p className=' fs-5'>
                <i class="fa fa-address-book-o" aria-hidden="true"></i>
                {" "} Your Zerodha Account 
                </p>
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Login credentials</a> <br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification and segment addition</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>CMR & DP ID</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of shares</a><br />

                </div>
                <div className='col-4'>
                <p className=' fs-5'>
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                {" "} Trading and Markets 
                </p>
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a> <br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Kite</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Margins</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Product and order types</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Kite features</a><br />
                </div>
            </div>

            <div className='row p-3'>
                <div className='col-4'>
                <p className=' fs-5'>
                <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                {" "} Funds 
                </p>
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Fund withdrawal</a> <br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Adding funds</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Adding bank accounts</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a><br />
                </div>
                <div className='col-4'>
                <p className=' fs-5'>
                <i class="fa fa-address-book-o" aria-hidden="true"></i>
                {" "}Console  
                </p>
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a> <br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Referral program</a><br />

                </div>
                <div className='col-4'>
                <p className=' fs-5'>
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                {" "}Coin  
                </p>
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Understanding mutual funds and Coin</a> <br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Coin app</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Coin web</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>Transactions and reports</a><br />
                <a href="#" style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br />
                </div>
            </div>
        </div>
       </div>
     );
}

export default CreateTicket;