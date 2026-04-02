# ⚡ DEV VAULT - Quick Setup Guide

## 🎯 What You Have

Your landing page is complete with:
- ✅ Professional homepage
- ✅ 12 detailed courses (Frontend & Backend)
- ✅ Dynamic pricing for Nigeria & International
- ✅ WhatsApp form integration
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Social media links (TikTok: @dev_vault)
- ✅ Beautiful animations and transitions

## 🚀 Next Steps (IMPORTANT)

### STEP 1: Add Your School Logo ⭐
1. Find your school/business logo image
2. Place it in the `Image/` folder
3. Rename it to `logo.png` (or update the filename in index.html)
4. Logo will automatically appear in navigation and footer

📌 **Logo Tips:**
- Use PNG with transparent background (preferred)
- Size: 200x200px works great
- Keep file size under 100KB

### STEP 2: Add Twitter Link
Once you create your Twitter account:
1. Open `index.html` (line ~400)
2. Find: `<a href="#" target="_blank" title="Twitter" id="twitterLink"...`
3. Replace `#` with your Twitter URL
4. Example: `https://twitter.com/devvaultlearning`

OR use the update function in console:
```javascript
updateTwitterLink('https://twitter.com/yourprofile');
```

### STEP 3: Test Everything
1. Open `index.html` in your browser
2. ✅ Test on mobile (phone size)
3. ✅ Test on tablet (iPad size)
4. ✅ Test on desktop
5. ✅ Fill out form and verify WhatsApp message
6. ✅ Click all social media links

### STEP 4: Deploy Online
Choose one method:

**🟢 EASIEST - Netlify (Recommended)**
1. Go to netlify.com
2. Sign up free
3. Drag & drop your DEV-VAULT folder
4. Done! You have a live link

**🔵 GitHub Pages**
1. Create GitHub account
2. New repository named `devvault`
3. Upload these files
4. Settings → Pages → Enable
5. Your site: github.com/username/devvault

**🟠 Vercel**
1. Go to vercel.com
2. Import your project
3. Click Deploy
4. Done!

## 📋 Checklist Before Launch

- [ ] Logo added to Image/ folder
- [ ] Twitter link updated or set to hide
- [ ] WhatsApp number verified (+234 9065829287)
- [ ] All course descriptions are accurate
- [ ] Pricing is correct
- [ ] Tested on mobile device
- [ ] Tested on tablet device
- [ ] Tested on desktop
- [ ] Form submission works
- [ ] Social media links work
- [ ] Site deployed online

## 💬 WhatsApp Integration

When someone fills the form:
1. They see "Preparing your application..."
2. Form data opens WhatsApp Web
3. Message appears in chat
4. They click Send
5. You receive formatted application

**What you receive:**
```
🎓 NEW DEV VAULT APPLICATION 🎓

Personal Information:
📝 Name: John Doe
📧 Email: john@example.com
📱 WhatsApp: +234 9012345678
🌍 Country: Nigeria
💡 Experience Level: Intermediate

Interested Courses:
1. React & Modern Frameworks
2. Node.js & Express

Goals & Message:
I want to become a full-stack developer...
```

## 📱 Mobile Optimization

Your site is optimized for:
- **iPhone**: 375px wide
- **Android**: 360px - 480px wide
- **iPad**: 768px wide
- **Desktop**: 1024px+

Everything automatically adjusts!

## 🎨 Customizing Content

Edit these files with any text editor:

**To change course names:**
→ Open `index.html` → Find "Frontend Development" section

**To change pricing:**
→ Open `index.html` → Find "Pricing Plans" section

**To change colors (advanced):**
→ Open `styles.css` → Find `:root` variables at top

## ⚙️ Current Settings

- **WhatsApp Number**: +234 9065829287 ✅
- **TikTok Link**: @dev_vault ✅
- **Twitter Placeholder**: Ready for your link ⏳
- **Frontend Price**: $50 / ₦70k ✅
- **Backend Price**: $100 / ₦130k ✅
- **Full Stack Price**: $140 / ₦190k ✅

## 🔗 Social Links Included

- ✅ **WhatsApp**: +234 9065829287
- ✅ **TikTok**: https://www.tiktok.com/@dev_vault
- ⏳ **Twitter**: Add your link (instructions above)

## 📞 Common Questions

**Q: Can I change the WhatsApp number?**
A: Yes, edit line in script.js: `const whatsappNumber = '234...'`

**Q: How do I add more courses?**
A: Find course section in index.html, duplicate a course card, edit the content

**Q: Can I change colors?**
A: Yes, edit the variables in styles.css (line ~5)

**Q: Will it work on old phones?**
A: Yes! Works on all modern browsers (iOS Safari, Chrome, Firefox)

**Q: Can I add payment gateway later?**
A: Yes! You can add Stripe, PayStack, or Flutterwave later

**Q: Is my data secure?**
A: Form data goes directly to WhatsApp, no server storage

## 🎯 Marketing Tips

1. **Facebook**: Share your site link
2. **Instagram**: Add link in bio, showcase courses
3. **LinkedIn**: Professional community engagement
4. **TikTok**: Behind-the-scenes coding content
5. **WhatsApp**: Share link in status

## 🐛 Troubleshooting

**Logo not showing?**
→ Check file is named `logo.png` in `Image/` folder

**WhatsApp not opening?**
→ Make sure you're on desktop or have WhatsApp Web enabled

**Form not submitting?**
→ Check all required fields are filled
→ Check internet connection
→ Try different browser

**Site looks broken on mobile?**
→ Clear browser cache (Ctrl+Shift+Delete)
→ Try a different browser
→ Check internet connection

## 📞 Support

Questions about the website?
- WhatsApp: +234 9065829287
- TikTok: @dev_vault
- Twitter: (Your link here)

---

**Your site is ready!** 🎉

Next: Add logo → Add Twitter link → Deploy → Share with world! 🚀