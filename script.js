// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(12px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-12px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Scroll to Apply Section
function scrollToApply() {
    const applySection = document.getElementById('apply');
    applySection.scrollIntoView({ behavior: 'smooth' });
}

// Updated Form Submission with DB save
if (applicationForm) {
  applicationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
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

    // Validate courses
    if (formData.interests.length === 0) {
      alert('⚠️ Please select at least one course');
      return;
    }

    loadingSpinner.style.display = 'flex';

    try {
      // Save to DB/localStorage
      await saveApplication(formData);

      // Original WhatsApp flow (keep for now)
      const whatsappNumber = '2349065829287';
      let whatsappMessage = `*🎓 NEW DEV VAULT APPLICATION 🎓*\n\n`;
      whatsappMessage += `*Name:* ${formData.fullName}\n`;
      whatsappMessage += `*Email:* ${formData.email}\n`;
      whatsappMessage += `*Phone:* ${formData.phone}\n`;
      whatsappMessage += `*Country:* ${formData.country}\n`;
      whatsappMessage += `*Level:* ${formData.experience}\n`;
      whatsappMessage += `*Courses:* ${formData.interests.join(', ')}\n`;
      if (formData.message) whatsappMessage += `\n*Message:* ${formData.message}`;
      whatsappMessage += `\n⏰ ${new Date().toLocaleString()}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      await new Promise(resolve => setTimeout(resolve, 1500));
      loadingSpinner.style.display = 'none';
      showSuccessNotification('✅ Saved to admin dashboard + WhatsApp!');
      window.open(whatsappURL, '_blank');
      applicationForm.reset();
    } catch (error) {
      loadingSpinner.style.display = 'none';
      alert('❌ Error saving. WhatsApp still sent.');
    }
  });
}
const loadingSpinner = document.getElementById('loadingSpinner');

if (applicationForm) {
    applicationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const country = document.getElementById('country').value;
        const experience = document.getElementById('experience').value;
        const message = document.getElementById('message').value.trim();

        // Get selected courses
        const interests = [];
        const checkboxes = document.querySelectorAll('input[name="interests"]:checked');
        checkboxes.forEach(checkbox => {
            interests.push(checkbox.value);
        });

        // Validate that at least one course is selected
        if (interests.length === 0) {
            alert('⚠️ Please select at least one course');
            return;
        }

        // Show loading spinner
        loadingSpinner.style.display = 'flex';

        try {
            // Format the message for WhatsApp
            let whatsappMessage = `*🎓 NEW DEV VAULT APPLICATION 🎓*\n\n`;
            whatsappMessage += `*Personal Information:*\n`;
            whatsappMessage += `📝 Name: ${fullName}\n`;
            whatsappMessage += `📧 Email: ${email}\n`;
            whatsappMessage += `📱 WhatsApp: ${phone}\n`;
            whatsappMessage += `🌍 Country: ${country}\n`;
            whatsappMessage += `💡 Experience Level: ${experience}\n\n`;
            
            whatsappMessage += `*Interested Courses:*\n`;
            interests.forEach((interest, index) => {
                whatsappMessage += `${index + 1}. ${interest}\n`;
            });

            if (message) {
                whatsappMessage += `\n*Goals & Message:*\n${message}\n`;
            }

            whatsappMessage += `\n─────────────────\n`;
            whatsappMessage += `*Submitted via DEV VAULT Website*\n`;
            whatsappMessage += `⏰ ${new Date().toLocaleString()}\n`;

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Your WhatsApp number (Nigerian format: +23409065829287)
            const whatsappNumber = '2349065829287';

            // Build WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Simulate a small delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Hide loading spinner
            loadingSpinner.style.display = 'none';

            // Show success message
            showSuccessNotification();

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            applicationForm.reset();

        } catch (error) {
            console.error('Error:', error);
            loadingSpinner.style.display = 'none';
            alert('❌ An error occurred. Please try again.');
        }
    });
}

// Success Notification
function showSuccessNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 20px 30px;
        border-radius: 8px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        font-weight: 600;
        font-size: 1rem;
        z-index: 2000;
        animation: slideInRight 0.5s ease;
    `;
    notification.innerHTML = `✅ Form submitted! Opening WhatsApp...`;
    
    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe course cards and other elements
document.querySelectorAll('.course-card, .stat-card, .pricing-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// Validate phone number on input
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Remove non-digits except +
        let value = e.target.value.replace(/[^\d+]/g, '');
        
        // Ensure it starts with + and country code
        if (!value.startsWith('+')) {
            if (value.startsWith('234')) {
                value = '+' + value;
            } else if (value.length > 0 && !value.startsWith('0')) {
                value = '+' + value;
            }
        }
        
        e.target.value = value;
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles if not already added
        if (!document.querySelector('style[data-ripple]')) {
            const rippleStyle = document.createElement('style');
            rippleStyle.setAttribute('data-ripple', 'true');
            rippleStyle.textContent = `
                .btn {
                    position: relative;
                    overflow: hidden;
                }
                
                .ripple {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple-animation 0.6s ease-out;
                    pointer-events: none;
                }
                
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(rippleStyle);
        }
        
        this.appendChild(ripple);
    });
});

// Supabase integration (update config/supabase-config.js with your details)
let supabase;
try {
  // CDN for easy use
  const { createClient } = Supabase;
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (error) {
  console.log('Supabase not configured - using localStorage fallback');
  supabase = null;
}

const ADMIN_EMAIL = 'tenifayoabdulsomod@gmail.com';
const ADMIN_PASSWORD = 'For sale@01';

// Admin login function
async function adminLogin(email, password) {
  if (!supabase) {
    // Fallback hardcoded
    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
  }
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return !error && data.user;
  } catch (e) {
    return false;
  }
}

// Admin dashboard data fetch
async function getAdminData() {
  if (!supabase) {
    // LocalStorage fallback
    const data = localStorage.getItem('applications') || '[]';
    return JSON.parse(data);
  }
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

// Save form data
async function saveApplication(data) {
  if (!supabase) {
    // LocalStorage fallback
    const apps = JSON.parse(localStorage.getItem('applications') || '[]');
    apps.push({ ...data, created_at: new Date().toISOString() });
    localStorage.setItem('applications', JSON.stringify(apps));
    return true;
  }
  const { error } = await supabase
    .from('applications')
    .insert(data);
  return !error;
}

// Video Audio Configuration
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('devVaultVideo');
    
    if (video) {
        // Ensure video is not muted and has full volume
        video.muted = false;
        video.volume = 1.0;
        
        // Handle metadata loaded to check for audio
        video.addEventListener('loadedmetadata', () => {
            console.log('Video loaded with audio track available');
        });
        
        // Ensure volume stays at maximum when playing
        video.addEventListener('play', () => {
            video.muted = false;
            video.volume = 1.0;
        });
        
        // Handle any volume changes from browser policies
        video.addEventListener('volumechange', () => {
            if (video.muted) {
                video.muted = false;
            }
            if (video.volume < 1.0 && video.volume > 0) {
                video.volume = 1.0;
            }
        });
    }
    
    console.log('DEV VAULT Landing Page Loaded Successfully! 🚀');
});

// Add Twitter link update function
function updateTwitterLink(twitterUrl) {
    const twitterLink = document.getElementById('twitterLink');
    if (twitterLink) {
        twitterLink.href = twitterUrl;
        twitterLink.style.display = 'block';
        
        // Also update the button in contact section
        const twitterButton = document.querySelector('.contact-card:nth-child(3) .btn-outline');
        if (twitterButton) {
            twitterButton.href = twitterUrl;
            twitterButton.disabled = false;
            twitterButton.textContent = 'Follow Us';
            twitterButton.target = '_blank';
        }
    }
}

// Make updateTwitterLink globally accessible
window.updateTwitterLink = updateTwitterLink;

// Form field validation with real-time feedback
const formInputs = document.querySelectorAll('input[type="email"], input[type="tel"]');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#10b981';
            }
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#6366f1';
    });
});

// Accessibility: Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Video Play Button Handler - Ensures audio works with user interaction
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playVideoBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const videoElement = document.getElementById('devVaultVideo');
    
    if (playBtn && videoOverlay && videoElement) {
        playBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ensure video is not muted and set volume to max
            videoElement.muted = false;
            videoElement.volume = 1.0;
            
            // Hide the overlay
            videoOverlay.style.display = 'none';
            
            // Play the video
            const playPromise = videoElement.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Video play failed:', error);
                    // If autoplay fails, show controls for user to click play
                    videoOverlay.style.display = 'flex';
                });
            }
        });
        
        // When video ends, show overlay again
        videoElement.addEventListener('ended', () => {
            videoOverlay.style.display = 'flex';
        });
        
        // Hide overlay on play
        videoElement.addEventListener('play', () => {
            videoOverlay.style.display = 'none';
        });
        
        // Show overlay on pause
        videoElement.addEventListener('pause', () => {
            videoOverlay.style.display = 'flex';
        });
    }
});
