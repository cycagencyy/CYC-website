// ===== DOM ELEMENTS =====
const splashScreen = document.getElementById('splash-screen');
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contact-form');
const faqItems = document.querySelectorAll('.faq-item');
const langButtons = document.querySelectorAll('.lang-btn');
const htmlElement = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const scrollProgress = document.getElementById('scroll-progress');

// ===== SPLASH SCREEN FUNCTIONALITY =====
window.addEventListener('load', () => {
    // Premium splash exit
    setTimeout(() => {
        if (!splashScreen) return;
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Prepare hero to reveal immediately after splash starts exiting
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '0';
            hero.style.willChange = 'opacity';
        }
        splashScreen.classList.add('splash-exit');
        // Start hero fade-in in parallel for seamless transition
        setTimeout(() => {
            if (hero) {
                hero.style.transition = 'opacity 500ms ease';
                hero.style.opacity = '1';
            }
        }, reduce ? 0 : 150);
        // Remove splash after fade finishes
        setTimeout(() => {
            splashScreen.classList.add('splash-hidden');
            splashScreen.style.display = 'none';
        }, reduce ? 0 : 600);
    }, 1300);
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    // Scroll progress bar
    if (scrollProgress) {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const pct = Math.max(0, Math.min(1, window.scrollY / max));
        scrollProgress.style.width = `${pct * 100}%`;
    }
});

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ===== FAQ ACCORDION =====
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== CONTACT FORM HANDLING =====
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const submitLabel = submitBtn ? submitBtn.querySelector('span') : null;
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        // removed service dropdown
        const privacy = formData.get('privacy');
        
        // Validate form
        if (!validateForm(name, email, message, privacy)) {
            return;
        }
        
        // Show loading state
        if (submitBtn) submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = 'Sending...';
        
        try {
            // Submit to Formspree (JSON API)
            const response = await fetch('https://formspree.io/f/mandkyaz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone: phone || 'Not provided',
                    message,
                    _subject: 'New Contact Form Submission - CYC Website',
                    _replyto: email
                })
            });
            
            if (response.ok) {
                // Success state
                if (submitLabel) submitLabel.textContent = 'Message Sent!';
                if (submitBtn) submitBtn.style.background = '#10b981';
                
                // Show success message
                showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
                
                // WhatsApp quick message removed

                // Reset form
                contactForm.reset();
                
                // Optional redirect to thank you
                setTimeout(()=>{ try { window.location.href = 'thank-you.html'; } catch(_){} }, 1200);

                // Reset button after 3 seconds
                setTimeout(() => {
                    if (submitLabel) submitLabel.textContent = 'Send Message';
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }
                }, 3000);
                
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Error state
            if (submitLabel) submitLabel.textContent = 'Error - Try Again';
            if (submitBtn) submitBtn.style.background = '#ef4444';
            
            // Show error message
            showMessage('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                if (submitLabel) submitLabel.textContent = 'Send Message';
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }
            }, 3000);
        }
    });
}

// ===== FORM VALIDATION =====
function validateForm(name, email, message, privacy) {
    const errors = [];
    
    if (!name || name.trim().length < 2) {
        errors.push('Please enter a valid name (at least 2 characters)');
    }
    
    if (!email || !isValidEmail(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!message || message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }
    
    if (!privacy) {
        errors.push('Please agree to the privacy policy');
    }
    
    if (errors.length > 0) {
        showMessage(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== MESSAGE DISPLAY =====
function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = message;
    
    // Insert message after form
    contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .faq-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ===== NAV ACTIVE (SCROLL SPY) =====
const sections = document.querySelectorAll('section[id]');
const spyObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (!id) return;
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link.active').forEach(a=>a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
sections.forEach(sec => spyObserver.observe(sec));

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for FAQ
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
    
    // Make focusable
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
});

// Update aria-expanded when FAQ items are toggled
const faqObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const question = mutation.target.querySelector('.faq-question');
            const isActive = mutation.target.classList.contains('active');
            question.setAttribute('aria-expanded', isActive);
        }
    });
});

faqItems.forEach(item => {
    faqObserver.observe(item, { attributes: true });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You can send error reports to your analytics service here
});

