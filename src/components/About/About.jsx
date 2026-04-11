import React from 'react'
import './About.css'
import about_me from '../../assets/about_me.jpg'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbUsersGroup } from "react-icons/tb";
import useReveal from '../../hooks/useReveal';



export default function About() {
    const sectionRef = useReveal();

    return (
        <section className='about reveal' id='about' ref={sectionRef} style={{ '--reveal-delay': '0ms' }}>
            <div className="top-section">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
            </div>
            <div className="container about_cintainer">

                <div className="about_me">
                    <div className="about_me_img hover-lift">
                        <img src={about_me} alt="Mahmoud Mohamed working on frontend projects" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <div className="about_cart surface-card hover-lift">
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>Frontend focused project delivery</small>
                        </div>

                        <div className="about_cart surface-card hover-lift">
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>10+ completed web projects</small>
                        </div>

                        <div className="about_cart surface-card hover-lift">
                            <TbUsersGroup className='about_icon' />
                            <h5>Collaboration</h5>
                            <small>UI implementation from design handoff</small>
                        </div>
                    </div>
                    <p>
                        I build responsive, accessible interfaces with React and modern JavaScript.
                        I enjoy turning UI concepts into clean, reusable components and smooth user
                        experiences. My focus is quality execution: readable code structure,
                        consistent design systems, and performance-aware implementation.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
                </div>
            </div>
        </section>
    )
}
