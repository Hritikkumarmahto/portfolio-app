# Portfolio Setup Guide for Hritik Kumar Mahto

## ✅ What's Been Customized

Your portfolio has been fully customized with YOUR information:

### Personal Information
- ✅ Name: Hritik Kumar Mahto
- ✅ Location: Kishanganj, Bihar, India
- ✅ Email: hritikkumarmahto1985@gmail.com
- ✅ Phone: +91 96936 35492
- ✅ GitHub: github.com/Hritikkumarmahto
- ✅ LinkedIn: linkedin.com/in/hritik-kumar-mahto
- ✅ LeetCode: leetcode.com/u/Hritik-Kumar-Mahto

### Education & Experience
- ✅ BE Computer Science from Chandigarh University (2021-2025, CGPA: 7.4)
- ✅ Infosys Springboard Internship (Nov 2025 - Present)
- ✅ IEEE INNOCOMP 2024 Research Publication

### Projects (All 6 Projects Added)
1. ✅ NexGenCV – AI-Powered Resume Builder
2. ✅ Smart Inventory Management System
3. ✅ TechBlog Web Application
4. ✅ ApexWolf – Crypto Exchange Platform
5. ✅ Amazon Product Review Sentiment Analysis
6. ✅ Stock Price Prediction Model

### Skills
- ✅ Programming: Java, C++, JavaScript, SQL, Python
- ✅ Web Technologies: HTML5, CSS3, Bootstrap, JSP, Servlets, REST APIs
- ✅ Frameworks: Spring Boot, Spring MVC, React.js, JDBC, Hibernate
- ✅ Databases: MySQL, MongoDB
- ✅ Data Analytics: Excel, Power BI, Tableau
- ✅ Tools: Git, GitHub, VS Code, Eclipse, Maven, Jupyter Notebook

### Certifications (All Added)
- ✅ Meta Frontend Development (Coursera)
- ✅ Java Full-Stack Developer (Board Infinity)
- ✅ NLP & Machine Learning (Chandigarh University)
- ✅ Visual Analytics with Tableau
- ✅ SQL Intermediate (HackerRank)
- ✅ IEEE Research Publication (INNOCOMP 2024)

---

## 🚀 Quick Start (3 Simple Steps)

### Step 1: Extract the Files
```bash
# Extract the downloaded ZIP file
unzip portfolio-app-hritik.zip
cd portfolio-app
```

### Step 2: Start the Backend
```bash
# Open Terminal 1
cd backend
mvn clean install
mvn spring-boot:run

# Wait for: "Started PortfolioBackendApplication"
# Backend runs on: http://localhost:8080
```

### Step 3: Start the Frontend
```bash
# Open Terminal 2 (new window/tab)
cd frontend
npm install
npm start

# Browser opens automatically at: http://localhost:3000
```

---

## 📱 Your Portfolio Features

### Sections Included:
1. **Hero Section**
   - Your name prominently displayed
   - Role: Full Stack Developer
   - Brief introduction
   - Call-to-action buttons

2. **About Section**
   - Your complete profile summary
   - Stats: CGPA, LeetCode problems, Projects

3. **Skills Section**
   - All your technical skills organized by category
   - Interactive hover effects

4. **Projects Section**
   - All 6 major projects displayed
   - Tech stack badges
   - Links to GitHub

5. **Experience Section**
   - Infosys internship
   - Chandigarh University education
   - IEEE publication

6. **Certifications Section** ⭐ NEW
   - All your certifications with icons
   - Clickable links to certificates
   - Professional layout

7. **Contact Section**
   - Working contact form
   - Your email, phone, location
   - Links to GitHub, LinkedIn, LeetCode

---

## 🎨 Design Features

Your portfolio includes:
- ✅ Dark theme with cyan-purple-pink gradient
- ✅ Smooth scroll animations
- ✅ Floating cards with animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Interactive hover effects
- ✅ Professional typography (Space Grotesk + JetBrains Mono)
- ✅ Scroll progress indicator
- ✅ Mobile hamburger menu

---

## 📝 Testing Your Portfolio

### 1. Check All Sections
- [ ] Navigate through: Home, About, Skills, Projects, Experience, Contact
- [ ] Verify all your information is correct
- [ ] Check all links work (GitHub, LinkedIn, LeetCode)

### 2. Test Contact Form
- [ ] Scroll to Contact section
- [ ] Fill in: Name, Email, Message
- [ ] Click "Send Message"
- [ ] Should see: "Message sent successfully!"

