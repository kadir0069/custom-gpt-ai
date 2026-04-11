import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ShortImage from '../assets/image/avater.svg';
import CardPhoto1 from '../assets/image/84036803_0310_80 1.png';
import CardPhoto2 from '../assets/image/84036803_0310_80 2.png';
import CardPhoto3 from '../assets/image/chooseus-1.svg';
import '../assets/style/TestimonialSection.css';

gsap.registerPlugin(ScrollTrigger);

const baseTestimonials = [
    {
        quote: "CustomGPT.ai has continually impressed us. Our own assessor loves it and frequently comments on how it provides the right answers. It's a very valuable tool that people need to understand and utilize.",
        name: "Loran Scour",
        role: "CEO - Pixels",
        type: "highlight",
        avatar: ShortImage,
        background: "linear-gradient(135deg, rgba(50,109,228,1) 0%, rgba(74,126,240,1) 50%, rgba(98,143,253,1) 100%)"
    },
    {
        quote: "This tool has completely changed how we handle customer support. Highly recommended!",
        name: "Doug Williams",
        role: "Product Lead",
        image: CardPhoto1,
        avatar: CardPhoto1,
        type: "image"
    },
    {
        quote: "We were looking for an AI solution that was easy to deploy. CustomGPT.ai nailed it.",
        name: "Ken Scott",
        role: "Marketing at xylo",
        image: CardPhoto2,
        avatar: CardPhoto2,
        type: "image"
    },
    {
        quote: "The API integrations are seamless. It's been a massive time-saver for our team.",
        name: "George Dlubal",
        role: "CEO at Global Software",
        image: CardPhoto3,
        avatar: CardPhoto3,
        type: "image"
    },
    {
        quote: "Excellent platform for managing AI workflows. Truly innovative!",
        name: "Sarah Johnson",
        role: "Tech Director",
        image: CardPhoto1,
        avatar: CardPhoto1,
        type: "image"
    },
    {
        quote: "Great customer support and easy integration. Highly satisfied!",
        name: "Michael Chen",
        role: "CTO at TechCorp",
        image: CardPhoto2,
        avatar: CardPhoto2,
        type: "image"
    },
    {
        quote: "Best investment we made this year. Fantastic results!",
        name: "Emma Davis",
        role: "Product Manager",
        image: CardPhoto3,
        avatar: CardPhoto3,
        type: "image"
    },
    {
        quote: "Outstanding results with minimal setup required.",
        name: "James Wilson",
        role: "VP of Engineering",
        image: CardPhoto1,
        avatar: CardPhoto1,
        type: "image"
    },
    {
        quote: "The most comprehensive AI tool we have seen.",
        name: "Lisa Anderson",
        role: "Director of AI",
        image: CardPhoto2,
        avatar: CardPhoto2,
        type: "image"
    },
    {
        quote: "Perfect solution for enterprise needs.",
        name: "Robert Martinez",
        role: "Operations Manager",
        image: CardPhoto3,
        avatar: CardPhoto3,
        type: "image"
    },
    {
        quote: "Incredible value and exceptional support team.",
        name: "Jennifer Lee",
        role: "Founder & CEO",
        image: CardPhoto1,
        avatar: CardPhoto1,
        type: "image"
    },
    {
        quote: "Transformed our entire workflow in weeks.",
        name: "David Brown",
        role: "Tech Lead",
        image: CardPhoto2,
        avatar: CardPhoto2,
        type: "image"
    },
    {
        quote: "Best decision we made for productivity.",
        name: "Amanda White",
        role: "Project Manager",
        image: CardPhoto3,
        avatar: CardPhoto3,
        type: "image"
    },
    {
        quote: "Exceeded all our expectations.",
        name: "Christopher Green",
        role: "Business Analyst",
        image: CardPhoto1,
        avatar: CardPhoto1,
        type: "image"
    },
    {
        quote: "Truly game-changing technology.",
        name: "Nicole Taylor",
        role: "Consultant",
        image: CardPhoto2,
        avatar: CardPhoto2,
        type: "image"
    },
];


const testimonials = [...baseTestimonials, ...baseTestimonials];

const TestimonialSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [progressFill, setProgressFill] = useState(0);

    const handleSlideChange = (e) => {
        const activeIndex = e.activeIndex;
        setActiveSlideIndex(activeIndex);
        const displayIndex = (activeIndex % baseTestimonials.length) + 1;
        setCurrentIndex(displayIndex);
        const progress = (displayIndex / baseTestimonials.length) * 100;
        setProgressFill(progress);
        

        gsap.to('.testimonial-progress-fill', {
            width: `${progress}%`,
            duration: 0.5,
            ease: 'ease-in-out'
        });
    };

    useEffect(() => {
        const context = gsap.context(() => {

            gsap.from(headerRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: false,
                    markers: false
                }
            });

            gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: false,
                        markers: false
                    },
                    delay: index * 0.15
                });
            });

            gsap.from(footerRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: false,
                    markers: false
                }
            });

            gsap.utils.toArray('.testimonial-nav-btn').forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    gsap.to(btn, {
                        scale: 1.1,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });

                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {
                        scale: 1,
                        backgroundColor: 'transparent',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            });
        }, sectionRef);

        return () => {
            context.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="testimonial-section" ref={sectionRef}>
            <div className="testimonial-container">

                {/* Header */}
                <div className="testimonial-header" ref={headerRef}>
                    <h2 className="testimonial-title !text-left sm:text-center!">
                        See what our customers are saying <br />
                        <span className="testimonial-title-gray">about Custom GPTs</span>
                    </h2>
                </div>

                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    slidesPerView={2}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    speed={600}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={{
                        prevEl: '.testimonial-nav-btn.left',
                        nextEl: '.testimonial-nav-btn.right',
                    }}
                    onSlideChange={handleSlideChange}
                    className="testimonial-grid"
                >
                    {testimonials.map((item, index) => {
                        const isActive = index === activeSlideIndex;
                        return (
                        <SwiperSlide key={index} className={`testimonial-card ${isActive ? 'testimonial-card--active' : 'testimonial-card--inactive'}`}>
                            {isActive ? (

                                <div className="testimonial-highlight w-full" style={{ background: "linear-gradient(135deg, rgba(50,109,228,1) 0%, rgba(74,126,240,1) 50%, rgba(98,143,253,1) 100%)" }}>
                                    <div>
                                        <span className="testimonial-quote-mark">"</span>
                                        <p className="testimonial-highlight-text">{item.quote}</p>
                                    </div>
                                    <div className="testimonial-author">
                                        <img src={item.avatar} alt={item.name} className="testimonial-avatar testimonial-avatar--white" />
                                        <div>
                                            <h5 className="testimonial-name">{item.name}</h5>
                                            <p className="testimonial-role testimonial-role--light">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (

                                <div className="testimonial-back" style={{ backgroundImage: `url(${item.image || CardPhoto1})` }}>
                                    <div className="testimonial-back-overlay" />
                                    <div className="testimonial-back-content">
                                        <div className="testimonial-author testimonial-author--image-card">
                                            <img src={item.avatar} alt={item.name} className="testimonial-avatar testimonial-avatar--small" />
                                            <div>
                                                <h5 className="testimonial-name testimonial-name--light">{item.name}</h5>
                                                <p className="testimonial-role testimonial-role--image-card">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="testimonial-footer" ref={footerRef}>
                    <div className="testimonial-progress">
                        <div className="testimonial-progress-fill" style={{ width: `${progressFill}%` }} />
                    </div>
                    <div className="testimonial-nav">
                        <button className="testimonial-nav-btn left">←</button>
                        <span className="testimonial-nav-count">{currentIndex} / {baseTestimonials.length}</span>
                        <button className="testimonial-nav-btn right">→</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;