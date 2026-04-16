import React from 'react'
import './Skills.css'
import css from '../../assets/css3.svg'
import html from '../../assets/html5_18891.png'
import js from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
// import nextjs from '../../assets/nextjs.svg'
import tailwind from '../../assets/tailwindcss.svg'
import typescript from '../../assets/Typescript.svg'
import bootstrap from '../../assets/Bootstrap.svg'
import figma from '../../assets/figma.svg'
import useReveal from '../../hooks/useReveal'


export default function Skills() {
    const sectionRef = useReveal()

    const skillsData = [
        { id: 1, name: 'HTML5', img: html },
        { id: 2, name: 'CSS3', img: css },
        { id: 3, name: 'JavaScript', img: js },
        { id: 4, name: 'Bootstrap', img: bootstrap },
        { id: 5, name: 'React', img: react },
        { id: 6, name: 'Tailwind CSS', img: tailwind },
        { id: 7, name: 'TypeScript', img: typescript },
        // { id: 8, name: 'Next JS', img: nextjs },
        { id: 9, name: 'Figma', img: figma },
    ]
    return (
        <section id="skills" className='reveal' ref={sectionRef} style={{ '--reveal-delay': '40ms' }}>
            <div className="top-section">
                <h5>What Skills I Have</h5>
                <h2>Technical Skills</h2>
            </div>

            <div className="container skills__container">
                {skillsData.map(({ id, name, img }) => (
                    <div key={id} className="skill-card surface-card hover-lift">
                        <img src={img} alt={name} className="skill-image" />
                        <h3 className="skill-name">{name}</h3>
                    </div>
                ))}
            </div>

        </section>
    )
}
