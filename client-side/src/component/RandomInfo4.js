import React from "react"
function RandomInfo4(){
    const [select, setSelect] =React.useState(true)
    return(
        <>

        <div id="w-node-babc4290-961b-9196-184e-45bba718cd7a-1fe1565b" className="slider-div">
            <div >
            
                <div className="reviewContainer" id="w-slider-mask-0">
                {select ?
                    <div className="slide w-slide" aria-label="1 of 2" role="group" >                
                        <div className="picReveiw">
                            <div className="img">
                                <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/61f64ec752d2965bf466be41_Testimonial-img.jpg" loading="lazy" alt="" className="testi-img"></img>
                            </div>
                            <div  className="reviewText">
                                <div >After researching many companies, we wanted to make sure we partnered with someone we can rely on. Narai understood our needs and worked with us to help us achieve our goals.<br></br><br></br><strong>Tanya Wells, CTO Ramada INC.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    :

                    <div className="" >
                        <div className="  picReveiw " aria-hidden="true">
                            <div className=" img " aria-hidden="true">
                                <img src="https://uploads-ssl.webflow.com/61f3ea34d716a5986fe5ec74/62729aae1392928f7b6b7646_businessman-corporate-valuation-advisors-cva-10.png" loading="lazy" alt="" className="testi-img" aria-hidden="true"></img>
                            </div>
                            <div   className="reviewText">
                                <div >Great people to work with. They walk you thru the process and answer any questions I had. There response is quick and very respectful. Thank you for your time and hard work. Keep up the hard work.<br aria-hidden="true"></br> <br aria-hidden="true"></br><strong aria-hidden="true">BRIAN&nbsp;D, CEO JAJ M INC.</strong>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <br></br>
                <br></br>
                <span className="center">Review </span><br></br>
                {select ?
                <>
                <input className="center" type="radio" name="review" checked="checked" value="true"  onChange={()=>{setSelect(true)}}></input>
                <label for="true">1</label>
                </>
                :
                <>
                <input className="center " type="radio" name="review" value="true"  onChange={()=>{setSelect(true)}}></input>
                <label for="true">1   </label>
                </>
                }
                <input className="left20px"type="radio" name="review" value='false'onChange={()=>{setSelect(false)}}></input>
                <label for="false">2</label>
                
                

                <div className="slide-nav w-slider-nav w-slider-nav-invert w-round">
                    <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 2" aria-pressed="true" role="button" tabindex="0" 
                    // style="margin-left: 3px; margin-right: 3px;"
                    >
                    </div>
                    <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 2" aria-pressed="false" role="button" tabindex="-1" 
                    // style="margin-left: 3px; margin-right: 3px;"
                    >
                    </div>
{/* test */}
        
                </div>
            </div>
        </div>
        </>
    )
}
export default RandomInfo4