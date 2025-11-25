// Safe dynamic effects - no problematic elements
document.addEventListener('DOMContentLoaded', () => {
  // Force scroll to top on page load
  if (window.location.hash === '' || window.location.hash === '#') {
    window.scrollTo(0, 0);
    // Also handle history state
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  // Typewriter effect for hero title
  const typewriterTitle = document.getElementById('typewriter-title');
  if (typewriterTitle) {
    const text = 'Luis Guere';
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;

    function typeWriter() {
      if (!isDeleting) {
        // Typing
        currentText = text.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === text.length) {
          // Pause before deleting
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        // Deleting
        currentText = text.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          // Pause before typing again
          setTimeout(() => {
            typeWriter();
          }, 500);
          return;
        }
      }

      typewriterTitle.textContent = currentText;

      // Add cursor effect
      typewriterTitle.style.borderRight = '3px solid var(--text-primary)';

      // Different speeds for typing and deleting
      const speed = isDeleting ? 100 : 150;
      setTimeout(typeWriter, speed);
    }

    // Start the effect after a short delay
    setTimeout(() => {
      typewriterTitle.textContent = '';
      typeWriter();
    }, 1000);
  }

  // Smooth scroll for navigation
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Simple scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });

  // Observe section titles separately to ensure they're visible
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.classList.add('animate-on-scroll');
    observer.observe(title);
  });

  // Tech items animation
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Service cards animation
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    observer.observe(card);
  });
});

// Add safe CSS animations
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

  .section-title {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .tech-item.animate-on-scroll {
    transform: translateY(20px) scale(0.95);
  }

  .tech-item.animate-in {
    transform: translateY(0) scale(1);
  }

  .service-card.animate-on-scroll {
    transform: translateY(25px);
  }

  .service-card.animate-in {
    transform: translateY(0);
  }

  #typewriter-title {
    border-right: 3px solid transparent;
    animation: blink-cursor 1s infinite;
  }

  @keyframes blink-cursor {
    0%, 50% { border-right-color: var(--text-primary); }
    51%, 100% { border-right-color: transparent; }
  }
`;

document.head.appendChild(style);
