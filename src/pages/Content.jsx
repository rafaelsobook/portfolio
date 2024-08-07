import React from 'react'
import { projects } from '../assets/localdb.js'
import { useLocation } from 'react-router-dom';
const body = document.querySelector('body')
// import frontVideo from "../assets/videos/grimlandw.webm"

export default function Content() {
    const locName = useLocation().pathname.replace(/\//, "")
    
    const getVideo = (vidName) => {
        return new URL(`../assets/videos/${vidName}w.webm`, import.meta.url).href;
    };
    const getImage = (imgName) => {
        return new URL(`../assets/ss/${imgName}backg.jpg`, import.meta.url).href;
    };
    const getFeatureImage = (imgName) => {
        return new URL(`../assets/ss/${imgName}`, import.meta.url).href;
    };
    const frontVideo = getVideo(`${locName}`)
    const backgImg = getImage(locName)

    const myContent = projects.find(pj => pj.contentLink === locName)
    console.log(projects)
    console.log(locName)
    if(myContent) {
        body.style.background = myContent.secColor
        const storylines = myContent.storyDesc.split('.')
        return (
        <div className="content-page">
            <section className="top">
                {/* <div className="front-image" style={{
                background: `url("./${myContent.diplayImages[0]}") no-repeat`,
                backgroundSize: "contain",
                backgroundPosition: "center"
                }}></div> */}
                
                <video muted loop autoPlay className="background-video">
                    {/* <source src={frontVideo} type="video/mp4"></source> */}
                    <source  src={frontVideo} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
                
            </section>
            <section className="half-section">
                <h2 className="title">{myContent.projectName}</h2>
                <img src={`/${locName}logo.png`} alt="" className="game-logo" />
                <div style={{ background: myContent.secColor}} className="story">
                    <div style={{
                    background: `url(${backgImg}) no-repeat`,
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                    }} className="story-backg" ></div>
                    <p className="story-ttle">{myContent.projectName}</p>
                    <div className="game-info">
                        <p className="status label">Status: <span className="answer-cap">{myContent.status}</span></p>
                        <p className="status label">Genres: <span className="answer-cap">{myContent.genre}</span></p>
                        <p className="developer label">Developer: <span className="answer-cap">Rafael So</span></p>
                    </div>
                    <div className="game-desc">
                        <p className="starting-cap">{myContent.startingCaption}</p>
                        <ul className="story-lines">
                            {storylines.map((desc,indx) => <li key={indx} className="desc">{desc}</li>)}
                        </ul>
                        {/* <p className="desc" dangerouslySetInnerHTML={{ __html: storylineLabel }}></p> */}
                        <p className="end-caption">{myContent.endingCaption}</p>
                    </div>
                    <div className="platforms-section">
                        <p className="big-caption">Platforms</p>
                        
                        <div className="link-lists">
                            <a href={myContent.gameLink} className="linkbtn">Browser</a>
                        </div>
                    </div>
                    <div className="youtube-container">
                        <iframe
                            src={myContent.ytLink}
                            style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0,
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded YouTube Video"
                        ></iframe>
                    </div>
                </div>
                
                <div style={{
                    background: myContent.primeColor
                }} className="gameplay-container">
                    <div  className="gameplay-backg" ></div>
                    <p className="big-caption" style={{color: myContent.thirdColor}}>Game Features</p>

                    <div className="features-list">
                        {myContent.gameFeatures.map( (feature, indx) => (
                            <div key={indx} className="feature-bx">
                                <div  className="left">
                                    <img src={`/${myContent.borders}`} alt="" className="feature-border" />
                                    <img src={`/${feature.imageDisp}`} alt="" className="feature-img" />
                                </div>
                                <div className="right">
                                    <p style={{background: myContent.thirdColor}} className="feature-ttle">{feature.header}</p>

                                    <p style={{color: myContent.thirdColor}} className="feature-cap">{feature.cap1}</p>
                                    <p style={{color: myContent.thirdColor}} className="feature-cap">{feature.cap2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div style={{
                background: `url("./${myContent.bottomImg}") no-repeat`, backgroundSize: "cover", backgroundPosition: "center"
                }} className="bottom"> 
                    <p className="big-caption">- Contributors -</p>
                    <div className="center-div">
                        <div className="member-bx">
                            <img src="./rafpic.jpg" alt="" className="member-img" />
                            <p className="member-name">Rafael So</p>
                            <p className="member-role">Developer <span className="red-label">&</span> 3D Animator</p>
                        </div>
                        <div className="member-bx">
                            <img src="./kheilpic.jpg" alt="" className="member-img" />
                            <p className="member-name">Juhariz Kheil</p>
                            <p className="member-role">2D Design <span className="red-label">&</span> Graphic Artist</p>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
        )}
    else return (
        <div className="error">
            Error 404 not found
        </div>
    )
    
}
