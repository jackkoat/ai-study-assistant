'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Send, Loader2, Zap } from 'lucide-react'

interface Subject {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  color: string
}

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  subject: Subject
  onBack: () => void
}

export default function ChatInterface({ subject, onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hello! I'm your ${subject.name} tutor. What would you like to learn about today?`,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Choose API endpoint based on demo mode
      const apiEndpoint = isDemoMode ? '/api/chat-demo' : '/api/chat'
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          subject: subject.id,
          conversationHistory: messages.slice(-10), // Send last 10 messages for context
        }),
      })

      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: data.response || 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="flex flex-col h-full bg-bg-page">
      {/* Header */}
      <div className="bg-bg-surface border-b border-neutral-200 px-xxl py-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-md">
            <button
              onClick={onBack}
              className="p-sm hover:bg-neutral-100 rounded-md transition-colors"
            >
              <ArrowLeft size={20} className="text-neutral-600" />
            </button>
            
            <div className="flex items-center gap-md">
              <div className={`w-10 h-10 ${subject.color} rounded-lg flex items-center justify-center`}>
                <subject.icon size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-card text-neutral-900 font-semibold">
                  {subject.name} Assistant
                </h1>
                <p className="text-small text-neutral-600">
                  Ask me anything about {subject.description.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
          
          {/* Demo Mode Toggle */}
          <div className="flex items-center gap-sm">
            <span className="text-small text-neutral-600">Demo Mode</span>
            <button
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${isDemoMode ? 'bg-primary-500' : 'bg-neutral-200'}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${isDemoMode ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
            <Zap size={16} className={`${isDemoMode ? 'text-primary-500' : 'text-neutral-400'}`} />
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-xxl chat-scroll">
        <div className="max-w-4xl mx-auto space-y-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-2xl px-lg py-md rounded-lg shadow-sm
                  ${message.type === 'user'
                    ? 'bg-bg-surface text-neutral-900 rounded-br-none'
                    : 'bg-primary-100 text-neutral-900 rounded-bl-none'
                  }
                `}
              >
                <p className="text-body whitespace-pre-wrap">
                  {message.content}
                </p>
                <p className="text-small text-neutral-600 mt-sm">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-primary-100 px-lg py-md rounded-lg rounded-bl-none shadow-sm">
                <div className="flex items-center gap-sm">
                  <Loader2 size={16} className="animate-spin text-primary-500" />
                  <span className="text-body text-neutral-900">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-bg-surface border-t border-neutral-200 p-xxl">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-sm">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Ask a question about ${subject.name}...`}
                className="w-full px-lg py-sm pr-16 border border-neutral-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-body"
                rows={1}
                style={{
                  minHeight: '56px',
                  maxHeight: '120px',
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement
                  target.style.height = 'auto'
                  target.style.height = Math.min(target.scrollHeight, 120) + 'px'
                }}
              />
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className={`
                px-lg py-sm rounded-md transition-all duration-200 ease-out
                ${inputMessage.trim() && !isLoading
                  ? 'bg-primary-500 text-white hover:bg-primary-700 active:scale-98'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }
              `}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}