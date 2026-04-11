import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroImage from '../assets/image/background 1.svg';
import IntegrationDisplay from '../assets/image/Hero-Image.svg';
import Cardicon1 from '../assets/image/Card-icon-1.svg';
import Cardicon2 from '../assets/image/Card-icon-2.svg';

const HeroSection = () => {
    const heroRef = useRef(null);
    const labelRef = useRef(null);
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const badgesRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(labelRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            })
            .from(headingRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.3')
            .from(descRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')
            .from(badgesRef.current?.querySelectorAll('.hero__badge'), {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.15,
                ease: 'power2.out'
            }, '-=0.3')
            .from(buttonsRef.current?.querySelectorAll('button'), {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.3')
            .from(imageRef.current, {
                opacity: 0,
                scale: 0.9,
                y: 40,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.5');
            gsap.utils.toArray('.hero__buttons button').forEach(button => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                });
                button.addEventListener('mouseleave', () => {
                    gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' });
                });
            });
        }, heroRef);

        return () => context.revert();
    }, []);

    return (
        <div className="hero overflow-y-hidden" ref={heroRef}>
            <div className="hero__bg">
                <img src={HeroImage} alt="Background" className="hero__bg-image" />
                <div className="hero__fade" />
            </div>
            <div className="hero__container">
                <span className="hero__label" ref={labelRef}>
                    #1 AI AGENT FOR BUSINESSES
                </span>
                <h1 className="hero__heading" ref={headingRef}>
                    Create <span className="hero__heading--thin">CustomGPTs</span> from your <br className="hero__br" />
                    <span>business information</span>
                </h1>
                <p className="hero__description" ref={descRef}>
                    Launch in minutes with 100+ data sources and deployment options
                </p>
                <div className="hero__badges hero__anim hero__anim--4" ref={badgesRef}>
                    <div className="hero__badge">
                        <img src={Cardicon1} alt="Accuracy" className="hero__badge-icon" />
                        Industry-leading accuracy
                    </div>
                    <div className="hero__badge">
                        <img src={Cardicon2} alt="Security" className="hero__badge-icon" />
                        Zero data sharing & training
                    </div>
                </div>
                <div className="hero__buttons" ref={buttonsRef}>
                    <button className="btnprimary">Sign up free</button>
                    <button className="btnglass">Chat with the AI</button>
                </div>
                <div className="hero__image-wrap " ref={imageRef}>
                    <img
                        src={IntegrationDisplay}
                        alt="Integration Tools"
                        className="hero__image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;