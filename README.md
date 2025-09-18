# Kamal Enterprises - Business Website

A modern, responsive business website for Kamal Enterprises built with HTML, CSS, and JavaScript. This website showcases the company's distribution business, team, and services.

## Features

✅ **Modern Design**: Clean, professional aesthetic with smooth animations  
✅ **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices  
✅ **Team Section**: Team member profiles with photos and social links  
✅ **Brand Showcase**: Display of trusted brands and partnerships  
✅ **Gallery**: Photo gallery showcasing company achievements  
✅ **Location Integration**: Google Maps embedded with office address  
✅ **Social Media Links**: Instagram, Facebook, WhatsApp integration  
✅ **Smooth Scrolling**: Enhanced user experience with smooth navigation  
✅ **Interactive Elements**: Hover effects, animations, and mobile menu  
✅ **Automatic Deployment**: GitHub Pages with automatic updates  

## Files Structure

```
├── index.html              # Main HTML file
├── styles.css              # CSS styling and responsive design
├── script.js               # JavaScript for interactivity
├── privacy-policy.html     # Privacy policy page
├── logo.png                # Company logo
├── image.png               # Hero section image
├── Fathersaab.png          # Team member photo
├── Yash.png                # Team member photo
├── brandlogos/             # Brand logo images
├── images/                 # Staff member photos
├── Gallery/                # Gallery images
├── .github/workflows/      # GitHub Actions for deployment
├── CNAME                   # Custom domain configuration
└── README.md               # This file
```

## Customization Guide

### 1. Business Information
Update the following in `index.html`:
- Company name: Search for "Kamal Business Solutions"
- Contact details: Phone numbers, email addresses
- Office address: Update the address in location section
- Team member information: Names, roles, and bios

### 2. Social Media Links
In `script.js`, update the social media URLs:
- Facebook: `https://facebook.com/kamalbusiness`
- Instagram: `https://instagram.com/kamalbusiness`
- WhatsApp: Phone number in the script
- LinkedIn: `https://linkedin.com/company/kamalbusiness`
- Twitter: `https://twitter.com/kamalbusiness`

### 3. Google Form Integration
Replace the Google Form iframe in `index.html`:
```html
<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
        width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
```

### 4. Google Maps Location
Update the Google Maps iframe in `index.html` with your actual location coordinates.

### 5. Team Photos
Replace the Unsplash image URLs with your actual team photos:
- Update the `src` attributes in the team member image tags
- Recommended size: 300x300px for best results

### 6. Colors and Branding
In `styles.css`, you can customize:
- Primary color: `#3498db` (blue)
- Secondary color: `#2c3e50` (dark blue)
- Accent color: `#667eea` (purple)
- Background gradients and other styling

## Deployment & GitHub Pages Setup

### Automatic Deployment with GitHub Pages

This website is configured for automatic deployment using GitHub Pages. Here's how to set it up:

#### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Name your repository (e.g., `kamal-enterprises-website`)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

#### 2. Upload Your Files
1. Open Command Prompt/Terminal in your project folder
2. Run these commands:
```bash
git init
git add .
git commit -m "Initial commit - Kamal Enterprises website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kamal-enterprises-website.git
git push -u origin main
```

#### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Your site will be available at: `https://YOUR_USERNAME.github.io/kamal-enterprises-website`

#### 4. Custom Domain Setup
1. In your repository, go to Settings > Pages
2. Under "Custom domain", enter: `kamalenterprises.in`
3. Check "Enforce HTTPS"
4. Update your domain's DNS settings to point to GitHub Pages

#### 5. Automatic Updates
- Every time you push changes to the `main` branch, your website will automatically update
- The GitHub Action workflow (`.github/workflows/deploy.yml`) handles the deployment
- Changes typically go live within 1-2 minutes

### Local Development
1. **Local Testing**: Simply open `index.html` in your web browser
2. **Live Server**: Use VS Code Live Server extension for real-time preview
3. **File Changes**: Edit files locally, then push to GitHub for automatic deployment

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Features

- Optimized images and CSS
- Smooth animations and transitions
- Mobile-first responsive design
- Fast loading times
- SEO-friendly structure

## Contact Information

**Kamal Enterprises**
- **Address**: New Kotwali, Bajaj Road, Tabela Road, Sikar, Rajasthan – 332001, India
- **Phone**: +91 7878513050
- **Email**: kamalenterprises31082000@gmail.com
- **Website**: kamalenterprises.in
- **Hours**: 7 Days a Week | 10 AM – 9 PM
- **Support**: 24×7 Call/WhatsApp Support

## Quick Start Commands

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update website content"
git push
```

---

**Note**: This website is ready for deployment! Just follow the GitHub Pages setup instructions above.
