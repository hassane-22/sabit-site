
// ===== NAVBAR SCROLL EFFECT =====
const header = document.querySelector('header');
 
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
 
// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
 
// ===== INTERSECTION OBSERVER - APPARITION AU SCROLL =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
};
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
 
// Éléments à observer
const animatedElements = document.querySelectorAll(
    '.service, .design img, .adresse p, .intro .left, .intro .right, .créa, .build, h2'
);
 
animatedElements.forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});
 
// Animation décalée pour les cartes de services
document.querySelectorAll('.service').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
});
 
// Animation décalée pour les images du projet
document.querySelectorAll('.design img').forEach((img, index) => {
    img.style.transitionDelay = `${index * 0.1}s`;
});
 
// Animation décalée pour les infos de contact
document.querySelectorAll('.adresse p').forEach((p, index) => {
    p.style.transitionDelay = `${index * 0.1}s`;
});
 
// ===== PARALLAXE LÉGÈRE SUR LE HERO =====
const heroRight = document.querySelector('.intro .right img');
const heroLeft = document.querySelector('.intro .left');
 
if (heroRight && heroLeft) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;
        if (scrollY < maxScroll) {
            heroRight.style.transform = `translateY(${scrollY * 0.12}px)`;
            heroLeft.style.transform = `translateY(${scrollY * 0.06}px)`;
        }
    });
}
 
// ===== BOUTON "A PROPOS" - ANIMATION =====
const btn = document.getElementById('monbouton');
if (btn) {
    btn.addEventListener('click', () => {
        const serviceSection = document.getElementById('service');
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
 
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px) scale(1.04)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
}
 
// ===== EFFET HOVER SUR LES IMAGES DU PROJET =====
document.querySelectorAll('.design img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05) translateY(-6px)';
        img.style.zIndex = '10';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) translateY(0)';
        img.style.zIndex = '1';
    });
});
 
// ===== CURSEUR PERSONNALISÉ (optionnel) =====
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);
 
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
 
document.querySelectorAll('a, button, .service, .design img').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});
 
// ===== ANIMATION TEXTE HERO (typewriter effect) =====
const heroTitle = document.querySelector('.intro .left h1 span');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid currentColor';
 
    let i = 0;
    const typeInterval = setInterval(() => {
        heroTitle.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 600);
        }
    }, 80);
}
 
// ===== INDICATEUR DE SCROLL PROGRESS =====
const progressBar = document.createElement('div');
progressBar.classList.add('scroll-progress');
document.body.appendChild(progressBar);
 
window.addEventListener('scroll', () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
});
 m