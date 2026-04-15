// import { GOOGLE_API_KEY, WEBSITE_CONTEXT, FALLBACK_RESPONSES, DEFAULT_GREETING } from './ai-config.js';

// Fixed Supabase + Robust AI Chat (Text-Focused, Voice Optional) - No Default Messages
document.addEventListener('DOMContentLoaded', async function() {
    console.log('✅ Script loaded - Professional AI v1.0');

    // [NAV, FORM, VIDEO - UNCHANGED]
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

    // Supabase Form [UNCHANGED]
    const applicationForm = document.getElementById('applicationForm');
    const submitBtn = applicationForm?.querySelector('button[type="submit"]');
    
    if (applicationForm && submitBtn) {
        const supabaseUrl = 'https://lxgzhvgsfntstpokmfiw.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4Z3podmdzZm50c3Rwb2ttZml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwMzEyODIsImV4cCI6MjA5MTYwNzI4Mn0.tIwPo5p7MWgzar9Yld_YhDJ8VPgiPI_xim7UFnoWK-U';
        
        const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
        
        console.log('✅ Supabase ready');
        
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
            
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            try {
                const { data, error } = await supabaseClient
                    .from('applications')
                    .insert([formData]);
                
                if (error) throw error;
                
                document.getElementById('successModal').style.display = 'flex';
                applicationForm.reset();
            } catch (error) {
                console.error('Error:', error);
                alert('Submission failed: ' + error.message);
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });

        document.getElementById('closeSuccessBtn')?.addEventListener('click', () => {
            document.getElementById('successModal').style.display = 'none';
        });

        document.getElementById('successModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'successModal') {
                e.target.style.display = 'none';
            }
        });
    }

    // AI CHAT - Professional Responses Only
    const chatElements = {
        toggle: document.getElementById('chatToggle'),
        modal: document.getElementById('chatModal'),
        close: document.getElementById('chatClose'),
        send: document.getElementById('chatSend'),
        input: document.getElementById('chatInput'),
        messages: document.getElementById('chatMessages')
    };

    const AI_CONFIG = {
        apiKey: 'AIzaSyCYwDJTTZwNcX_TcAVjfsJnKXIgJRQ24iQ',
        context: 'DEV VAULT coding school. Frontend $50/₦70k (HTML/CSS/JS/React). Backend $100/₦130k (Node/SQL). Full Stack $140/₦190k. Apply via form.',
        fallbackResponses: {
            'hello|hi|hey': 'Hello. What would you like to know about DEV VAULT?',
            'courses': 'Frontend (HTML/CSS/JS/React) $50/₦70k, Backend (Node/SQL) $100/₦130k, Full Stack $140/₦190k.',
            'price|pricing|cost': 'Frontend $50/₦70k, Backend $100/₦130k, Full Stack $140/₦190k.',
            'apply|enroll': 'Use the application form above.',
            'default': 'Please specify your question about DEV VAULT courses or pricing.'
        }
    };

    // Voice support
    const synth = window.speechSynthesis;
    function speak(text) {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        synth.speak(utterance);
    }

    // AI Response Logic
    async function getAIResponse(input) {
        const lowerInput = input.toLowerCase().trim();
        
        try {
            const prompt = `Professional assistant. Answer user\\'s exact question directly and naturally. Professional tone. No greetings or extras.\nContext: ${AI_CONFIG.context}\n\nQ: ${input}\nA:`;
            
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AI_CONFIG.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            
            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
            if (text) {
                speak(text);
                return text;
            }
        } catch (e) {
            console.log('Using fallback');
        }
        
        for (const [key, resp] of Object.entries(AI_CONFIG.fallbackResponses)) {
            if (lowerInput.match(new RegExp(key.replace(/[|]/g, '|')))) return resp;
        }
        return AI_CONFIG.fallbackResponses.default;
    }

    function addMessage(text, type = 'bot') {
        const div = document.createElement('div');
        div.className = `chat-message ${type}`;
        div.innerHTML = `
            <div class="message-avatar ${type}">
                <i class="fas fa-${type === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-bubble">${text.replace(/\\n/g, '<br>')}</div>
        `;
        chatElements.messages.appendChild(div);
        chatElements.messages.scrollTop = chatElements.messages.scrollHeight;
    }

    async function sendMessage(input) {
        input = input.trim();
        if (!input) return;
        
        addMessage(input, 'user');
        chatElements.input.value = '';
        chatElements.input.focus();
        
        const typing = document.createElement('div');
        typing.className = 'chat-message bot typing-indicator';
        typing.innerHTML = '<div class="message-avatar bot"><i class="fas fa-robot"></i></div><div class="message-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
        chatElements.messages.appendChild(typing);
        chatElements.messages.scrollTop = chatElements.messages.scrollHeight;
        
        const response = await getAIResponse(input);
        chatElements.messages.removeChild(typing);
        addMessage(response, 'bot');
    }

    // Event Listeners - FIXED Toggle
    if (chatElements.toggle) {
        chatElements.toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            chatElements.modal.style.display = 'flex';
            chatElements.modal.classList.add('active');
            setTimeout(() => {
                chatElements.input.focus();
            }, 100);
        });
    }

    if (chatElements.send) {
        chatElements.send.addEventListener('click', () => sendMessage(chatElements.input.value));
    }

    if (chatElements.input) {
        chatElements.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(chatElements.input.value);
            }
        });
    }

    if (chatElements.close) {
        chatElements.close.addEventListener('click', () => {
            chatElements.modal.style.display = 'none';
            chatElements.modal.classList.remove('active');
        });
    }

    chatElements.modal.addEventListener('click', (e) => {
        if (e.target === chatElements.modal) {
            chatElements.modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatElements.modal.classList.contains('active')) {
            chatElements.modal.classList.remove('active');
        }
    });

    // Smooth scroll & video [UNCHANGED]
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    console.log('✅ Professional AI ready - No defaults');
});

