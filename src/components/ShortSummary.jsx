import backgroundImg from "../assets/homeimages/summaryDesign.png"


import babylonLogo from "../assets/icons/babylon.png"
import three from "../assets/icons/three.png"
import typeScript from "../assets/icons/typescript.png"
import vite from "../assets/icons/vite.png"
import ethLogo from "../assets/icons/eth.png"
import hardhat from "../assets/icons/hardhat.png"
import reactLogo from "../assets/icons/react.png"
import blender from "../assets/icons/blender.png"

export default function ShortSummary(){
    return (
        <div id="about" className="summary-container cont">
            <img src={backgroundImg} alt="" className="summary-background" />
            <h3 className="title">Short Summary</h3>
            <p className="label">I am a passionate developer with a strong focus on 3D and programming. My expertise includes developing play-to-earn games, creating interactive web applications, and leveraging blockchain technology. I have extensive experience with Babylon.js for 3D game development, integrating blockchain solutions using ethers.js, and utilizing the ThirdWeb React SDK for smart contract interactions. I am adept at deploying and marketing projects on platforms like Vercel and Itch.io.</p>

            <ul className="list-of-technology">
            <li>
                <img src={blender} alt="" className="tech-img" />
            </li>
            <li>
                <img src={three} alt="" className="tech-img three-logo" />
            </li>
            <li>
                <img src={babylonLogo} alt="" className="tech-img" />
            </li>    
            <li>
                <img src={ethLogo} alt="" className="tech-img" />
            </li>
            <li>
                <img src={hardhat} alt="" className="tech-img" />
            </li>
            <li>
                <img src={vite} alt="" className="tech-img" />
            </li>
   
            <li>
                <img src={reactLogo} alt="" className="tech-img" />
            </li>
            <li>
                <img src={typeScript} alt="" className="tech-img" />
            </li>
        </ul>
        </div>
    )
}