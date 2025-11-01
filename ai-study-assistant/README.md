# AI Study Assistant

A modern, intelligent tutoring platform that provides personalized learning experiences across multiple subjects using AI.

## 🚀 Features

- **Multi-Subject Support**: Mathematics, Science, Literature, History, and Programming
- **Interactive Chat Interface**: Real-time AI conversation with streaming responses
- **Responsive Design**: Beautiful, mobile-friendly interface
- **Progress Tracking**: Monitor your learning journey and streaks
- **Session Management**: Save and resume conversations
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **AI Integration**: OpenAI GPT-3.5-turbo
- **Icons**: Lucide React
- **Database**: Ready for Prisma integration (SQLite/PostgreSQL)
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-study-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### OpenAI API Setup
1. Sign up at [OpenAI](https://openai.com/)
2. Get your API key from the [API Keys page](https://platform.openai.com/api-keys)
3. Add it to your `.env.local` file

### Environment Variables
- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `DATABASE_URL`: Database connection string (optional, for future features)
- `NEXTAUTH_SECRET`: Secret for authentication (optional)

## 🎨 Design System

This project uses a custom design system built with Tailwind CSS:

### Colors
- **Primary**: `#007AFF` (Action Blue)
- **Neutral**: Warm gray palette for text and backgrounds
- **Semantic**: Success, Warning, Error colors

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Major Third ratio (1.25) for consistent sizing
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Components
- Reusable button styles (`.btn-primary`, `.btn-secondary`)
- Card components with hover animations
- Sidebar navigation with active states
- Chat interface with message bubbles

## 📁 Project Structure

```
ai-study-assistant/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── globals.css               # Global styles and design system
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── components/
│   ├── ChatInterface.tsx        # AI conversation interface
│   ├── Dashboard.tsx            # Main dashboard with subject selection
│   ├── Sidebar.tsx              # Navigation sidebar
│   └── SubjectCard.tsx          # Subject selection cards
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
This app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔮 Future Enhancements

- **User Authentication**: Login/signup functionality
- **Database Integration**: Save chat history and progress
- **Multiple AI Models**: Support for Claude, Gemini, etc.
- **File Upload**: Upload documents for AI analysis
- **Quiz Generation**: AI-powered practice questions
- **Progress Analytics**: Detailed learning insights
- **Voice Interface**: Speech-to-text and text-to-speech
- **Mobile App**: React Native version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help getting started:
1. Check the documentation above
2. Review the code comments for implementation details
3. Open an issue on GitHub

---

**Happy Learning! 🎓**