import React from "react"
import Carousel from "../components/Carousel.jsx"

import NavBar from "./NavBar.jsx"
import logo from "../assets/homeimages/logo.png"
import ShortSummary from "../components/ShortSummary.jsx"
import SocialsLogo from "../components/SocialsLogo.jsx"
import ProjectSection from "../components/ProjectSection.jsx"
import Footer from "../components/Footer.jsx"


export default function Home(){
    return(
        <>
        <section className="home-container cont">
            {/* <img src={logo} alt="" className="logo"/> */}
            <NavBar />
            <div className="front-cont">
                <div className="front-captions-cont">
                    <p className="header1">Rafael So</p>
                    <p className="header3">Web 3D Developer</p>
                    <p className="my-stack-lists">
                    ReactJs, NodeJs, TypeScript, Solidity, C#, MongoDb, BabylonJs, Blender, Unreal Engine
                    </p>
                    <SocialsLogo />


                </div>
                <div className="left">
                
                </div>
                <div className="right">
                    <div className="blury-black"></div>
                    <Carousel imgDir={'../assets/homeimages'} images={['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png']} />
                </div>

                <p style={{
                position: "absolute",
                bottom: "3%",
                left: "3%",
                color: "white"
                }} className="email-info"><a style={{color: "white"}} href="mailto:rafaelsobook@gmail.com?subject=Hello&body=Hi Rafael, I saw your portfolio!">Email: rafaelsobook@gmail.com</a></p>
            </div>
        </section>
        <ShortSummary />
        <ProjectSection />
        <Footer />
        </>
    )
}
