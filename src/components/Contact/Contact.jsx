import React, { useRef, useState } from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import useReveal from '../../hooks/useReveal';



export default function Contact() {
    const form = useRef();
    const sectionRef = useReveal();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [feedback, setFeedback] = useState('');

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const isFormValid = () => {
        const hasName = formState.name.trim().length > 1;
        const hasMessage = formState.message.trim().length >= 10;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const hasValidEmail = emailPattern.test(formState.email.trim());

        return hasName && hasMessage && hasValidEmail;
    };

    const resetForm = () => {
        setFormState({ name: '', email: '', message: '' });
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            setStatus('error');
            setFeedback('Please provide a valid name, email, and message (at least 10 characters).');
            return;
        }

        setStatus('loading');
        setFeedback('Sending your message...');

        try {
            await emailjs.sendForm('service_bmwttg6', 'template_ngfjo4o', form.current, 'PJow32KUi5I4KPGOz');
            setStatus('success');
            setFeedback('Thanks! Your message has been sent successfully.');
            resetForm();
        } catch {
            setStatus('error');
            setFeedback('Something went wrong while sending. Please try again.');
        }
    };
    const ContactData = [
        {
            id: 1,
            icon: <MdOutlineEmail />,
            title: "Email",
            info: "mahmoud16601770@gmail.com",
            link: "mailto:mahmoud16601770@gmail.com",
        },
        {
            id: 2,
            icon: <BsWhatsapp />,
            title: "WhatsApp",
            info: "01098461014",
            link: "https://wa.me/201098491014",
        }
    ]

    return (
        <section className='contact reveal reveal--from-right' id='contact' ref={sectionRef} style={{ '--reveal-delay': '110ms' }}>
            <div className="top-section">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>
            <div className="container contact_container">
                <div className="contact_options">
                    {ContactData.map(({ id, icon, title, info, link }) => (
                        <article key={id} className='contact_option surface-card hover-lift'>
                            {icon}
                            <h4>{title}</h4>
                            <h5>{info}</h5>
                            <a href={link} target="_blank" rel="noopener noreferrer">Send a message</a>
                        </article>
                    ))}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder='Full Name' name='name' value={formState.name} onChange={onInputChange} required />
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder='Your Email' name='email' value={formState.email} onChange={onInputChange} required />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id='message' rows={6} placeholder='Enter Your Message' value={formState.message} onChange={onInputChange} required></textarea>
                    <button className='btn btn-primary' type='submit' disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                    {feedback && (
                        <p className={`form_feedback ${status === 'error' ? 'is-error' : status === 'success' ? 'is-success' : ''}`}>
                            {feedback}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )

}
