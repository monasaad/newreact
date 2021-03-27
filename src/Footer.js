import Footer_Links from './Footer_Links';
import Footer_Icons from './Footer_Icons';
import Footer_Signture from './Footer_Signture';
// console.log("./list.svg");


function Footer(){
    return (
        <div>
            <Footer_Links label="SEND US A TIP"/>
            <Footer_Links label="CONTACT US"/>
            <Footer_Links label="TERMS OF USE"/>
            <Footer_Links label="PRIVACY POLICE"/>
            <br/>
            
            <Footer_Icons img='./images/instagram.svg' alt='instagram'/>
            <Footer_Icons img='./images/facebook.svg' alt='facebook'/>
            <Footer_Icons img='./images/youtube.svg' alt='youtube'/>
            <Footer_Icons img='images/linkedin.svg' alt='linkedin'/>
            <Footer_Icons img='images/spotify.svg' alt='spotify'/>

            <Footer_Signture img="images/heart.svg" alt="heart"/>

            
            
        </div>
    );
}

export default Footer;