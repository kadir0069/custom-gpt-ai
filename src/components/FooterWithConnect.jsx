import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LeftImage from '../assets/image/media.svg';
import FooterImage from '../assets/image/footer-logo.svg';
import FooterIcon1 from '../assets/image/footer-icon-1.svg';
import FooterIcon2 from '../assets/image/footer-icon-2.svg';
import FooterIcon3 from '../assets/image/footer-icon-3.svg';
import FooterIcon4 from '../assets/image/footer-icon-4.svg';
import Xicon from '../assets/image/x-icon.svg';
import InstaGram from '../assets/image/insta-icon.svg';
import DisCord from '../assets/image/discord-icon.svg';
import GitHub from '../assets/image/github-icon.svg';

gsap.registerPlugin(ScrollTrigger);

const footerColumns = [
    {
        title: 'Product',
        links: ['Customer Intelligence', 'Custom Deep Research', 'Enterprise'],
    },
    {
        title: 'Use cases',
        links: ['Onboarding & Training', 'Engagement Analytics', 'Competitive Analysis', 'Customer Service'],
    },
    {
        title: 'Company',
        links: ['About Us', 'Testimonials', 'Partner Directory', 'Solution Partner Program', 'Contact Us'],
    },
    {
        title: 'Resources',
        links: ['Blog', 'FAQs', 'Case Studies', 'Security & Trust', 'Documentation'],
    },
    {
        title: 'Dev Resources',
        links: ['RAG API', 'SDK', 'OpenAI Compatibility', 'MCP Server', 'Dev StarterKit', 'Integrations', 'How it works'],
    },
];

const FooterWithConnect = () => {
    const wrapperRef = useRef(null);
    const connectRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.from('.connect-heading', {
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: connectRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.connect-description', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.15,
                scrollTrigger: {
                    trigger: connectRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.connect-buttons .btn', {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.25,
                scrollTrigger: {
                    trigger: connectRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.connect-image', {
                opacity: 0,
                y: 20,
                duration: 0.7,
                ease: 'power2.out',
                delay: 0.1,
                scrollTrigger: {
                    trigger: connectRef.current,
                    start: 'top 80%',
                },
            });
            gsap.utils.toArray('.btn').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    gsap.to(btn, { scale: 1.05, duration: 0.25, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { scale: 1, duration: 0.25, ease: 'power2.out' });
                });
            });
            gsap.from('.footer-brand', {
                opacity: 0,
                y: 25,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 85%',
                },
            });
            gsap.from('.footer-col', {
                opacity: 0,
                y: 25,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 85%',
                },
            });
            gsap.utils.toArray('.footer-col__link').forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, { color: '#4f46e5', duration: 0.2 });
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, { color: 'inherit', duration: 0.2 });
                });
            });
            gsap.utils.toArray('.footer-social-icon').forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    gsap.to(icon, { y: -4, duration: 0.25, ease: 'power2.out' });
                });
                icon.addEventListener('mouseleave', () => {
                    gsap.to(icon, { y: 0, duration: 0.25, ease: 'power2.out' });
                });
            });

        }, wrapperRef);

        return () => {
            context.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="footer-wrapper" ref={wrapperRef}>
            <section className="connect-section" ref={connectRef}>
                <div className="connect-inner container mx-auto">

                    <div className="connect-content">
                        <div className="connect-grid">
                            <div className="connect-text">
                                <h1 className="connect-heading">
                                    Connect AI to your <br />
                                    <span className="connect-heading--muted">business knowledge today</span>
                                </h1>
                                <p className="connect-description">
                                    Build, test, and deploy custom GPT AI agents that answer with accuracy.
                                    Drive revenue, save time, delight customers.
                                </p>

                                <div className="connect-buttons">
                                    <button className="btn btn--primary">Try free for 7 days</button>
                                    <button className="btn btn--secondary">Talk to sales</button>
                                </div>
                            </div>
                            <div className="connect-image-wrap">
                                <img
                                    src={LeftImage}
                                    alt="Central Business Knowledge"
                                    className="connect-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section" ref={footerRef}>
                <div className="footer-inner container mx-auto">

                    <div className="footer-content">
                        <div className="footer-grid  flex items-start justify-between gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[66px]">
                            <div className="footer-brand">
                                <img src={FooterImage} alt="Footer Logo" className="footer-logo" />
                                <div className="footer-badges">
                                    <img src={FooterIcon1} alt="" />
                                    <img src={FooterIcon2} alt="" />
                                    <img src={FooterIcon3} alt="" />
                                    <img src={FooterIcon4} alt="" />
                                </div>
                                <p className="footer-compliance">
                                    <span className="footer-compliance--highlight">GDPR & SOC2</span>
                                    {' '}<span className="footer-compliance--label">Compliant</span>
                                </p>
                                <div className="footer-socials">
                                    <span className="footer-social-icon"><img src={Xicon} alt="X" /></span>
                                    <span className="footer-social-icon"><img src={InstaGram} alt="Instagram" /></span>
                                    <span className="footer-social-icon"><img src={DisCord} alt="Discord" /></span>
                                    <span className="footer-social-icon"><img src={GitHub} alt="GitHub" /></span>
                                </div>
                            </div>
                            {footerColumns.map((col) => (
                                <div key={col.title} className="footer-col flex items-start justify-between flex-col gap-[12px]">
                                    <h4 className="footer-col__title">{col.title}</h4>
                                    {col.links.map((link) => (
                                        <a key={link} href="#" className="footer-col__link">{link}</a>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="footer-bottom">
                            <p className="footer-copyright">
                                © Copyright 2026 – CustomGPT.ai – All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterWithConnect;