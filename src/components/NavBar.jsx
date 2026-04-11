import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navlogo from '../assets/image/Main.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray('.navbar__link').forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            color: '#4f46e5',
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            color: 'inherit',
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
      gsap.utils.toArray('.navbar__cta').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }, navRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(mobileMenuRef.current, 
        {
          opacity: 0,
          y: -20,
          pointerEvents: 'none'
        },
        {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          duration: 0.4,
          ease: 'power2.out'
        }
      );
      gsap.from('.navbar__mobile-link, .navbar__mobile-cta', {
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out'
      });
    } else if (!isOpen && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Navlogo} alt="DevEasy Logo" />
        </div>

        <div className="navbar__links">
          <a href="#" className="navbar__link">Product</a>
          <a href="#" className="navbar__link">Solutions</a>
          <a href="#" className="navbar__link">Pricing</a>
          <a href="#" className="navbar__link">Customers</a>
        </div>

        <div className="navbar__actions">
          <button className="navbar__cta">Try for free</button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar__toggle"
            aria-label="Toggle menu"
          >
            <svg className="navbar__toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="navbar__mobile-menu" ref={mobileMenuRef}>
          <a href="#" className="navbar__mobile-link">Product</a>
          <a href="#" className="navbar__mobile-link">Solutions</a>
          <a href="#" className="navbar__mobile-link">Pricing</a>
          <a href="#" className="navbar__mobile-link">Customers</a>
          <button className="navbar__mobile-cta">Try for free</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;