# AI Study Assistant

An intelligent study companion that provides personalized tutoring across multiple subjects using artificial intelligence. This project demonstrates modern web development with AI integration.

## 🚀 Live Demo

**Simple Version:** Open `standalone/index.html` in any web browser - works immediately with no setup required!

**Full Version:** Requires Node.js 20+ for the complete Next.js development environment.

## 📚 Subjects Available

- **Mathematics** - Algebra, calculus, statistics, and more
- **Science** - Physics, chemistry, biology explanations  
- **Literature** - Analysis, writing guidance, literary concepts
- **History** - Historical events, timelines, contextual analysis
- **Programming** - Code review, debugging, concept explanation

## 🏗️ Project Structure

```
ai-study-assistant/
├── standalone/                 # 🌐 Simple HTML version (works immediately)
│   └── index.html             # Complete app in one file
├── nextjs/                    # ⚡ Advanced Next.js version
│   ├── app/                   # Next.js 14 App Router
│   ├── components/            # React components
│   ├── lib/                   # Utility functions
│   ├── package.json          # Dependencies
│   └── README.md             # Next.js specific guide
├── README.md                  # This file
└── setup.sh                  # Quick setup script
```

## 🛠️ Tech Stack

### Standalone Version
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first styling (via CDN)

### Next.js Version
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Custom design system
- **OpenAI API** - AI integration
- **Prisma** - Database ORM (ready for expansion)

## 🚀 Quick Start

### Option 1: Simple Version (Recommended for Beginners)

1. **Download and Open**
   ```bash
   # Just open this file in your browser:
   standalone/index.html
   ```

2. **Try It Out**
   - Click on any subject card
   - Ask questions in the chat
   - Experience AI tutoring immediately!

### Option 2: Next.js Version (Full Development)

1. **Prerequisites**
   ```bash
   # Requires Node.js 20+ and npm
   node --version  # Should be 20+
   npm --version
   ```

2. **Setup**
   ```bash
   cd nextjs
   npm install
   ```

3. **Development**
   ```bash
   # Start development server
   npm run dev
   
   # Open http://localhost:3000
   ```

4. **Environment Setup**
   ```bash
   # Create .env.local file
   echo "OPENAI_API_KEY=your_api_key_here" > .env.local
   ```

## 🎨 Design System

### Color Palette
- **Primary:** `#007AFF` (Professional Blue)
- **Background:** `#F3F4F6` (Light Gray)
- **Surface:** `#FFFFFF` (White)
- **Text:** `#1F2937` (Dark Gray)

### Typography
- **Font:** Inter (Google Fonts)
- **Scale:** Major Third (1.25 ratio)
- **Grid:** 8px base unit system

### Components
- **Cards** - Subject selection interface
- **Chat** - Real-time conversation interface
- **Responsive** - Mobile-first design approach

## 🔧 Features

### Current Features
- ✅ Multi-subject AI tutoring
- ✅ Real-time chat interface
- ✅ Responsive design
- ✅ Subject-specific responses
- ✅ Loading states and error handling
- ✅ Auto-scrolling chat history

### Planned Features
- 🔄 Conversation persistence
- 🔄 User authentication
- 🔄 Progress tracking
- 🔄 Advanced AI models
- 🔄 Voice interaction
- 🔄 Export conversations

## 🧠 Learning Concepts Covered

### Frontend Development
- **React Components** - Reusable UI building blocks
- **State Management** - useState, useEffect hooks
- **Event Handling** - User interaction patterns
- **Responsive Design** - Mobile-first CSS techniques
- **API Integration** - Fetching data from backend

### Backend Integration
- **API Routes** - Serverless function patterns
- **Authentication** - Secure API key handling
- **Error Handling** - Robust error management
- **Performance** - Optimized rendering strategies

### AI Integration
- **OpenAI API** - Modern language model integration
- **Prompt Engineering** - Subject-specific system prompts
- **Streaming Responses** - Real-time AI communication
- **Context Management** - Conversation history handling

## 🔐 Security Considerations

- **API Keys** - Never expose keys in client-side code
- **Rate Limiting** - Implement request throttling
- **Input Validation** - Sanitize user inputs
- **CORS** - Proper cross-origin configuration

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

MIT License - feel free to use this project for learning and development!

## 🙏 Acknowledgments

- **OpenAI** - For providing accessible AI APIs
- **Next.js Team** - For the excellent React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Inter Font** - For the beautiful typography

## 📞 Support

- **Issues** - Report bugs via GitHub Issues
- **Discussions** - Join community discussions
- **Documentation** - Check individual README files in subdirectories

---

**Built with ❤️ for education and learning**

*This project demonstrates modern web development practices while making AI accessible for students worldwide.*