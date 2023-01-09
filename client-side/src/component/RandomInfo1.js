// import React from 'react';
import quick2 from './img/Quick2.png'
import completed from './img/completed.png'
import flexable from './img/flexable.png'
import money from './img/money.png'
function RandomInfo1() {
    return (
    <>
        <br></br>
        <div className="container">
            <div className="ym_icon_blocks">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="ym_icon_block">
                        <div className="ym_icon">
                            <img id="completed"src={completed} alt=""/>
                        </div>
                    <h4>Simple Process</h4>
                <p>Our application requires some info and the last 3 months of you're business bank statements, Which take no time.</p>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="ym_icon_block">
                    <div className="ym_icon">
                        <img id="Quick2"src={quick2} alt=""/>
                    </div>
                    <h4> Quick Direct Deposit</h4>
                    <p>We are dedicated to provide approvals within hours and to have funds deposited into your bank account same-day.</p>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="ym_icon_block">
                    <div className="ym_icon">
                        <img Id="flexable"src={flexable} alt=""/>
                    </div>
                    <h4>Sky is the limit</h4>
                    <p>The funds can be used for any business purpose: purchasing equipment, marketing, hiring employees — your imagination is the limit.</p>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="ym_icon_block">
                    <div className="ym_icon">
                        <img id="money" src={money} alt=""/>
                    </div>
                    <h4>Payment Relief</h4>
                    <p>You’ll feel comforted knowing your payments can always be adjusted accordingly if your business has a loss of revenue.</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </>
    )
}
export default RandomInfo1