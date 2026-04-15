// Fixed Supabase access - direct client creation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    
    // Mobile Menu Toggle
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
        menuToggle.addEventListener('touchstart', toggleMenu, { passive: false });
    }

    // Navbar interactions
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    if (navLinks) {
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (navLinks?.classList.contains('active') && 
            !navLinks.contains(e.target) && !menuToggle?.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Form with fixed Supabase
    const applicationForm = document.getElementById('applicationForm');
    const submitBtn = applicationForm?.querySelector('button[type="submit"]');
    
    if (applicationForm && submitBtn) {
        // Direct Supabase client - FULLY FIXED (no module import needed)
        const supabaseUrl = 'https://lxgzhvgsfntstpokmfiw.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4Z3podmdzZm50c3Rwb2ttZml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwMzEyODIsImV4cCI6MjA5MTYwNzI4Mn0.tIwPo5p7MWgzar9Yld_YhDJ8VPgiPI_xim7UFnoWK-U';
        
        // PERFECT FIX - Direct client creation from global CDN supabase
        const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
        
        console.log('✅ Supabase client created successfully:', supabaseClient);
        
        console.log('✅ Supabase client:', supabase);
        console.log('Insert test ready - create table first!');
        
        console.log('✅ Supabase client ready:', supabaseUrl);
        
        console.log('Supabase client created:', supabase);
        
        applicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const countryCode = document.getElementById('countryCode')?.value || '+234';
            const phone = document.getElementById('phone').value.trim();
            
            const formData = {
                full_name: document.getElementById('fullName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: countryCode + phone,
                country: document.getElementById('country').value,
                experience_level: document.getElementById('experience').value,
                interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
                message: document.getElementById('message').value.trim()
            };
            
            if (!formData.interests.length) {
                alert('Please select at least one course interest.');
                return;
            }
            
            // UX STATES
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            try {
                const { data, error } = await supabaseClient
                    .from('applications')
                    .insert([formData]);
                
                if (error) throw error;
                
                // Show professional success modal
                document.getElementById('successModal').style.display = 'flex';
                applicationForm.reset();
                submitBtn.textContent = 'Submit Application';
                submitBtn.disabled = false;
                
            } catch (error) {
                console.error('Error:', error);
                submitBtn.textContent = 'Failed';
                alert('Submission failed: ' + error.message);
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                }, 2000);
            } finally {
                if (originalText === 'Submit Application') {
                    submitBtn.textContent = originalText;
                }
                submitBtn.disabled = false;
            }
        });

        // Success modal close handler
        document.getElementById('closeSuccessBtn')?.addEventListener('click', () => {
            document.getElementById('successModal').style.display = 'none';
        });

        // Close modal on backdrop click
        document.getElementById('successModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'successModal') {
                e.target.style.display = 'none';
            }
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target && href !== '#') {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    window.scrollToApply = function() {
        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Video
    const playBtn = document.getElementById('playVideoBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const video = document.getElementById('devVaultVideo');
    
    if (playBtn && videoOverlay && video) {
        playBtn.addEventListener('click', (e) => {
            e.preventDefault();
            video.muted = false;
            video.volume = 1.0;
            videoOverlay.style.display = 'none';
            video.play().catch(() => videoOverlay.style.display = 'flex');
        });
        video.addEventListener('ended', () => videoOverlay.style.display = 'flex');
        video.addEventListener('play', () => videoOverlay.style.display = 'none');
        video.addEventListener('pause', () => videoOverlay.style.display = 'flex');
    }
});
