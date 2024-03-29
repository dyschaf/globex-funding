import logo from "./img/logo.jpeg"
function Footer(){
    return(
        <div className="footer">
            <div>
                <img className="footerLogo" src={logo} alt="logo"></img>
            </div>
            <div>
                
                <h2>SITE</h2>
                <a href="/">
                    <h6>Home</h6>
                </a>
                <a href="/form">
                    <h6>Apply</h6>
                </a>
                <a href="/iso-partnerships">
                    <h6>ISO Partnership</h6>
                </a>
            </div>
            <div className="footerRight">
                
                <h2>Contact Info</h2>
                
                <h6>Number</h6>
                <h6>Email</h6>
            </div>
        </div>
        
    )
}
export default Footer