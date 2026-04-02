# DEV VAULT Landing Page 🚀

Professional, responsive landing page for DEV VAULT Learning Platform - Teaching the Real Secrets of Coding!

## 📋 Features

✅ **Fully Responsive Design**
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

✅ **Professional Sections**
- Hero section with call-to-action
- About us with statistics
- 12 detailed course offerings (6 Frontend, 6 Backend)
- Dynamic pricing with country-specific rates
- Interactive application form
- Social media integration
- Professional footer

✅ **Key Functionality**
- Mobile hamburger menu
- Smooth scrolling navigation
- WhatsApp form submission (data sent directly to +234 9065829287)
- Real-time form validation
- Loading animations
- Success notifications
- Intersection Observer animations
- Ripple button effects
- Keyboard accessibility (ESC to close menu)

✅ **Pricing Structure**
- **Frontend**: $50 (International), ₦70k (Nigeria)
- **Backend**: $100 (International), ₦130k (Nigeria)
- **Full Stack**: $140 (International), ₦190k (Nigeria)

## 📁 File Structure

```
DEV-VAULT/
├── index.html          # Main landing page
├── styles.css          # All styling & responsive design
├── script.js           # Interactive functionality
└── Image/
    └── logo.png        # School logo (add your logo here)
```

## 🎨 Customization Guide

### 1. Add Your School Logo
- Place your logo file in the `Image/` folder as `logo.png`
- The logo will automatically appear in:
  - Navigation bar (50x50px)
  - Footer (responsive)

**Recommended**: Use a PNG with transparent background for best results
**Size**: 200x200px or larger (will be scaled down automatically)

### 2. Add Twitter Link
Once you create your Twitter account, update it by:

**Option 1 - Direct in HTML:**
- Find this line in `index.html` (around line 400):
  ```html
  <a href="#" target="_blank" title="Twitter" id="twitterLink" style="display:none;">
  ```
- Replace `#` with your Twitter URL: `https://twitter.com/yourprofile`
- Remove `style="display:none;"`
- Also update the button in the contact section

**Option 2 - Using JavaScript:**
```javascript
// Run this in browser console or add to script.js
updateTwitterLink('https://twitter.com/yourprofile');
```

### 3. Update WhatsApp Number
If you need to change the WhatsApp number:
1. Open `script.js`
2. Find line with `const whatsappNumber = '2349065829287';`
3. Replace with your number in format: `'country_code+number'`
   Example: `'2349065829287'` for Nigeria

### 4. Customize Content
All text content is easily editable in `index.html`:
- Course names and descriptions
- Pricing details
- Course topics
- Statistics
- Footer information

## 🚀 How to Deploy

### Local Testing
1. Open `index.html` in any modern web browser
2. Or use VS Code Live Server extension
3. Test on mobile, tablet, and desktop

### Online Deployment

**Option 1: GitHub Pages (Free)**
1. Create GitHub account
2. Create new repository `devvault-landing`
3. Upload these files
4. Enable GitHub Pages in settings
5. Your site: `https://yourusername.github.io/devvault-landing`

**Option 2: Netlify (Free)**
1. Go to netlify.com
2. Drag and drop the folder
3. Your site is live instantly

**Option 3: Vercel (Free)**
1. Go to vercel.com
2. Import project
3. Deploy with one click

**Option 4: Custom Domain**
1. Register domain (namecheap.com, godaddy.com, etc.)
2. Deploy to Netlify/Vercel/GitHub Pages
3. Connect your custom domain
4. Done!

## ✨ How WhatsApp Form Works

1. User fills out the application form
2. Clicks "Send via WhatsApp"
3. Form data is compiled into a formatted message
4. Message is sent to your WhatsApp number via WhatsApp Web
5. You receive all their information organized clearly

**Message includes:**
- Full name, email, phone
- Country & experience level
- Selected courses
- Personal goals/message
- Submission timestamp

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 479px
- **Tablet**: 480px - 768px
- **Desktop**: 769px+
- **Large Desktop**: 1024px+

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Media Queries, Animations
- **JavaScript**: ES6+, Intersection Observer, Fetch API
- **Icons**: Font Awesome 6.4
- **No Dependencies**: Pure vanilla JS & CSS (super fast!)

## ⚡ Performance

- Page Load: < 2 seconds
- No external dependencies (except Font Awesome icons)
- Optimized animations
- Mobile-first design
- SEO friendly

## 🎓 Courses Included

### Frontend Development
1. HTML & CSS Mastery
2. JavaScript Fundamentals
3. React & Modern Frameworks
4. UI/UX Design Principles
5. Advanced Styling & Animations
6. Responsive Web Development

### Backend Development
1. Node.js & Express
2. Database Design & SQL
3. MongoDB & NoSQL
4. Cloud Deployment & DevOps
5. Security & Authentication
6. API Development & Integration

## 📞 Support Resources

- **WhatsApp**: +234 9065829287
- **TikTok**: @dev_vault
- **Twitter**: (Add your link)

## 🎨 Color Scheme

Primary Blue: `#6366f1`
Secondary Pink: `#ec4899`
Success Green: `#10b981`
Dark Background: `#0f172a`
Light Background: `#f8fafc`

## 📝 Notes

- All form submissions go directly to WhatsApp
- No backend server required
- Fully static site (can be hosted anywhere)
- Keep Image/logo.png for branding

## 🚀 Future Enhancements

Consider adding:
- Blog section for coding tutorials
- Student testimonials carousel
- FAQ section
- Live chat widget
- Email integration
- Payment gateway (for automatic enrollment)

---

**Made with ❤️ for DEV VAULT Learning**

Questions? Contact us via WhatsApp: +234 9065829287