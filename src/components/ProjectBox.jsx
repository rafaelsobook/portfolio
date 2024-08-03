import React from 'react'
import Carousel from './Carousel';
// import border from "../assets/homeimages/form.png"

export default function ProjectBox({detail}) {
    const {
        projectName,
        diplayImages,
        desc,
        ss1,
        ss2,
        ss3,
    } = detail
    const getImage = (imgName) => {
        return new URL(`../assets/ss/${imgName}`, import.meta.url).href;
    };

    // const imgToDisplay = getImage(imgName);

    const shot1Dsiplay = getImage(ss1);
    const shot2Dsiplay = getImage(ss2);
    const shot3Dsiplay = getImage(ss3);
    return (
        <div className="project-box">
            <div className="top-bx">
                {/* <img src={border} alt="" className="border" /> */}
                {/* <img src={imgToDisplay} alt="" className="top-img" /> */}
                <div className="top-img">
                    <Carousel imgDir={'../assets/ss'} images={diplayImages} />
                </div>
            </div>
            <div className="info-bx">
                <div className="info-left">
                    <h3 className="project-ttle">{projectName}</h3>
                    <p className="project-desc">{desc}</p>
                </div>
                <div className="info-ss">
                    <img src={shot1Dsiplay} alt="" className="ss-img" />
                    <img src={shot2Dsiplay} alt="" className="ss-img" />
                    <img src={shot3Dsiplay} alt="" className="ss-img" />
                </div>
                
            </div>
        </div>
    )
}
