// DEV VAULT AI Configuration - Recreated for Robust Voice/Text Chat (Gemini API + Fallbacks)
export const GOOGLE_API_KEY = 'AIzaSyCYwDJTTZwNcX_TcAVjfsJnKXIgJRQ24iQ';

export const WEBSITE_CONTEXT = `DEV VAULT - Premier Coding School. Courses: Frontend (HTML/CSS/JS/React - $50/₦70k), Backend (Node.js/SQL/MongoDB - $100/₦130k), Full Stack ($140/₦190k). WhatsApp: +2349065829287. Lifetime access + projects/certificates. Social: TikTok @dev_vault, IG @dev.vault.coding.school.`;

export const VOICE_CONFIG = {
    recognition: {
        lang: 'en-US',
        interimResults: true,
        continuous: true,
        maxRetries: 3
    },
    synthesis: {
        voices: ['Google US English', 'Microsoft Zira - English (United States)', 'Samantha'],
        rate: 0.95,
        pitch: 1.05,
        volume: 1.0
    }
};

// Fallback Rule-Based Responses (API fails/offline)
export const FALLBACK_RESPONSES = {
'hello|hi|hey': 'Hello. How can I assist you with DEV VAULT?',
    'courses': '💻 **Frontend** (HTML/CSS/JS/React) ₦70k/$50 | 🔧 **Backend** (Node/SQL/DevOps) ₦130k/$100 | 🚀 **Full Stack** ₦190k/$140. Lifetime access!',
    'price|pricing|cost': '💰 **Pricing:** Frontend ₦70k/$50 | Backend ₦130k/$100 | Full Stack ₦190k/$140. One-time payment!',
    'frontend': '🎨 Frontend: HTML/CSS mastery, JavaScript, React hooks, responsive design, UI/UX. Perfect for web builders!',
    'backend': '⚙️ Backend: Node.js/Express, SQL databases, MongoDB, APIs, DevOps deployment. Build servers like pros!',
    'apply|enroll|join|start': '📝 Fill the **Apply Now** form above! We'll WhatsApp you within 24hrs: +2349065829287.',
    'whatsapp|contact|phone': '📱 WhatsApp: +2349065829287 (click button). Available 24/7!',
    'react': '⚛️ React: Hooks, Context, state management, performance. Included in Frontend bundle!',
    'javascript|js': '📜 JavaScript ES6+: Async/await, DOM, closures. Foundation for modern web dev!',
    'html|css': '🏗️ HTML5/CSS3: Flexbox/Grid, animations, responsive. Start your frontend journey!',
    'node': '🔴 Node.js/Express: REST APIs, middleware, auth. Backend power!',
'default': 'Please ask a specific question about courses, pricing, or DEV VAULT.',
};

export const DEFAULT_GREETING = '';

