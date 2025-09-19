document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            targetSection.classList.add('active');
            
            // Scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Set home as active by default
    document.querySelector('nav a[href="#home"]').classList.add('active');
    document.getElementById('home').classList.add('active');
    
    // Form submission
    const contactForm = document.getElementById('securityContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show a success message
            alert('Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Highlight nav link based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Typewriter effect for home section
    const typewriterText = "Ethical Hacker | SOC Analyst | Vulnerability Researcher";
    const typewriterElement = document.querySelector('.hero-content p');
    
    if (typewriterElement) {
        let i = 0;
        const speed = 50; // typing speed in ms
        
        function typeWriter() {
            if (i < typewriterText.length) {
                typewriterElement.innerHTML = `Hi, I'm <span class="highlight">Vetrivel.T</span>. ${typewriterText.substring(0, i+1)}`;
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Start the typewriter effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Tooltip for skills
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const skillLevel = this.querySelector('.skill-level');
            const width = skillLevel.style.width;
            skillLevel.setAttribute('data-tooltip', width);
        });
    });
    
    // Animate skill bars on scroll
    function animateSkills() {
        const skillsSection = document.getElementById('skills');
        const skillBars = document.querySelectorAll('.skill-level');
        
        if (isElementInViewport(skillsSection)) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            window.removeEventListener('scroll', animateSkills);
        }
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', animateSkills);
});