// ===== PRELOADER FOR CRITICAL RESOURCES =====
function preloadCriticalResources() {
    const criticalImages = [
        'cyc-logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadCriticalResources);

// ===== ANALYTICS AND TRACKING =====
function trackEvent(category, action, label) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Console log for development
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track form submissions
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('Form', 'Submit', 'Contact Form');
    });
}

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('CTA', 'Click', 'WhatsApp');
    });
});

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionName = entry.target.id || entry.target.className;
            trackEvent('Page', 'View', sectionName);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ===== MOBILE OPTIMIZATIONS =====
// Prevent zoom on input focus (iOS)
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            }
        });
        
        input.addEventListener('blur', () => {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.content = 'width=device-width, initial-scale=1.0';
            }
        });
    });
}

// ===== LANGUAGE SWITCHING =====
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language
function initLanguage() {
    updateLanguage(currentLang);
}

// Update language
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with data attributes
    const elementsToTranslate = document.querySelectorAll('[data-en][data-ar]');
    elementsToTranslate.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholders
    const elementsWithPlaceholders = document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]');
    elementsWithPlaceholders.forEach(element => {
        const placeholder = element.getAttribute(`data-placeholder-${lang}`);
        if (placeholder) {
            element.setAttribute('placeholder', placeholder);
        }
    });
    
    // Update meta tags
    const title = document.querySelector('title');
    if (title) {
        const titleText = title.getAttribute(`data-${lang}`);
        if (titleText) {
            title.textContent = titleText;
        }
    }
    
    const description = document.querySelector('meta[name="description"]');
    if (description) {
        const descText = description.getAttribute(`data-${lang}`);
        if (descText) {
            description.setAttribute('content', descText);
        }
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        const ogTitleText = ogTitle.getAttribute(`data-${lang}`);
        if (ogTitleText) {
            ogTitle.setAttribute('content', ogTitleText);
        }
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        const ogDescText = ogDescription.getAttribute(`data-${lang}`);
        if (ogDescText) {
            ogDescription.setAttribute('content', ogDescText);
        }
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
        const twitterTitleText = twitterTitle.getAttribute(`data-${lang}`);
        if (twitterTitleText) {
            twitterTitle.setAttribute('content', twitterTitleText);
        }
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
        const twitterDescText = twitterDescription.getAttribute(`data-${lang}`);
        if (twitterDescText) {
            twitterDescription.setAttribute('content', twitterDescText);
        }
    }
    
    // Update language buttons
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Language button event listeners
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('CYC Marketing Agency website loaded successfully');
    
    // Initialize any additional features
    initializeAnimations();
    initializeAccessibility();
    initLanguage();

    // New features
    initializeKpiCounters();
    initializePortfolioFilters();
    initializeTestimonialsSlider();

    // Premium transitions
    initializeStaggerAndReveal();
    initializeMagneticCta();
    initializeTheme();
    initializeNewsletter();
    initializeConsent();

    // Hero static headline (typewriter removed)
});

// ===== CONSENT & ANALYTICS =====
function initializeConsent(){
  const banner = document.getElementById('cookie-consent');
  const accept = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');
  if (!banner || !accept || !decline) return;
  const saved = localStorage.getItem('cookie-consent');
  if (!saved) banner.hidden = false;
  if (saved === 'accepted') enableAnalytics();
  accept.addEventListener('click', ()=>{ localStorage.setItem('cookie-consent','accepted'); banner.remove(); enableAnalytics(); });
  decline.addEventListener('click', ()=>{ localStorage.setItem('cookie-consent','declined'); banner.remove(); });
}

function enableAnalytics(){
  // GA4 placeholder (replace with your measurement ID)
  const gtagScript = document.createElement('script');
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
  gtagScript.async = true;
  document.head.appendChild(gtagScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');

  // Meta Pixel placeholder
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','000000000000000'); fbq('track','PageView');
}

// ===== THEME (Dark/Light) =====
function initializeTheme(){
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  setTheme(initial);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
}

function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
}

// ===== NEWSLETTER =====
function initializeNewsletter(){
  const form = document.getElementById('newsletter-form');
  const email = document.getElementById('newsletter-email');
  if (!form || !email) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (!email.value || !isValidEmail(email.value)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }
    // Simulate success
    showMessage('Subscribed! Welcome to our monthly insights.', 'success');
    launchConfetti();
    form.reset();
  });
}

