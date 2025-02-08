import React, {useState} from "react-dom";
import "./footer.css";

const Footer =()=>{

    return(
        <footer>
            <div className="footerLogoBox">
                <div className="snsLink">
                    <img src="" alt="" className="footerLogo" />
                    <a href="#" className="faceBookLink"></a>  
                    <a href="#" className="instagramLink"></a>  
                </div>
                <img src="" alt="" className="kmuLogo"></img>
                <p>@2025 likelion X KMU All rights reserved</p>
            </div>
            <nav>
                <p className="2025Txt">2025</p>
                <ul className="footerList">
                    
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;