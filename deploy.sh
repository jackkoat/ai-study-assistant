#!/bin/bash

# Quick GitHub Pages Deployment Script
# This script helps you deploy your AI Study Assistant to GitHub Pages

echo "🚀 GitHub Pages Deployment Helper"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "Choose your deployment option:"
echo ""
echo "1) 📁 Deploy Standalone Version (Recommended)"
echo "   - Simple, one-file deployment"
echo "   - Works immediately after upload"
echo "   - URL: https://yourusername.github.io/ai-study-assistant/"
echo ""
echo "2) 🔧 Deploy Next.js Version (Advanced)"
echo "   - Requires building the project"
echo "   - Full development environment"
echo "   - Better for learning, more complex"
echo ""
echo "3) 📱 Generate QR Code for Local Sharing"
echo "   - Share via QR code on same WiFi"
echo "   - Quick demonstration tool"
echo ""
echo "4) 📤 Export Files for Manual Upload"
echo "   - Prepare files for manual deployment"
echo "   - Netlify, Firebase, or custom hosting"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📁 Preparing standalone version for deployment..."
        
        # Create a deployment directory
        mkdir -p deployment
        cp -r standalone/* deployment/
        
        echo ""
        echo "✅ Deployment package created in 'deployment/' folder"
        echo ""
        echo "📋 Next steps for GitHub Pages:"
        echo "1. Go to: https://github.com/jackkoat/ai-study-assistant"
        echo "2. Click 'Settings' tab"
        echo "3. Scroll to 'Pages' in left sidebar"
        echo "4. Select 'Deploy from a branch'"
        echo "5. Choose 'main' branch and '/ (root)' folder"
        echo "6. Click 'Save'"
        echo "7. Wait 2-5 minutes"
        echo "8. Your site will be live at:"
        echo "   https://jackkoat.github.io/ai-study-assistant/"
        echo ""
        echo "🎉 Ready to share with friends!"
        ;;
    
    2)
        echo ""
        echo "🔧 Deploying Next.js version..."
        
        if ! command -v node &> /dev/null; then
            echo "❌ Node.js is not installed. Please install Node.js 20+ first:"
            echo "   https://nodejs.org/"
            exit 1
        fi
        
        cd nextjs
        
        echo "📦 Installing dependencies..."
        npm install
        
        echo "🔨 Building project..."
        npm run build
        
        if [ -d "out" ]; then
            echo ""
            echo "✅ Next.js build successful!"
            echo ""
            echo "📁 Build files ready in 'nextjs/out/' directory"
            echo ""
            echo "📋 Next steps:"
            echo "1. Upload contents of 'out/' folder to your web server"
            echo "2. Or use deployment platforms:"
            echo "   - Netlify: Drag 'out' folder to netlify.com"
            echo "   - Vercel: Import from GitHub repository"
            echo "   - GitHub Pages: Upload to gh-pages branch"
            echo ""
            echo "💡 Note: Next.js version needs proper configuration for static hosting"
        else
            echo ""
            echo "⚠️  Build directory not found. Check Next.js configuration."
            echo "   You may need to configure static export in next.config.js"
        fi
        
        cd ..
        ;;
        
    3)
        echo ""
        echo "📱 Setting up QR code generation..."
        echo ""
        echo "🔧 Starting local server..."
        echo ""
        
        # Try different ports if default is taken
        for port in 3001 8080 8000 5000; do
            echo "Trying port $port..."
            if ! nc -z localhost $port 2>/dev/null; then
                echo "✅ Using port $port"
                break
            fi
        done
        
        if [ "$port" = "5000" ]; then
            echo "❌ All common ports are in use. Please close other servers or use manual method."
            exit 1
        fi
        
        echo ""
        echo "🚀 Server starting on port $port..."
        echo ""
        echo "📋 Instructions for your friends:"
        echo "1. Make sure you're on the same WiFi network"
        echo "2. Friends should go to:"
        echo "   http://$(hostname -I | awk '{print $1}'):$port/standalone/index.html"
        echo ""
        echo "🔗 To generate a QR code:"
        echo "- Search 'QR code generator' online"
        echo "- Enter the URL above"
        echo "- Share the QR code image"
        echo ""
        echo "⚡ Starting server..."
        echo "Press Ctrl+C to stop"
        echo ""
        
        cd standalone
        python3 -m http.server $port
        
        ;;
        
    4)
        echo ""
        echo "📤 Preparing files for manual deployment..."
        echo ""
        
        # Create a complete deployment package
        mkdir -p export-package
        
        # Copy standalone version
        echo "📁 Copying standalone version..."
        cp -r standalone/* export-package/
        
        # Create instructions
        echo "📝 Creating deployment instructions..."
        cat > export-package/DEPLOYMENT_INSTRUCTIONS.txt << EOF
AI Study Assistant - Deployment Instructions
===========================================

Files in this package:
- index.html (main application file)

Deployment Options:

1. GitHub Pages:
   - Create new repository
   - Upload all files to root
   - Enable GitHub Pages in settings
   - Choose 'Deploy from a branch' > 'main' > '/ (root)'

2. Netlify:
   - Go to netlify.com
   - Drag this entire folder to deployment area
   - Get instant live URL

3. Vercel:
   - Go to vercel.com
   - Import project from GitHub
   - Deploy automatically

4. Firebase Hosting:
   - Go to console.firebase.google.com
   - Create new project
   - Use 'firebase init hosting'
   - Deploy with 'firebase deploy'

5. Traditional Web Hosting:
   - Upload files to public_html or www directory
   - Access via your domain

Your live site will be available at the hosting platform's URL.

For support, visit: https://github.com/jackkoat/ai-study-assistant
EOF
        
        # Create zip file
        if command -v zip &> /dev/null; then
            echo "📦 Creating zip package..."
            cd export-package
            zip -r ../ai-study-assistant-deployment.zip .
            cd ..
            echo ""
            echo "✅ Deployment package created:"
            echo "   📁 export-package/ (folder)"
            echo "   📦 ai-study-assistant-deployment.zip"
            echo ""
            echo "📤 Share either:"
            echo "1. The 'export-package' folder"
            echo "2. The 'ai-study-assistant-deployment.zip' file"
        else
            echo ""
            echo "✅ Deployment folder created:"
            echo "   📁 export-package/"
            echo ""
            echo "📤 Share this folder with deployment instructions included"
        fi
        
        echo ""
        echo "🎉 Ready to deploy anywhere!"
        ;;
        
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1-4."
        exit 1
        ;;
esac

echo ""
echo "🎓 Happy sharing! Your friends will love your AI Study Assistant!"
echo ""
echo "📚 Need help? Check:"
echo "   • QUICK_SHARING.md - Detailed sharing guide"
echo "   • DEPLOYMENT.md - Complete deployment instructions"
echo "   • https://github.com/jackkoat/ai-study-assistant"