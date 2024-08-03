import gitlogo from "../assets/icons/git.png";
import itch from "../assets/icons/itch.png";
import linkedin from "../assets/icons/linkedin.png";
import sketchlogo from "../assets/icons/sketchlogo.png";

function SocialsLogo() {
    return (
        <div className="social-links-container">
            <a href="https://github.com/rafaelsobook">
                <img src={gitlogo} alt="" className="socials-logo" />
            </a>
            <a href="https://sketchfab.com/rafaelanra">
                <img src={sketchlogo} alt="" className="socials-logo" />
            </a>
            <a href="https://www.linkedin.com/in/rafael-so-494462216/">
                <img src={linkedin} alt="" className="socials-logo" />
            </a>
            <a href="https://rafael29.itch.io/">
                <img src={itch} alt="" className="socials-logo" />
            </a>
            
           
        </div>
    )
}

export default SocialsLogo
