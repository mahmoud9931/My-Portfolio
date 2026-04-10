import React from 'react'
import './home.css'
import me from '../../assets/me.png'
import cv from '../../assets/cv.pdf'
import SocialIcons from './SocialIcons'
import useReveal from '../../hooks/useReveal'

export default function Home() {
    const headerRef = useReveal()
    const imageRef = useReveal()

    return (

        <header className='home' id='home'>
            <div className="container home_container">
                <div ref={headerRef} className="reveal">
                    <h4>Hello, I am</h4>
                    <h1>Mahmoud Mohamed</h1>
                    <h4 className='text-light'>Frontend Developer focused on responsive UI and clean UX.</h4>
                </div>
                <div className="btns reveal is-visible">
                    <a href={cv} className='btn' download>Download CV</a>
                    <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
                </div>
                <div ref={imageRef} className="me reveal">
                    <img src={me} alt="Mahmoud Mohamed portrait" />
                </div>
                <a href="#about" className='scroll_down'>Scroll Down</a>
                <SocialIcons/>
            </div>
        </header>
    )
}
