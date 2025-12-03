// Global JavaScript for VillaBella Theme

(function() {
  'use strict';

  // Mobile menu toggle
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (mobileNav && mobileNav.classList.contains('active')) {
        if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // Product card image hover effect
  document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(function(card) {
      const images = card.querySelectorAll('.product-card-image');
      const indicators = card.querySelectorAll('.product-card-indicator');
      let currentIndex = 0;
      let interval;

      if (images.length > 1) {
        card.addEventListener('mouseenter', function() {
          interval = setInterval(function() {
            images[currentIndex].style.opacity = '0';
            if (indicators[currentIndex]) {
              indicators[currentIndex].classList.remove('active');
            }
            
            currentIndex = (currentIndex + 1) % images.length;
            
            images[currentIndex].style.opacity = '1';
            if (indicators[currentIndex]) {
              indicators[currentIndex].classList.add('active');
            }
          }, 2000);
        });

        card.addEventListener('mouseleave', function() {
          clearInterval(interval);
          images.forEach(function(img, index) {
            img.style.opacity = index === 0 ? '1' : '0';
          });
          indicators.forEach(function(indicator, index) {
            if (index === 0) {
              indicator.classList.add('active');
            } else {
              indicator.classList.remove('active');
            }
          });
          currentIndex = 0;
        });
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }

})();

