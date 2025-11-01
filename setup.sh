#!/bin/bash

# AI Study Assistant - Quick Setup Script
# This script helps you get started with both versions

echo "🎓 AI Study Assistant Setup"
echo "============================"
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "Choose your setup option:"
echo ""
echo "1) 🌐 Standalone Version (Simple - Works Immediately)"
echo "   - Just open standalone/index.html in your browser"
echo "   - No setup required!"
echo ""
echo "2) ⚡ Next.js Version (Advanced - Full Development)"
echo "   - Requires Node.js 20+"
echo "   - Full development environment"
echo "   - Real OpenAI API integration"
echo ""
echo "3) 🔧 Setup Next.js Development Environment"
echo "   - Install dependencies"
echo "   - Configure environment"
echo "   - Start development server"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Opening standalone version..."
        echo ""
        echo "✅ The standalone version is ready!"
        echo "📂 Open: standalone/index.html"
        echo "🚀 Just double-click the file or drag it into your browser!"
        echo ""
        echo "💡 Try asking questions like:"
        echo "   • 'Explain quadratic equations'"
        echo "   • 'What is photosynthesis?'"
        echo "   • 'How do I write a good essay?'"
        echo "   • 'What caused World War II?'"
        echo "   • 'How do I debug this Python code?'"
        ;;
    
    2)
        echo ""
        echo "⚡ Setting up Next.js version..."
        echo ""
        if ! command -v node &> /dev/null; then
            echo "❌ Node.js is not installed. Please install Node.js 20+ first:"
            echo "   https://nodejs.org/"
            exit 1
        fi
        
        node_version=$(node --version | cut -d'.' -f1 | sed 's/v//')
        if [ "$node_version" -lt "20" ]; then
            echo "❌ Node.js version $node_version detected. Please upgrade to Node.js 20+:"
            echo "   https://nodejs.org/"
            exit 1
        fi
        
        cd nextjs
        
        echo "📦 Installing dependencies..."
        npm install
        
        echo ""
        echo "🔧 Setting up environment..."
        if [ ! -f ".env.local" ]; then
            echo "📝 Creating .env.local file..."
            echo "# Add your OpenAI API key here" > .env.local
            echo "OPENAI_API_KEY=your_api_key_here" >> .env.local
            echo "⚠️  Don't forget to add your real API key to .env.local"
        fi
        
        echo ""
        echo "✅ Next.js setup complete!"
        echo ""
        echo "🚀 To start development:"
        echo "   cd nextjs"
        echo "   npm run dev"
        echo ""
        echo "🌐 Then open: http://localhost:3000"
        ;;
        
    3)
        echo ""
        echo "🔧 Setting up Next.js development environment..."
        echo ""
        
        if ! command -v node &> /dev/null; then
            echo "❌ Node.js is not installed. Please install Node.js 20+ first:"
            echo "   https://nodejs.org/"
            exit 1
        fi
        
        node_version=$(node --version | cut -d'.' -f1 | sed 's/v//')
        if [ "$node_version" -lt "20" ]; then
            echo "❌ Node.js version $node_version detected. Please upgrade to Node.js 20+:"
            echo "   https://nodejs.org/"
            exit 1
        fi
        
        cd nextjs
        
        echo "📦 Installing dependencies..."
        npm install
        
        echo ""
        echo "🔧 Setting up environment..."
        if [ ! -f ".env.local" ]; then
            echo "📝 Creating .env.local file..."
            echo "# Add your OpenAI API key here" > .env.local
            echo "OPENAI_API_KEY=your_api_key_here" >> .env.local
            echo "⚠️  Don't forget to add your real API key to .env.local"
        fi
        
        echo ""
        echo "🚀 Starting development server..."
        echo ""
        npm run dev
        ;;
        
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1, 2, or 3."
        exit 1
        ;;
esac

echo ""
echo "🎉 Setup complete! Happy learning!"
echo ""
echo "📚 Learn more:"
echo "   • README.md - Complete documentation"
echo "   • standalone/README.md - Standalone version guide"
echo "   • nextjs/README.md - Next.js development guide"
echo ""
echo "🔗 GitHub: https://github.com/jackkoat/ai-study-assistant"