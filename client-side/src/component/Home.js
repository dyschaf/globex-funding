// import Background from './img/Background.jpg'
// import {Image} from 'react-bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import RandomInfo1 from "./RandomInfo1"
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
                    <h3>Put your business in control <br></br>By applying for a Business Cash Advance.</h3>
                    <h3>The effective and efficient way to finance your business needs.</h3>
                    <h6>If you like to apply for a Business Cash Advance please fill out our form.</h6>
                    <br></br>
                    <Button variant="secondary">Get a Quote</Button>{' '}
                </div>
            </div>
        </div>
        <RandomInfo1/>
        </>
        );
    }
    // "C:\Users\Dovid Schaffel\Documents\dev\Cash_advance\client\src\img\Background.jpg"
    export default Home;