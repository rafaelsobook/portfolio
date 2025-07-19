import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <header>
            <Link to="/">Home</Link>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href="mailto:rafaelsobook@gmail.com?subject=Hello&body=Hi Rafael, I saw your portfolio!">Contact</a>
        </header>
    )
}