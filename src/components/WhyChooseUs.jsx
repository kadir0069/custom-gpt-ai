import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SecurityImg from '../assets/image/chooseus-1.svg';
import TrustImg from '../assets/image/chooseus-2.svg';
import icon1 from '../assets/image/Frame.svg';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.header-title-primary, .header-title-secondary', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.card-security, .card-trust', {
                opacity: 0,
                y: 40,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.security-list-item, .trust-list-item', {
                opacity: 0,
                y: 15,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.2,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 75%',
                },
            });
            gsap.from('.card-security-button, .card-trust-button', {
                opacity: 0,
                y: 15,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.3,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 75%',
                },
            });

        }, sectionRef);

        return () => {
            context.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="why-choose-section" ref={sectionRef}>
            <div className="why-choose-container">
                <div className="why-choose-header" ref={headerRef}>
                    <div className="header-left">
                        <h2 className="header-title-primary">Why startup choose</h2>
                        <h3 className="header-title-secondary">CustomGPT.ai</h3>
                    </div>
                    {/* Paragraph */}
                    <p className="header-description text-center mt-4 lg:mt-0">
                        Built for organizations. AI that's easy, secure, and <br className='hidden lg:block' /> represents us like a star team member.
                    </p>
                </div>

                <div className="cards-grid" ref={cardsRef}>
                    {/* Security Card */}
                    <div className="card-security">
                        <img src={SecurityImg} alt="Security" className="card-security-bg" />
                        <div className="card-security-overlay" />

                        <div className="card-security-content">
                            <h4 className="card-security-title mb-6">Enterprise-grade data security</h4>
                            <ul className="security-list">
                                <li className="security-list-item">
                                    <img src={icon1} alt="" className="security-list-icon" />
                                    <span>
                                        <strong className="security-list-strong">Full data protection:</strong>{' '}
                                        <br className="hidden sm:block" /> No training or sharing your data
                                    </span>
                                </li>
                                <li className="security-list-item">
                                    <img src={icon1} alt="" className="security-list-icon" />
                                    <span>
                                        <strong className="security-list-strong">Enterprise security:</strong>{' '}
                                        <br className="hidden sm:block" /> SOC-2 type II, GDPR, full encryption
                                    </span>
                                </li>
                            </ul> 
                            {/* Button */}
                            <div className="mt-[24px]">
                                <button className="card-security-button">Explore trust center</button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Card */}
                    <div className="card-trust">
                        <div className="card-trust-content">
                            <h4 className="card-trust-title mb-4">Answers you trust</h4>
                            <ul className="trust-list">
                                <li className="trust-list-item">
                                    <img src={icon1} alt="" className="trust-list-icon" />
                                    <span>
                                        <strong className="trust-list-strong">Anti-hallucination:</strong>{' '}
                                        Third-party verified #1 technology, beating out major players.
                                    </span>
                                </li>
                                <li className="trust-list-item">
                                    <img src={icon1} alt="" className="trust-list-icon" />
                                    <span>
                                        <strong className="trust-list-strong">Source Links:</strong>{' '}
                                        Every response has a link directly to its source.
                                    </span>
                                </li>
                            </ul>
                            <button className="card-trust-button">Benchmark Announcement</button>
                        </div>

                        {/* মোবাইলে ইমেজ পজিশন ফিক্সড করার জন্য wrapper */}
                        <div className="card-trust-image-wrapper">
                            <img src={TrustImg} alt="Trust" className="card-trust-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;