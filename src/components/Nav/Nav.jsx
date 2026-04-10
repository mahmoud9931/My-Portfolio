import React from 'react'
import './Nav.css'
import { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbBrandStackoverflow } from "react-icons/tb";




export default function Nav() {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveNav(`#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <a className={activeNav === '#home' ? "active" : ""} href="#home" onClick={() => { setActiveNav("#home") }} aria-label="Go to home section"><IoHomeOutline /></a>
      <a href="#about" className={activeNav === '#about' ? "active" : ""} onClick={() => { setActiveNav("#about") }} aria-label="Go to about section"><LuUserRound /></a>
      <a href="#skills" className={activeNav === '#skills' ? "active" : ""} onClick={() => { setActiveNav("#skills") }} aria-label="Go to skills section"><TbBrandStackoverflow /></a>
      <a href="#services" className={activeNav === '#services' ? "active" : ""} onClick={() => { setActiveNav("#services") }} aria-label="Go to services section"><BiBook /></a>
      <a href="#projects" className={activeNav === '#projects' ? "active" : ""} onClick={() => { setActiveNav("#projects") }} aria-label="Go to projects section"><RiServiceLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? "active" : ""} onClick={() => { setActiveNav("#contact") }} aria-label="Go to contact section"><BiMessageSquareDetail /></a>
    </nav>
  )
}
