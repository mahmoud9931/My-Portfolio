import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function SocialIcons() {
    return (
        <div className='home_social'>
            <a href="https://www.linkedin.com/in/mahmoudmohamed43/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
            <a href="https://github.com/mahmoud9931" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub /></a>
            <a href="https://www.facebook.com/mahmoud.mohamed.810956?locale=ar_AR" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile"><FaFacebook /></a>
        </div>
    )
}
