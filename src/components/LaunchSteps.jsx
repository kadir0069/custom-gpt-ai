import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BgImage1 from '../assets/image/lunch-bg.png';
import DashboardIcon from '../assets/image/dashboard-icon.svg';
import AgentsIcon from '../assets/image/agents-icon.svg';
import ResourcesIcon from '../assets/image/resources-icon.svg';
import SlackIcon from '../assets/image/slack-icon.svg';
import LogoIcon from '../assets/image/Logo-Black.svg';

gsap.registerPlugin(ScrollTrigger);

const streamlinedSteps = [
    { 
        title: 'Connect data', 
        id: 'connect', 
        bg: `url(${BgImage1})`,
        img: BgImage1,
        style: {
            position: 'absolute',
            left: '0',
            top: '0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    },
    { 
        title: 'Customize', 
        id: 'customize', 
        bg: 'linear-gradient(to right, #f5d5c8, #f9c5d5)',
        img: null,
        style: {
            position: 'absolute',
            left: '0',
            top: '0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    },
    { 
        title: 'Deploy', 
        id: 'deploy', 
        bg: 'linear-gradient(to right, #e0d5ff, #f0e5ff)',
        img: null,
        style: {
            position: 'absolute',
            left: '0',
            top: '0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    },
];

const LaunchSteps = () => {
    const [activeTab, setActiveTab] = useState(streamlinedSteps[0]);

    const launchCardRef = useRef(null);
    const bgRef         = useRef(null);
    const contentRef    = useRef(null);
    const sectionRef    = useRef(null);
    const isMobile      = useRef(false);

    const localIntegrations = [
        { name: 'Dashboard',       icon: DashboardIcon },
        { name: 'Agents',          icon: AgentsIcon    },
        { name: 'Resources',       icon: ResourcesIcon },
        { name: 'Slack Community', icon: SlackIcon     },
    ];
    const handleTabChange = (step) => {
        if (step.id === activeTab.id) return;

        gsap.to(bgRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.inOut',
            onComplete: () => {
                setActiveTab(step);
                gsap.to(bgRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.inOut'
                });
            }
        });

        gsap.to(contentRef.current, {
            y: 10,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(contentRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.inOut'
                });
            }
        });
        gsap.to(launchCardRef.current, {
            rotateY: isMobile.current ? 2 : 4,
            scale: 0.98,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                gsap.to(launchCardRef.current, {
                    rotateY: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.5)'
                });
            }
        });
    };
    useEffect(() => {
        isMobile.current = window.innerWidth < 768;
        const onResize = () => { isMobile.current = window.innerWidth < 768; };
        window.addEventListener('resize', onResize);

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.launch-section',
                    start: 'top 78%',
                    toggleActions: 'play none none reverse',
                }
            });

            tl.from('.launch-header', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            })
            .from('.launch-tabs', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3')
            .from('.launch-card', {
                opacity: 0,
                y: 30,
                scale: 0.95,
                rotateX: 8,
                duration: 0.9,
                ease: 'power3.out',
                transformOrigin: 'center top',
                transformPerspective: 1000,
            }, '-=0.4');
            if (!isMobile.current) {
                ScrollTrigger.create({
                    trigger: '.launch-section',
                    start: 'top center',
                    end: 'bottom center',
                    onUpdate: self => {
                        const p = (self.progress - 0.5) * 2;
                        gsap.to(launchCardRef.current, {
                            rotateX: p * -4,
                            ease: 'none',
                            duration: 0.3,
                            transformPerspective: 1200,
                        });
                    }
                });
            }
            gsap.utils.toArray('.launch-tab-btn').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
                });
            });
            const ctaBtn = document.querySelector('.launch-cta-btn');
            if (ctaBtn) {
                ctaBtn.addEventListener('mouseenter', () => {
                    gsap.to(ctaBtn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                });
                ctaBtn.addEventListener('mouseleave', () => {
                    gsap.to(ctaBtn, { scale: 1, duration: 0.3, ease: 'power2.out' });
                });
            }
            const glassBtn = document.querySelector('.btnglass');
            if (glassBtn) {
                glassBtn.addEventListener('mouseenter', () => {
                    gsap.to(glassBtn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                });
                glassBtn.addEventListener('mouseleave', () => {
                    gsap.to(glassBtn, { scale: 1, duration: 0.3, ease: 'power2.out' });
                });
            }

        }, sectionRef);
        const card = launchCardRef.current;

        const onMouseMove = (e) => {
            if (isMobile.current || !card) return;
            const rect = card.getBoundingClientRect();
            const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
            const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
            gsap.to(card, {
                rotateY: dx * 7,
                rotateX: -dy * 4,
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1200,
            });
        };

        const onMouseLeave = () => {
            if (isMobile.current || !card) return;
            gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.6)',
            });
        };

        if (card) {
            card.addEventListener('mousemove', onMouseMove);
            card.addEventListener('mouseleave', onMouseLeave);
        }

        return () => {
            context.revert();
            window.removeEventListener('resize', onResize);
            if (card) {
                card.removeEventListener('mousemove', onMouseMove);
                card.removeEventListener('mouseleave', onMouseLeave);
            }
        };
    }, []);

    return (
        <section
            className="launch-section"
            ref={sectionRef}
            style={{ overflowX: 'hidden' }}
        >
            <div className="container mx-auto px-[16px] sm:px-[40px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[127px]">
                <div className="launch-header">
                    <h2 className="launch-title">
                        Launch in <span className="launch-title-muted">3 streamlined steps</span>
                    </h2>
                    <p className="launch-subtitle mt-[7px] md:mt-[9px] xl:mt-[12px] pb-[10px] sm:pb-[11px] md:pb-[12px] lg:pb-[13px] xl:pb-[14px]">
                        <span>No coding required – No engineering costs</span>
                    </p>
                </div>
                <div className="launch-tabs w-fit mx-auto">
                    {streamlinedSteps.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => handleTabChange(step)}
                            className={`launch-tab-btn ${activeTab.id === step.id ? 'launch-tab-btn--active' : ''}`}
                        >
                            {step.title}
                        </button>
                    ))}
                </div>
                <div
                    className="launch-card"
                    ref={launchCardRef}
                    style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform',
                    }}
                >
                    {activeTab.img && (
                        <img 
                            className='absolute top-0 left-0 w-full h-full object-cover object-center z-20' 
                            src={activeTab.img} 
                            alt={activeTab.title}
                        />
                    )}
                    <div
                        ref={bgRef}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                        style={{
                            ...activeTab.style,
                            background: activeTab.bg,
                            zIndex: activeTab.img ? 10 : 20,
                        }}
                    />
                    <div className="launch-card-content relative z-30" ref={contentRef}>
                        
                        <h4 className="launch-card-title">
                            Connect to all your knowledge <br className="launch-br-md" />
                            with 1-click integrations
                        </h4>
                        <p className="launch-card-desc pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]">
                            Make your information accessible with 1400+ supported <br className='hidden md:block'/> file types and dozens of integrations
                        </p>
                        <div className="launch-panel launch-panel--slide-in">
                            <div className="pb-[12px] sm:pb-[13px] md:pb-[14px] lg:pb-[15px] xl:pb-[16px] 2xl:pb-[20px]">
                                <img className='mx-auto h-[20px] sm:h-[22px] lg:h-[26px]' src={LogoIcon} alt="Logo" />
                            </div>

                            <div className="launch-panel-items">
                                <div className="
                                            absolute inset-0 h-full w-full !rounded-md
                                            bg-[linear-gradient(200deg,transparent_0%,#FFFFFF_0%,#FFFFFF_5%,transparent_100%)]
                                            bg-[length:var(--bg-size)_100%]   
                                                [border-radius:inherit]
                                                [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                                                ![mask-composite:subtract] 
                                                p-[1px]
                                                -z-10
                                            " 
                                            />
                                <div className="launch-new-agent flex items-center justify-center cursor-pointer">
                                    <div
                                            className="
                                            absolute inset-0 h-full w-full 
                                            bg-[linear-gradient(200deg,transparent_0%,#FFFFFF_3%,#FFFFFF_90%,transparent_100%)]
                                            bg-[length:var(--bg-size)_100%]   
                                                [border-radius:inherit]
                                                [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                                                ![mask-composite:subtract] 
                                                p-[1px]
                                                -z-10
                                            " 
                                            />
                                    <span>+ New Agent</span>
                                </div>

                                {localIntegrations.map((item, index) => (
                                    <div key={index} className="launch-integration-item relative">
                                        <div
                                            className="
                                            absolute inset-0 h-full w-full 
                                            bg-[linear-gradient(200deg,transparent_0%,#FFFFFF90_10%,#FFFFFF90_97%,transparent_100%)]
                                            bg-[length:var(--bg-size)_100%]   
                                                [border-radius:inherit]
                                                [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                                                ![mask-composite:subtract] 
                                                p-[1px]
                                                -z-10
                                            " 
                                            />
                                        <div className="launch-integration-icon">
                                            <img src={item.icon} alt={item.name} />
                                        </div>
                                        <span className="launch-integration-name">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="launch-bottom flex items-center justify-center">
                    <button className="btnglass">
                        See all 100+ integrations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LaunchSteps;