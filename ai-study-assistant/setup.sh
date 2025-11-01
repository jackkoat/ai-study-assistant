#!/bin/bash

# AI Study Assistant Setup Script
echo "🚀 Setting up AI Study Assistant..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if ! node -p "require('semver').gte('$NODE_VERSION', '$REQUIRED_VERSION')" 2>/dev/null; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 18+."
    exit 1
fi

echo "✅ Node.js version $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Setup environment variables
if [ ! -f .env.local ]; then
    echo "⚙️  Setting up environment variables..."
    cp .env.example .env.local
    echo "✅ Created .env.local from template"
    echo "🔑 Please add your OpenAI API key to .env.local:"
    echo "   OPENAI_API_KEY=your_api_key_here"
else
    echo "✅ Environment file already exists"
fi

# Check if TypeScript compilation works
echo "🔧 Checking TypeScript configuration..."
if command -v npx &> /dev/null; then
    npx tsc --noEmit
    if [ $? -eq 0 ]; then
        echo "✅ TypeScript configuration is valid"
    else
        echo "⚠️  TypeScript configuration has issues"
    fi
fi

echo ""
echo "🎉 Setup complete! Here's what's next:"
echo ""
echo "1. 📝 Add your OpenAI API key to .env.local"
echo "   Get one from: https://platform.openai.com/api-keys"
echo ""
echo "2. 🏃‍♂️ Start the development server:"
echo "   npm run dev"
echo "   or"
echo "   yarn dev"
echo ""
echo "3. 🌐 Open http://localhost:3000 in your browser"
echo ""
echo "4. 🎯 Try the demo mode first (toggle in the chat interface)"
echo "   Then switch to real AI mode once you have your API key"
echo ""
echo "Happy learning! 🎓"