function launchConfetti(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'confetti';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  const pieces = Array.from({length: 80}, ()=>({
    x: Math.random()*w,
    y: -10 - Math.random()*h*0.3,
    r: 2 + Math.random()*3,
    c: Math.random()>0.5 ? '#FACC15' : '#FFFFFF',
    v: 1 + Math.random()*2
  }));
  let anim;
  function draw(){
    ctx.clearRect(0,0,w,h);
    pieces.forEach(p=>{
      ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      p.y += p.v; p.x += Math.sin(p.y*0.02);
    });
    if (pieces[0].y < h+20) anim = requestAnimationFrame(draw); else cleanup();
  }
  function cleanup(){ cancelAnimationFrame(anim); canvas.remove(); }
  draw();
  setTimeout(cleanup, 2500);
}

// ===== MAGNETIC CTA =====
function initializeMagneticCta(){
  const ctas = document.querySelectorAll('.magnetic-cta');
  if (!ctas.length) return;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  ctas.forEach(btn => {
    let rect = null;
    const strength = 12; // px
    function onEnter(){ rect = btn.getBoundingClientRect(); btn.classList.add('is-magnet'); }
    function onMove(e){
      if (!rect) return;
      const x = e.clientX - (rect.left + rect.width/2);
      const y = e.clientY - (rect.top + rect.height/2);
      const mx = Math.max(-strength, Math.min(strength, x/10));
      const my = Math.max(-strength, Math.min(strength, y/10));
      btn.style.setProperty('--mx', `${mx}px`);
      btn.style.setProperty('--my', `${my}px`);
    }
    function onLeave(){ btn.classList.remove('is-magnet'); btn.style.removeProperty('--mx'); btn.style.removeProperty('--my'); rect = null; }
    btn.addEventListener('mouseenter', onEnter);
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
  });
}

function initializeAnimations() {
    // Add any additional animation initializations here
    console.log('Animations initialized');
    // Hero micro-scale on scroll
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 40;
            hero.setAttribute('data-scrolled', scrolled ? 'true' : 'false');
        }, { passive: true });

        // Subtle parallax for hero shapes
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const shapes = document.querySelectorAll('.animated-shapes .shape');
        if (!reduce && shapes.length) {
            window.addEventListener('scroll', () => {
                const y = window.scrollY * 0.04; // gentle
                shapes.forEach((s, i) => {
                    const dir = i % 2 === 0 ? 1 : -1;
                    s.style.transform = `translateY(${y * dir}px)`;
                });
            }, { passive: true });
        }

        // Parallax for hero watermark
        const watermark = document.querySelector('.hero-watermark');
        if (!reduce && watermark) {
            window.addEventListener('scroll', () => {
                const y2 = window.scrollY * 0.02;
                watermark.style.transform = `translateY(${y2}px)`;
                const op = Math.max(0.03, 0.07 - window.scrollY / 3000);
                watermark.style.opacity = String(op);
            }, { passive: true });
        }
    }
}

// ===== PREMIUM: STAGGER & REVEAL =====
function initializeStaggerAndReveal(){
  // mark hero ready for stagger
  // No stagger trigger needed now (kept minimal)

  // attach reveal to key elements
  const toReveal = document.querySelectorAll('.section-header, .service-card, .portfolio-item, .testimonial-card, .faq-item, .kpi-item, .rail-card, .process-steps .step');
  toReveal.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        const title = entry.target.querySelector?.('.section-title');
        if (title) title.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  toReveal.forEach(el=>io.observe(el));
}

function initializeAccessibility() {
    // Add any additional accessibility features here
    console.log('Accessibility features initialized');
    // Make form messages aria-live
    const existing = document.querySelector('.form-message');
    if (existing) existing.setAttribute('role','status');
}

// ===== TYPEWRITER (HERO) =====
// typewriter removed

// ===== KPIs COUNTERS =====
function initializeKpiCounters() {
    const counters = document.querySelectorAll('.kpi-number');
    if (!counters.length) return;
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 1600;
            const start = performance.now();
            function tick(now){
                const p = Math.min(1, (now - start) / duration);
                const eased = p * p * (3 - 2 * p);
                current = Math.floor(target * eased);
                el.textContent = `${prefix}${current}${suffix}`;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            obs.unobserve(el);
        });
    }, { threshold: 0.3 });
    counters.forEach(c => io.observe(c));
}

