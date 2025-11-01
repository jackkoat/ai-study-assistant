# Deployment Guide - GitHub Pages

## 🚀 Deploy Your AI Study Assistant for Free

### Option 1: Quick Deployment (Standalone)

1. **Go to your repository**: https://github.com/jackkoat/ai-study-assistant

2. **Navigate to Settings**:
   - Click the "Settings" tab
   - Scroll down to "Pages" in the left sidebar

3. **Deploy from branch**:
   - Source: "Deploy from a branch"
   - Branch: Select "main"
   - Folder: "/ (root)" or "/standalone"

4. **Access your live site**:
   - Wait 2-5 minutes for deployment
   - URL will be: `https://jackkoat.github.io/ai-study-assistant/`
   - For standalone: `https://jackkoat.github.io/ai-study-assistant/standalone/`

### Option 2: Full Next.js Deployment

For the Next.js version, you'll need to:
1. Build the project: `npm run build`
2. Deploy the `out` folder to GitHub Pages
3. Configure `next.config.js` for static export

### Sharing Your Live Site

Once deployed, share this URL with friends:
- **Main site**: https://jackkoat.github.io/ai-study-assistant/
- **Standalone**: https://jackkoat.github.io/ai-study-assistant/standalone/

### Alternative Free Hosting Platforms

**Netlify (Recommended)**
- Go to netlify.com
- Drag & drop your `standalone` folder
- Instant deployment with custom URL

**Vercel**
- Go to vercel.com
- Import from GitHub
- Automatic deployment

**Firebase Hosting**
- Go to console.firebase.google.com
- Create new project
- Deploy hosting

### Pro Tips
- ✅ Always test your deployment before sharing
- ✅ Provide both desktop and mobile URLs
- ✅ Add a custom domain (optional)
- ✅ Set up analytics to see who's using it