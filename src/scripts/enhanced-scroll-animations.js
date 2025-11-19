// Enhanced scroll animations and parallax effects
document.addEventListener('DOMContentLoaded', () => {
  
  // CSS for enhanced animations
  const style = document.createElement('style');
  style.textContent = `
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }

    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .service-card.animate-on-scroll {
      transform: translateY(40px) scale(0.95);
    }

    .service-card.animate-in {
      transform: translateY(0) scale(1);
    }

    .tech-item.animate-on-scroll {
      transform: translateY(30px);
    }

    .tech-item.animate-in {
      transform: translateY(0);
    }

    .section-title {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    .about-content.animate-on-scroll {
      transform: translateY(40px);
    }

    .about-content.animate-in {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .animate-on-scroll {
        transform: translateY(20px);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Simple Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('service-card')) {
          const delay = Array.from(element.parentNode.children).indexOf(element) * 100;
          setTimeout(() => {
            element.classList.add('animate-in');
          }, delay);
        } else {
          element.classList.add('animate-in');
        }
      }
    });
  }, observerOptions);

  // Light parallax only for hero image (desktop only)
  if (window.innerWidth > 768) {
    const profileImg = document.querySelector('.profile-img');
    
    if (profileImg) {
      let ticking = false;
      
      function updateParallax() {
        const scrollTop = window.pageYOffset;
        const yPos = scrollTop * 0.3;
        profileImg.style.transform = `translateY(${yPos}px)`;
        ticking = false;
      }

      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }

      window.addEventListener('scroll', requestTick, { passive: true });
    }
  }

  // Observe elements for scroll animations
  const elementsToAnimate = document.querySelectorAll(`
    .service-card, 
    .tech-item, 
    .about-content,
    .hero-subtitle,
    .hero-description,
    .social-link
  `);
  
  elementsToAnimate.forEach(el => {
    el.classList.add('animate-on-scroll');
    scrollObserver.observe(el);
  });
});