### 3. Test Responsiveness
- [ ] Resize browser window
- [ ] Check on mobile (use DevTools: F12 → Toggle Device)
- [ ] Verify menu works on mobile

---

## 🔗 Project Links to Update

You should update these GitHub links in `frontend/src/App.jsx`:

```javascript
// Around line 75-120
const projects = [
  {
    title: "NexGenCV – AI-Powered Resume Builder",
    // Update this:
    link: "https://github.com/Hritikkumarmahto/nexgencv"
  },
  // ... update all project links
];
```

**Current links point to:** `https://github.com/Hritikkumarmahto`

**You should update to:** Your actual project repository URLs

---

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Frontend - FREE)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   cd frontend
   npm run build
   vercel --prod
   ```
4. Your portfolio will be live at: `https://your-name.vercel.app`

### Option 2: Deploy to Netlify (Frontend - FREE)

1. Create account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy:
   ```bash
   cd frontend
   npm run build
   netlify deploy --prod --dir=build
   ```

### Option 3: Deploy Backend to Render (FREE)

1. Create account at [render.com](https://render.com)
2. Push your backend code to GitHub
3. On Render:
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub repository
   - Build Command: `mvn clean package`
   - Start Command: `java -jar target/portfolio-backend-1.0.0.jar`
4. Add PostgreSQL database (free tier available)

---

## 💡 Pro Tips

### 1. Add Resume Download
Add a button in the About section to download your resume:
```jsx
<a href="/resume.pdf" download className="btn-primary">
  Download Resume
</a>
```

### 2. Update GitHub Project Links
Make sure all your projects are on GitHub with good README files

### 3. Add Google Analytics
Track visitors to your portfolio (optional)

### 4. SEO Optimization
- Update meta tags in `public/index.html`
- Add sitemap.xml
- Submit to Google Search Console

### 5. Custom Domain
Once deployed, you can add a custom domain like:
- `hritikmahto.com`
- `hritikkumar.dev`

---

## 📊 What Makes Your Portfolio Stand Out

1. **Complete Project Showcase** - All 6 major projects displayed
2. **Certifications Section** - Shows your continuous learning
3. **LeetCode Stats** - Highlights 250+ problems solved
4. **IEEE Publication** - Academic credibility
5. **Modern Design** - Professional dark theme
6. **Fully Responsive** - Perfect on all devices
7. **Working Contact Form** - Easy for recruiters to reach you

---

## 🎯 Next Steps

1. **Now:**
   - Run the portfolio locally
   - Verify all information is correct
   - Test all features

2. **Today:**
   - Update project links to actual GitHub repos
   - Add screenshots to your GitHub projects
   - Write good README files for each project

3. **This Week:**
   - Deploy frontend to Vercel/Netlify
   - Deploy backend to Render/Heroku
   - Share your portfolio link on LinkedIn

4. **Ongoing:**
   - Add new projects as you build them
   - Update certifications when you earn new ones
   - Keep LeetCode count updated

---

## 🆘 Need Help?

### Common Issues:

**Frontend won't start?**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

**Backend won't start?**
```bash
# Check Java version (need 17+)
java -version

# If correct version, try:
cd backend
mvn clean
mvn install
mvn spring-boot:run
```

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 8080
lsof -ti:8080 | xargs kill -9
```

---

## 📧 Contact Form Backend

The contact form sends data to your Spring Boot backend which stores it in a database.

**To view submitted messages:**
1. Go to: `http://localhost:8080/h2-console`
2. JDBC URL: `jdbc:h2:mem:portfoliodb`
3. Username: `sa`
4. Password: (leave empty)
5. Run: `SELECT * FROM contacts;`

---

## ✅ Final Checklist Before Deployment

- [ ] All personal information is correct
- [ ] All project links work
- [ ] All certificate links work
- [ ] Contact information is accurate
- [ ] Social media links are correct
- [ ] GitHub profile is updated
- [ ] LinkedIn profile is updated
- [ ] Resume is up-to-date
- [ ] All sections look good on mobile
- [ ] Contact form works properly

---

## 🎉 You're Ready!

Your portfolio is fully customized and ready to deploy. This is a professional, production-ready application that will impress recruiters and potential employers.

**Good luck with your job search! 🚀**

---

**Built with ❤️ specifically for Hritik Kumar Mahto**
**Stack: React + Spring Boot + MySQL**
