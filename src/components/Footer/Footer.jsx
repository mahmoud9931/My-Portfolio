import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import useReveal from '../../hooks/useReveal';

export default function Footer() {
  const footerRef = useReveal();

  return (
    <footer className='reveal' ref={footerRef}>
      <a href="#home" className='footer_logo'>Mahmoud Mohamed</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

        <div className='footer_socials'>
            <a href="https://www.linkedin.com/in/mahmoudmohamed43/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
            <a href="https://github.com/mahmoud9931" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub /></a>
            <a href="https://www.facebook.com/mahmoud.mohamed.810956?locale=ar_AR" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile"><FaFacebook /></a>
        </div>

      <div className="footer_copyright">
        <small>&copy; <a href="#home">Mahmoud Mohamed</a> All rights reserved.</small>
      </div>
    </footer>
  )
}
