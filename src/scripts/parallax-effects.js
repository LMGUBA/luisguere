import SimpleParallax from 'simple-parallax-js';

document.addEventListener('DOMContentLoaded', () => {
  // Only apply parallax on desktop for better performance
  if (window.innerWidth > 768) {
    
    // Hero image parallax - más prominente
    const heroImage = document.querySelector('.profile-img');
    if (heroImage) {
      new SimpleParallax(heroImage, {
        delay: 0.8,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.3,
        overflow: true
      });
    }

    // Hero title parallax
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      new SimpleParallax(heroTitle, {
        delay: 0.3,
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scale: 1.05
      });
    }

    // Service cards parallax con delays escalonados
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      new SimpleParallax(card, {
        delay: 0.4 + (index * 0.1),
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scale: 1.08
      });
    });

    // Tech items parallax con efecto más sutil
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
      new SimpleParallax(item, {
        delay: 0.2 + (index * 0.03),
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scale: 1.04
      });
    });

    // About section content parallax
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
      new SimpleParallax(aboutContent, {
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.05
      });
    }

    // Contact form y social links parallax
    const contactForm = document.querySelector('.contact-form');
    const socialLinks = document.querySelector('.social-links');
    
    if (contactForm) {
      new SimpleParallax(contactForm, {
        delay: 0.5,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.06
      });
    }

    if (socialLinks) {
      new SimpleParallax(socialLinks, {
        delay: 0.7,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.04
      });
    }

    // Section titles con parallax sutil
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
      new SimpleParallax(title, {
        delay: 0.15 + (index * 0.05),
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scale: 1.02
      });
    });

    // Tech icons parallax individual
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
      new SimpleParallax(icon, {
        delay: 0.1 + (index * 0.02),
        transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scale: 1.1
      });
    });
  }
});
