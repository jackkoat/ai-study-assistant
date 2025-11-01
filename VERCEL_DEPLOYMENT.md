# Vercel Deployment Guide

## 🌟 Deploy Your AI Study Assistant to Vercel

### 🎯 Why Vercel?
- ✅ **Free hosting** with global CDN
- ✅ **Automatic deployments** from GitHub
- ✅ **Custom domains** support
- ✅ **Perfect for both** standalone and Next.js versions
- ✅ **Automatic HTTPS** SSL certificates
- ✅ **Instant global access** worldwide

---

## 📁 Option 1: Deploy Standalone Version (Easiest)

### Step 1: Prepare Your Files
```bash
# Your standalone version is ready at:
📁 standalone/index.html
```

### Step 2: Create Vercel Account
1. **Go to**: https://vercel.com
2. **Click**: "Sign Up" (use GitHub/Google)
3. **Sign in** with your GitHub account

### Step 3: Import from GitHub
1. **Click**: "New Project"
2. **Import**: https://github.com/jackkoat/ai-study-assistant
3. **Select**: Your repository
4. **Choose**: "Other" (for standalone)
5. **Build Command**: Leave empty
6. **Output Directory**: Leave empty
7. **Install Command**: Leave empty
8. **Click**: "Deploy"

### Step 4: Configure for Static Files
Since this is a standalone version, we need to configure Vercel properly:

**After deployment, update `vercel.json`:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "standalone/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/standalone/$1"
    }
  ]
}
```

---

## ⚡ Option 2: Deploy Next.js Version (Advanced)

### Step 1: Prepare Next.js Configuration
**Edit `nextjs/next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  basePath: '',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
```

### Step 2: Environment Variables Setup
**Create `.env.local` in nextjs folder:**
```bash
OPENAI_API_KEY=your_actual_openai_api_key_here
NEXT_PUBLIC_DEMO_MODE=false
```

### Step 3: Deploy to Vercel
1. **Go to**: https://vercel.com
2. **New Project**
3. **Import**: https://github.com/jackkoat/ai-study-assistant
4. **Framework Preset**: Next.js
5. **Root Directory**: `nextjs`
6. **Build Command**: `npm run build`
7. **Output Directory**: `out`
8. **Install Command**: `npm install`

### Step 4: Environment Variables in Vercel
1. **Go to**: Project Settings → Environment Variables
2. **Add**:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `NEXT_PUBLIC_DEMO_MODE`: `false`

---

## 🎨 Option 3: Hybrid Approach (Recommended)

**Deploy both versions for maximum flexibility:**

### Root Level (Main Site)
- **Standalone version** as main entry point
- **Easy sharing** with just URL

### Subdomain
- **Next.js version** for advanced users
- **Better SEO** and performance

---

## 🔧 Advanced Configuration

### Custom Domain Setup
1. **Go to**: Project Settings → Domains
2. **Add Domain**: your-custom-name.vercel.app
3. **Or connect**: your own domain
4. **SSL**: Automatically provisioned

### Performance Optimization
```json
// vercel.json for advanced config
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/",
      "destination": "/standalone/",
      "statusCode": 301
    }
  ]
}
```

---

## 📱 Mobile Optimization

### Responsive Design Checklist
- ✅ **Viewport meta tag** - Already included
- ✅ **Touch-friendly buttons** - 44px minimum
- ✅ **Readable fonts** - 16px minimum on mobile
- ✅ **Fast loading** - Optimized assets
- ✅ **Offline ready** - Works without connection

### Progressive Web App (PWA)
**Add `manifest.json` to standalone:**
```json
{
  "name": "AI Study Assistant",
  "short_name": "AI Tutor",
  "description": "Your intelligent study companion",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F3F4F6",
  "theme_color": "#007AFF",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🚀 Deployment Checklist

### Before Deploying
- [ ] Test locally in browser
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Add OpenAI API key (if using real AI)
- [ ] Choose deployment method (standalone vs Next.js)

### After Deploying
- [ ] Test the live URL
- [ ] Check on mobile devices
- [ ] Verify all subjects work
- [ ] Test chat functionality
- [ ] Share with friends!

---

## 🔍 Monitoring & Analytics

### Vercel Analytics
1. **Enable**: Project Settings → Analytics
2. **Track**: Page views, performance, errors
3. **Monitor**: User engagement

### Google Analytics (Optional)
**Add to `standalone/index.html` (before closing `</head>`):**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🆘 Troubleshooting

### Common Issues

**Build Fails**
- Check `package.json` dependencies
- Verify Node.js version compatibility
- Look at build logs in Vercel

**Environment Variables Not Working**
- Ensure they're set in Vercel dashboard
- Check variable names match exactly
- Redeploy after adding new variables

**Images Not Loading**
- Add `images: { unoptimized: true }` to Next.js config
- Check image paths are relative

**Routing Issues**
- Use `trailingSlash: true` in Next.js config
- Add `vercel.json` redirects for custom routing

### Getting Help
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Guide**: https://nextjs.org/docs
- **GitHub Issues**: https://github.com/jackkoat/ai-study-assistant/issues

---

## 🎉 Success Metrics

After deployment, you should have:
- ✅ **Working URL**: `https://your-app.vercel.app`
- ✅ **Mobile responsive**: Works on all devices
- ✅ **Fast loading**: Under 3 seconds
- ✅ **Professional domain**: Custom domain option
- ✅ **Global CDN**: Worldwide performance

**Ready to deploy? Let's do it!**