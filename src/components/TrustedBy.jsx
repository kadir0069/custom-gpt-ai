import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Clints1 from '../assets/image/Clints-1.svg';
import Clints2 from '../assets/image/Clints-2.svg';
import Clints3 from '../assets/image/Clints-3.svg';
import Clints4 from '../assets/image/Clints-4.svg';
import Clints5 from '../assets/image/Clints-5.svg';
import Clints6 from '../assets/image/Clints-6.svg';
import '../assets/style/TrustedBy.css';

gsap.registerPlugin(ScrollTrigger);

const TrustedBy = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const sliderRef = useRef(null);
    const sliderContentRef = useRef(null);

    const logos = [
        { name: 'Logo 1', src: Clints1 },
        { name: 'Logo 2', src: Clints2 },
        { name: 'Logo 3', src: Clints3 },
        { name: 'Logo 4', src: Clints4 },
        { name: 'Logo 5', src: Clints5 },
        { name: 'Logo 6', src: Clints6 },
    ];

    const duplicatedLogos = [...logos, ...logos, ...logos];

    useEffect(() => {
        const context = gsap.context(() => {
            const titleText = titleRef.current;
            if (titleText) {
                const chars = titleText.textContent.split('');
                titleText.innerHTML = chars
                    .map(char => `<span class="char">${char}</span>`)
                    .join('');

                gsap.from('.trusted-by-title .char', {
                    opacity: 0,
                    y: 5,
                    rotationX: -90,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        end: 'top 25%',
                        scrub: false,
                        markers: false
                    }
                });
            }

            // Slider Entrance
            gsap.from(sliderRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    end: 'top 25%',
                    scrub: false,
                },
                delay: 0.3
            });

            const slider = sliderContentRef.current;
            if (slider) {
                gsap.to(slider, {
                    x: -slider.offsetWidth / 3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 3,
                    }
                });

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    onUpdate: (self) => {
                        const scale = 1 + self.getVelocity() / 300;
                        gsap.to(slider, {
                            scale: Math.max(1, Math.min(scale, 1.1)),
                            overwrite: 'auto',
                            duration: 0.4
                        });
                    }
                });
            }

            // Logo Hover Effects
            gsap.utils.toArray('.logo-item').forEach((item) => {
                const img = item.querySelector('.logo-image');
                gsap.set(img, {
                    filter: "grayscale(0%)",
                    opacity: 1
                });

                item.addEventListener('mouseenter', () => {
                    gsap.to(img, {
                        scale: 1.2,
                        duration: 0.3,
                        ease: 'elastic.out(1, 0.5)'
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(img, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            });

            // Morphing divider
            gsap.utils.toArray('.logo-divider').forEach((divider) => {
                gsap.from(divider, {
                    scaleX: 0,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        end: 'top 25%',
                        scrub: false,
                    }
                });
            });

            // Background Gradient Animation
            gsap.to(sectionRef.current, {
                backgroundPosition: '200% center',
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, sectionRef);

        return () => context.revert(); 
    }, []);
    return (
        <section className="trusted-by-section" ref={sectionRef}>
            <div className="trusted-by-container container mx-auto overflow-hidden">
                <p
                    className="trusted-by-title pb-[16px] sm:pb-[20px] md:pb-[24px] lg:pb-[32px] xl:pb-[36px] 2xl:pb-[40px]"
                    ref={titleRef}
                >
                    TRUSTED BY 10,000+ ORGANIZATIONS WORLDWIDE
                </p>
                <div className="logo-slider-container" ref={sliderRef}>
                    <div className="logo-slider-fade-left" />
                    <div className="logo-slider-fade-right" />
                    <div
                        className="logo-slider-content"
                        ref={sliderContentRef}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="logo-item"
                            >
                                {logo.src ? (
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="logo-image"
                                    />
                                ) : (
                                    <span className="logo-fallback">{logo.name}</span>
                                )}

                                <div className="logo-divider" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;