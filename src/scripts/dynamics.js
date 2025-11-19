// Check if mobile device
const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window || /Mobi|Android/i.test(navigator.userAgent);

// Intersection Observer for scroll animations
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

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });

  // Tech items stagger animation
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Service cards stagger animation
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
    observer.observe(card);
  });

  // Parallax effect for hero section (desktop only)
  if (!isMobile) {
    const hero = document.querySelector('.hero');
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      });
    }
  }

  // Typing effect for hero title
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--neon-green)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 500);
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

  // Form submission with animation
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.style.background = 'linear-gradient(45deg, var(--neon-green), var(--cyber-cyan))';
      
      setTimeout(() => {
        submitBtn.textContent = '¡Enviado!';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = 'linear-gradient(45deg, var(--neon-green), var(--neon-blue))';
          form.reset();
        }, 2000);
      }, 1500);
    });
  }

  // Mouse cursor trail effect (desktop only)
  if (!isMobile) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }

  // Tech icons hover effect (desktop only)
  if (!isMobile) {
    const techIcons = document.querySelectorAll('.tech-icon svg, .tech-icon');
    techIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.filter = 'drop-shadow(0 0 20px var(--neon-green))';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.filter = 'drop-shadow(0 0 10px var(--neon-green))';
      });
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
      }
    });
  }
});

// CSS for animations
const style = document.createElement('style');
style.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  .tech-item.animate-on-scroll {
    transform: translateY(30px) scale(0.9);
  }

  .tech-item.animate-in {
    transform: translateY(0) scale(1);
  }

  .service-card.animate-on-scroll {
    transform: translateY(40px) rotateX(10deg);
  }

  .service-card.animate-in {
    transform: translateY(0) rotateX(0deg);
  }

  .cursor-trail {
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, var(--neon-green), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    opacity: 0.7;
    display: none;
  }

  @media (min-width: 769px) {
    .cursor-trail {
      display: block;
    }
  }

  .tech-icon svg, .tech-icon {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .hero h1 {
    animation: pulse 2s infinite;
  }

  nav {
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .cursor-trail {
      display: none !important;
    }
    
    .animate-on-scroll {
      transform: translateY(20px);
    }

    canvas {
      display: none !important;
    }

    .background-particles {
      display: none !important;
    }

    .particle {
      display: none !important;
    }
  }
`;

document.head.appendChild(style);
