// import Background from './img/Background.jpg'
// import {Image} from 'react-bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import RandomInfo1 from "./RandomInfo1"
import RandomInfo2 from "./RandomInfo2"
import RandomInfo3 from "./RandomInfo3"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Grid from 'react-bootstrap/Grid';

import "../App.css"
function Home() {

    return (
        <>
        <div className='background-pic' >
            <div className='background-text-container'>
                <div className='background-text'>
                    <b>
                        <h1 className='gray'><span className='gold'>Reliable.</span> <span className='white'>Quick.</span> <span id="underline"className='blue'> Simple </span>
                        <br></br>
                        Funding for your business.</h1>
                    </b>
                    <h6>Avoid unneeded hassle with our direct quick and easy funding.</h6>
                    <br></br>
                    <Button variant="secondary">Get a Quote</Button>{' '}
                </div>
                
                <div id="w-node-_664239d4-ff38-e477-4f15-a0aad0c916f5-1fe1565b" className="cards-background tb-hide">
                    <div className="rec-wrapper">
                        <div className="rec-icon-box">
                            <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f53e72fef6f26fe9fe15f4_Briefcase.svg" loading="lazy" alt="" className="rec-icon"></img>
                        </div>
                            <div className="rec-txt-box">
                                <div className="rec-txt-style">Complete our online application or speak with funding specialist.</div>
                                <div className="rec-btn">
                                <div className="rec-btn-txt">Prequalify Now</div>
                                <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f53e71773d630a5b3f3098_Arrow.svg" loading="lazy" alt=""></img>
                                </div>
                            </div>
                        </div>
                    <div className="rec-wrapper">
                        <div className="rec-icon-box">
                            <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f53eaff6f6996b4a74e0cc_timelap.svg" loading="lazy" alt="" className="rec-icon"></img>
                        </div>
                        <div className="rec-txt-box">
                            <div className="rec-txt-style">We assess your business health and offer you the best funding.</div>
                            <div className="rec-btn">
                            <div className="rec-btn-txt">24 Hour Approval</div>
                            <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f53e71773d630a5b3f3098_Arrow.svg" loading="lazy" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="rec-wrapper">
                        <div className="rec-icon-box">
                            <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f53ece0b14990b79c166bf_Dollar.svg" loading="lazy" alt="" className="rec-icon dlr-icon"></img>   
                        </div>
                        <div className="rec-txt-box">
                            <div className="rec-txt-style">Receive funds within the same day as the approval.</div>
                        <div className="rec-btn">
                            <div className="rec-btn-txt">Same Day Funding</div>
                            <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f53e71773d630a5b3f3098_Arrow.svg" loading="lazy" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <RandomInfo1/> */}
        <RandomInfo2/>
        <RandomInfo3/>

        </>
        );
    }
    // "C:\Users\Dovid Schaffel\Documents\dev\Cash_advance\client\src\img\Background.jpg"
    export default Home;