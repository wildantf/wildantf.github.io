// ── Intersection Observer for reveal animations ──
const reveal = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.exp-item, .skill-card, .project-card, .cert-card').forEach((el, i) => {
    // stagger siblings within the same parent
    const siblings = [...el.parentElement.children];
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${idx * 0.07}s`;
    reveal.observe(el);
});

// Stats band entrance
const statsBand = document.querySelector('.stats-wrapper');
const statsObs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) statsBand.style.opacity = '1';
}, { threshold: 0.2 });
statsObs.observe(statsBand);

// ── Scroll-to-top visibility ──
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

// ── Active nav highlighting ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const navObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === '#' + entry.target.id;
                link.style.color = isActive && !link.classList.contains('nav-cta')
                    ? 'var(--t1)' : '';
            });
        }
    });
}, { threshold: 0.35 });
sections.forEach(s => navObs.observe(s));

// ── Smooth mouse parallax on orbs ──
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    requestAnimationFrame(() => {
        orb1.style.transform = `translate(${x}px, ${y}px)`;
        orb2.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
    });
}, { passive: true });