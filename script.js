// DOMContentLoaded ensures DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle - Clean production version
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        const toggleMenu = function(e) {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        };
        
        menuToggle.addEventListener('click', toggleMenu);
        // Touch support for mobile
        menuToggle.addEventListener('touchstart', toggleMenu, { passive: false });
    }

    // WhatsApp Form Submission - Silent instant redirect
    const applicationForm = document.getElementById('applicationForm');
    
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                country: document.getElementById('country').value,
                experience: document.getElementById('experience').value,
                interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
                message: document.getElementById('message').value.trim(),
                created_at: new Date().toISOString()
            };
            
            // Silent validation - no alerts/spinner
            if (formData.interests.length === 0) {
                return;
            }
            
            // Professional WhatsApp message format
            let whatsappMessage = `*DEV VAULT - NEW APPLICATION*\\n\\n`;
            whatsappMessage += `👤 *Name:* ${formData.fullName}\\n`;
            whatsappMessage += `📧 *Email:* ${formData.email}\\n`;
            whatsappMessage += `📱 *WhatsApp:* ${formData.phone}\\n`;
            whatsappMessage += `🌍 *Country:* ${formData.country}\\n`;
            whatsappMessage += `📊 *Experience:* ${formData.experience}\\n`;
            whatsappMessage += `📚 *Courses:* ${formData.interests.join(', ')}\\n`;
            if (formData.message) whatsappMessage += `💬 *Message:* ${formData.message}\\n`;
            whatsappMessage += `\\n⏰ *${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}*`;
            
            const whatsappURL = `https://wa.me/2349065829287?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Instant silent redirect - no user feedback
            window.location.href = whatsappURL;
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target && href !== '#') {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ScrollToApply utility
    window.scrollToApply = function() {
        const applySection = document.getElementById('apply');
        if (applySection) {
            applySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Video controls
    const playBtn = document.getElementById('playVideoBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const video = document.getElementById('devVaultVideo');
    
    if (playBtn && videoOverlay && video) {
        playBtn.addEventListener('click', function(e) {
            e.preventDefault();
            video.muted = false;
            video.volume = 1.0;
            videoOverlay.style.display = 'none';
            video.play().catch(() => {
                videoOverlay.style.display = 'flex';
            });
        });
        
        video.addEventListener('ended', () => videoOverlay.style.display = 'flex');
        video.addEventListener('play', () => videoOverlay.style.display = 'none');
        video.addEventListener('pause', () => videoOverlay.style.display = 'flex');
    }

    // Phone input formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^\\d+]/g, '');
            if (!value.startsWith('+') && value) {
                value = '+' + value;
            }
            e.target.value = value;
        });
    }

    // ESC closes mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});