// ===== PORTFOLIO FILTERS =====
function initializePortfolioFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');
    if (!buttons.length || !items.length) return;
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            items.forEach(item => {
                const cat = item.getAttribute('data-category');
                const show = filter === 'all' || filter === cat;
                if (show) {
                  item.classList.remove('is-hiding');
                  item.classList.add('is-showing');
                  item.style.display = '';
                } else {
                  item.classList.remove('is-showing');
                  item.classList.add('is-hiding');
                  setTimeout(()=>{ item.style.display = 'none'; }, 250);
                }
            });
        });
    });
}

// ===== TESTIMONIALS SLIDER =====
function initializeTestimonialsSlider() {
    const track = document.querySelector('.testimonials-slider .slider-track');
    if (!track) return;
    const cards = Array.from(track.children);
    const prev = document.querySelector('.slider-prev');
    const next = document.querySelector('.slider-next');
    const dotsWrap = document.querySelector('.slider-dots');
    let index = 0;
    let isDown = false, startX = 0, scrollLeft = 0;

    // Build dots
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    function updateDots() {
        Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function goTo(i) {
        index = (i + cards.length) % cards.length;
        const x = cards[index].offsetLeft;
        track.scrollTo({ left: x, behavior: 'smooth' });
        updateDots();
    }

    if (prev) prev.addEventListener('click', () => goTo(index - 1));
    if (next) next.addEventListener('click', () => goTo(index + 1));

    let auto = null;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function start() { if (!reduce) auto = setInterval(() => goTo(index + 1), 6000); }
    function stop() { if (auto) { clearInterval(auto); auto = null; } }
    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);
    start();

    // Drag / Swipe
    track.addEventListener('mousedown', (e)=>{ isDown = true; track.classList.add('is-dragging'); startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; });
    track.addEventListener('mouseleave', ()=>{ isDown = false; track.classList.remove('is-dragging'); });
    track.addEventListener('mouseup', ()=>{ isDown = false; track.classList.remove('is-dragging'); });
    track.addEventListener('mousemove', (e)=>{ if(!isDown) return; e.preventDefault(); const x = e.pageX - track.offsetLeft; const walk = (x - startX) * 1.1; track.scrollLeft = scrollLeft - walk; });
    track.addEventListener('touchstart', (e)=>{ isDown = true; startX = e.touches[0].pageX; scrollLeft = track.scrollLeft; }, {passive:true});
    track.addEventListener('touchend', ()=>{ isDown = false; });
    track.addEventListener('touchmove', (e)=>{ if(!isDown) return; const x = e.touches[0].pageX; const walk = (x - startX) * 1.1; track.scrollLeft = scrollLeft - walk; }, {passive:true});
}

// ===== PORTFOLIO MODAL =====
function openCaseModal(title, imgSrc, detailsHtml){
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `<div class="modal"><div class="modal-header"><h3>${title}</h3><button class="modal-close" aria-label="Close">×</button></div><div class="modal-body"><img src="${imgSrc}" alt="${title}" style="width:100%;height:auto;border-radius:12px;margin-bottom:12px;"/>${detailsHtml}</div></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay || e.target.classList.contains('modal-close')) overlay.remove(); });
}

document.addEventListener('click', (e)=>{
  const card = e.target.closest && e.target.closest('.portfolio-item');
  if (!card) return;
  const title = card.querySelector('.portfolio-title')?.textContent || 'Case Study';
  const img = card.querySelector('img')?.src || '';
  const details = card.querySelector('.mini-case')?.outerHTML || '';
  openCaseModal(title, img, details);
});

// ===== FORM UX (phone mask + instant validation) =====
document.addEventListener('input', (e)=>{
  const t = e.target;
  if (t && t.id === 'phone') {
    let v = t.value.replace(/[^\d+]/g,'');
    v = v.replace(/(\+?\d{1,3})(\d{1,4})?(\d{1,4})?(\d{1,4})?.*/, (m,a,b='',c='',d='')=>[a,b&&' '+b,c&&' '+c,d&&' '+d].filter(Boolean).join(''));
    t.value = v.trim();
  }
});

document.addEventListener('blur', (e)=>{
  const t = e.target;
  if (!t || !t.classList) return;
  if (t.matches('#name') && (!t.value || t.value.trim().length < 2)) showMessage('Please enter a valid name (at least 2 characters)', 'error');
  if (t.matches('#email') && (!t.value || !isValidEmail(t.value))) showMessage('Please enter a valid email address', 'error');
  if (t.matches('#message') && (!t.value || t.value.trim().length < 10)) showMessage('Please enter a message (at least 10 characters)', 'error');
}, true);