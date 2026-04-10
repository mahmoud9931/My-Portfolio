import React from 'react'
import './Services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import useReveal from '../../hooks/useReveal';


export default function Services() {
  const sectionRef = useReveal();

  return (
    <section id='services' className='reveal' ref={sectionRef}>
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container container_services">
        <article className="card surface-card hover-lift">
          <MdDesignServices className='icon' />
          <h3>Frontend Web Development</h3>
          <p>
            Building clean, scalable interfaces using React, JavaScript, and reusable component architecture.
          </p>
        </article>
        <article className="card surface-card hover-lift">
          <IoIosRocket className='icon' />
          <h3>Performance Optimization</h3>
          <p>
            Improving loading speed, render efficiency, and interaction smoothness for better user retention.
          </p>
        </article>
        <article className="card surface-card hover-lift">
          <FaCode className='icon' />
          <h3>Responsive Design
          </h3>
          <p>
            Creating mobile-first layouts that stay polished and usable across phones, tablets, and desktops.
          </p>
        </article>
      </div>
    </section>
  )
}
