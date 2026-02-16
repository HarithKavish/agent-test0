document.addEventListener('DOMContentLoaded', function() {
    // Dolphin animation controls
    const swimUpBtn = document.getElementById('swim-up');
    const swimDownBtn = document.getElementById('swim-down');
    const playSoundBtn = document.getElementById('play-sound');
    const dolphinImage = document.querySelector('.dolphin-animation');

    // Play sound effect (using simple audio element)
    const soundEffect = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-water-drop-1438.mp3');

    // Swim up animation
    swimUpBtn.addEventListener('click', function() {
        dolphinImage.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            dolphinImage.style.transform = 'translateY(0)';
        }, 500);
    });

    // Swim down animation
    swimDownBtn.addEventListener('click', function() {
        dolphinImage.style.transform = 'translateY(20px)';
        setTimeout(() => {
            dolphinImage.style.transform = 'translateY(0)';
        }, 500);
    });

    // Play sound effect
    playSoundBtn.addEventListener('click', function() {
        soundEffect.play().catch(e => console.log("Audio play failed:", e));
    });

    // Add click event to dolphin image for interactive experience
    dolphinImage.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });

    // Add scroll animations with Intersection Observer for better performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.animate-element').forEach(element => {
        observer.observe(element);
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for fact cards
    const factCards = document.querySelectorAll('.fact-card');
    factCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add interactive sound effect for conservation section
    const conservationLinks = document.querySelectorAll('.conservation-link');
    conservationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.opacity = '0.6';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    });

    // Add subtle animation for skills section
    const skills = document.querySelectorAll('.skills span');
    skills.forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(10px)';
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, 100);
    });

    // Add animation for bio section
    const bioSection = document.querySelector('.bio-section');
    bioSection.style.opacity = '0';
    bioSection.style.transform = 'translateY(20px)';
    setTimeout(() => {
        bioSection.style.opacity = '1';
        bioSection.style.transform = 'translateY(0)';
    }, 500);

    // Add animation for footer content
    const footerContent = document.querySelector('.footer-content');
    footerContent.style.opacity = '0';
    footerContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
        footerContent.style.opacity = '1';
        footerContent.style.transform = 'translateY(0)';
    }, 1000);

    // Add animation for footer copyright
    const copyright = document.querySelector('.copyright');
    copyright.style.opacity = '0';
    copyright.style.transform = 'translateY(20px)';
    setTimeout(() => {
        copyright.style.opacity = '1';
        copyright.style.transform = 'translateY(0)';
    }, 1500);

    // Add animation for social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 2000);
    });

    // Add animation for education section
    const educationSection = document.querySelector('.footer-education');
    educationSection.style.opacity = '0';
    educationSection.style.transform = 'translateY(20px)';
    setTimeout(() => {
        educationSection.style.opacity = '1';
        educationSection.style.transform = 'translateY(0)';
    }, 1200);

    // Add animation for fact cards with staggered timing
    const factCardsAnimation = document.querySelectorAll('.fact-card');
    factCardsAnimation.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add animation for interactive section
    const interactiveSection = document.querySelector('.interactive-section');
    interactiveSection.style.opacity = '0';
    interactiveSection.style.transform = 'translateY(20px)';
    setTimeout(() => {
        interactiveSection.style.opacity = '1';
        interactiveSection.style.transform = 'translateY(0)';
    }, 1800);

    // Add animation for conservation text
    const conservationText = document.querySelector('.conservation-text');
    conservationText.style.opacity = '0';
    conservationText.style.transform = 'translateY(10px)';
    setTimeout(() => {
        conservationText.style.opacity = '1';
        conservationText.style.transform = 'translateY(0)';
    }, 2000);

    // Add animation for conservation links
    const conservationLinksAnimation = document.querySelectorAll('.conservation-link');
    conservationLinksAnimation.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });

    // Add animation for note section
    const note = document.querySelector('.note');
    note.style.opacity = '0';
    note.style.transform = 'translateY(10px)';
    setTimeout(() => {
        note.style.opacity = '1';
        note.style.transform = 'translateY(0)';
    }, 2200);

    // Add animation for controls section
    const controls = document.querySelector('.controls');
    controls.style.opacity = '0';
    controls.style.transform = 'translateY(10px)';
    setTimeout(() => {
        controls.style.opacity = '1';
        controls.style.transform = 'translateY(0)';
    }, 2400);

    // Add animation for dolphin image
    const dolphinImageAnimation = document.querySelector('.dolphin-animation');
    dolphinImageAnimation.style.opacity = '0';
    dolphinImageAnimation.style.transform = 'scale(0.9)';
    setTimeout(() => {
        dolphinImageAnimation.style.opacity = '1';
        dolphinImageAnimation.style.transform = 'scale(1)';
    }, 2600);

    // Add animation for interactive section heading
    const interactiveHeading = document.querySelector('.interactive-section h2');
    interactiveHeading.style.opacity = '0';
    interactiveHeading.style.transform = 'translateY(10px)';
    setTimeout(() => {
        interactiveHeading.style.opacity = '1';
        interactiveHeading.style.transform = 'translateY(0)';
    }, 2800);

    // Add animation for conservation heading
    const conservationHeading = document.querySelector('.conservation-section h2');
    conservationHeading.style.opacity = '0';
    conservationHeading.style.transform = 'translateY(10px)';
    setTimeout(() => {
        conservationHeading.style.opacity = '1';
        conservationHeading.style.transform = 'translateY(0)';
    }, 3000);

    // Add animation for dolphin facts heading
    const dolphinFactsHeading = document.querySelector('.dolphin-facts h2');
    dolphinFactsHeading.style.opacity = '0';
    dolphinFactsHeading.style.transform = 'translateY(10px)';
    setTimeout(() => {
        dolphinFactsHeading.style.opacity = '1';
        dolphinFactsHeading.style.transform = 'translateY(0)';
    }, 3200);

    // Add animation for hero section heading
    const heroHeading = document.querySelector('.hero-section h1');
    heroHeading.style.opacity = '0';
    heroHeading.style.transform = 'translateY(10px)';
    setTimeout(() => {
        heroHeading.style.opacity = '1';
        heroHeading.style.transform = 'translateY(0)';
    }, 3400);

    // Add animation for hero section subtitle
    const heroSubtitle = document.querySelector('.hero-section .subtitle');
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transform = 'translateY(10px)';
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 3600);

    // Add animation for skills section
    const skillsSection = document.querySelector('.skills');
    skillsSection.style.opacity = '0';
    skillsSection.style.transform = 'translateY(10px)';
    setTimeout(() => {
        skillsSection.style.opacity = '1';
        skillsSection.style.transform = 'translateY(0)';
    }, 3800);

    // Add animation for footer info
    const footerInfo = document.querySelector('.footer-info');
    footerInfo.style.opacity = '0';
    footerInfo.style.transform = 'translateY(10px)';
    setTimeout(() => {
        footerInfo.style.opacity = '1';
        footerInfo.style.transform = 'translateY(0)';
    }, 4000);

    // Add animation for footer education list items
    const educationListItems = document.querySelectorAll('.footer-education li');
    educationListItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 4200 + (index * 100));
    });

    // Add animation for footer social links
    const socialLinksAnimation = document.querySelectorAll('.social-links a');
    socialLinksAnimation.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 4400 + (index * 150));
    });

    // Add animation for footer copyright
    const footerCopyright = document.querySelector('.copyright');
    footerCopyright.style.opacity = '0';
    footerCopyright.style.transform = 'translateY(10px)';
    setTimeout(() => {
        footerCopyright.style.opacity = '1';
        footerCopyright.style.transform = 'translateY(0)';
    }, 4600);

    // Add animation for interactive buttons
    const buttons = document.querySelectorAll('.control-btn');
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(10px)';
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 4800 + (index * 100));
    });

    // Add animation for fact cards with staggered timing
    const factCardsAnimation = document.querySelectorAll('.fact-card');
    factCardsAnimation.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
    });

    // Add animation for interactive section container
    const interactiveContainer = document.querySelector('.simulator-container');
    interactiveContainer.style.opacity = '0';
    interactiveContainer.style.transform = 'translateY(10px)';
    setTimeout(() => {
        interactiveContainer.style.opacity = '1';
        interactiveContainer.style.transform = 'translateY(0)';
    }, 5000);
});