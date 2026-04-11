import React from 'react'
import './Nav.css'
import { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbBrandStackoverflow } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";




export default function Nav() {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'education', 'courses', 'skills', 'soft-skills', 'services', 'projects', 'contact'];
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
      <a href="#education" className={activeNav === '#education' ? "active" : ""} onClick={() => { setActiveNav("#education") }} aria-label="Go to university education section"><FaGraduationCap /></a>
      <a href="#courses" className={activeNav === '#courses' ? "active" : ""} onClick={() => { setActiveNav("#courses") }} aria-label="Go to courses section"><TbCertificate /></a>
      <a href="#skills" className={activeNav === '#skills' ? "active" : ""} onClick={() => { setActiveNav("#skills") }} aria-label="Go to technical skills section"><TbBrandStackoverflow /></a>
      <a href="#soft-skills" className={activeNav === '#soft-skills' ? "active" : ""} onClick={() => { setActiveNav("#soft-skills") }} aria-label="Go to soft skills section"><IoSparklesOutline /></a>
      <a href="#services" className={activeNav === '#services' ? "active" : ""} onClick={() => { setActiveNav("#services") }} aria-label="Go to services section"><BiBook /></a>
      <a href="#projects" className={activeNav === '#projects' ? "active" : ""} onClick={() => { setActiveNav("#projects") }} aria-label="Go to projects section"><RiServiceLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? "active" : ""} onClick={() => { setActiveNav("#contact") }} aria-label="Go to contact section"><BiMessageSquareDetail /></a>
    </nav>
  )
}
