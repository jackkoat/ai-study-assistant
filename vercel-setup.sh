# Quick Vercel Deployment Script

echo "🚀 Quick Vercel Deployment Helper"
echo "=================================="
echo ""

echo "🎯 Choose your deployment approach:"
echo ""
echo "1) 📄 Standalone Version (Recommended for beginners)"
echo "   - Just one HTML file"
echo "   - No build process needed"
echo "   - Works immediately"
echo ""
echo "2) ⚡ Next.js Version (Advanced)"
echo "   - Full React application"
echo "   - Real OpenAI API integration"
echo "   - Professional development setup"
echo ""
echo "3) 🔧 Hybrid Setup (Both versions)"
echo "   - Standalone as main"
echo "   - Next.js as advanced"
echo ""

read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📄 Preparing standalone version for Vercel..."
        echo ""
        
        # Create vercel configuration
        cat > vercel.json << 'EOF'
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
EOF

        echo "✅ Created vercel.json configuration"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to: https://vercel.com"
        echo "2. Sign in with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Import: https://github.com/jackkoat/ai-study-assistant"
        echo "5. Choose 'Other' framework"
        echo "6. Deploy!"
        echo ""
        echo "🎉 Your site will be live at:"
        echo "   https://your-app-name.vercel.app"
        ;;
        
    2)
        echo ""
        echo "⚡ Preparing Next.js version for Vercel..."
        echo ""
        
        # Update Next.js config for static export
        cat > nextjs/next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
EOF

        # Create vercel.json for Next.js
        cat > vercel-nextjs.json << 'EOF'
{
  "builds": [
    {
      "src": "nextjs/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/nextjs/$1"
    }
  ]
}
EOF

        echo "✅ Updated Next.js configuration for static export"
        echo "✅ Created Vercel configuration for Next.js"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to: https://vercel.com"
        echo "2. Sign in with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Import: https://github.com/jackkoat/ai-study-assistant"
        echo "5. Framework Preset: Next.js"
        echo "6. Root Directory: nextjs"
        echo "7. Build Command: npm run build"
        echo "8. Output Directory: out"
        echo ""
        echo "🔑 Don't forget to add your OpenAI API key in:"
        echo "   Project Settings → Environment Variables"
        echo ""
        echo "🎉 Your Next.js app will be live at:"
        echo "   https://your-app-name.vercel.app"
        ;;
        
    3)
        echo ""
        echo "🔧 Setting up hybrid deployment..."
        echo ""
        
        # Create main vercel.json
        cat > vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "standalone/**",
      "use": "@vercel/static"
    },
    {
      "src": "nextjs/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/",
      "dest": "/standalone/"
    },
    {
      "src": "/standalone/(.*)",
      "dest": "/standalone/$1"
    },
    {
      "src": "/app/(.*)",
      "dest": "/nextjs/$1"
    },
    {
      "src": "/nextjs/(.*)",
      "dest": "/nextjs/$1"
    }
  ]
}
EOF

        echo "✅ Created hybrid Vercel configuration"
        echo ""
        echo "📋 URL Structure:"
        echo "   Main: https://your-app.vercel.app"
        echo "   Advanced: https://your-app.vercel.app/app"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to: https://vercel.com"
        echo "2. Sign in with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Import: https://github.com/jackkoat/ai-study-assistant"
        echo "5. Choose 'Other' framework"
        echo "6. Deploy!"
        echo ""
        echo "🎉 Hybrid deployment ready!"
        ;;
        
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "📚 Additional resources:"
echo "   • VERCEL_DEPLOYMENT.md - Complete guide"
echo "   • QUICK_SHARING.md - Sharing strategies"
echo ""
echo "🌟 Pro tips:"
echo "   • Add custom domain in Project Settings"
echo "   • Enable Analytics for usage tracking"
echo "   • Set up environment variables for Next.js version"
echo ""
echo "🎓 Ready to deploy! Happy coding!"