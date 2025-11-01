// Demo API route that doesn't require external API calls
// This provides instant functionality for testing and development

import { NextRequest, NextResponse } from 'next/server'

// Subject-specific demo responses
const demoResponses = {
  mathematics: [
    "Great question about mathematics! Let me walk you through this step by step. Mathematics is all about patterns and logical reasoning. What specific area would you like to explore - algebra, calculus, geometry, or perhaps statistics?",
    "I love helping with math! Let's break this down. Start by identifying what type of problem it is, then apply the appropriate method. Show me your problem and I'll guide you through the solution process!",
    "Mathematics builds on itself, so it's important to understand the fundamentals first. Are you working on a specific concept, or would you like me to explain a particular mathematical principle?"
  ],
  science: [
    "Science is all about understanding how the world works! Whether it's physics, chemistry, or biology, we can explore the underlying principles together. What specific scientific topic interests you?",
    "Let me help you understand this scientific concept! Science uses observation, experimentation, and analysis. What's the specific area you'd like to explore?",
    "Great scientific question! We can approach this by looking at the fundamental principles and then applying them to your specific question. What aspect would you like to start with?"
  ],
  literature: [
    "Literature analysis is such an enriching experience! We can explore themes, character development, literary devices, and historical context together. What text or author would you like to discuss?",
    "I love diving into literature! Let's analyze this together by looking at the text more closely. What specific element catches your attention - plot, character, theme, or style?",
    "Literature offers endless opportunities for interpretation and analysis. What work are you studying, and what particular aspect would you like to explore?"
  ],
  history: [
    "History is a story of human experiences! We can explore cause and effect, understand different perspectives, and connect past events to the present. What period or event interests you?",
    "Understanding history helps us make sense of the world today. Let's explore this historical topic together by examining the key events, people, and factors involved.",
    "History is full of fascinating stories and important lessons. What historical period or event would you like to explore in more detail?"
  ],
  programming: [
    "Programming is about solving problems systematically! Whether you're debugging code, learning new concepts, or building something new, I'm here to help. What programming challenge are you facing?",
    "Let's work through this programming problem together! The key is to break it down into smaller, manageable steps. What language are you using, and what specifically would you like help with?",
    "Programming is both an art and a science! We can explore algorithms, best practices, debugging strategies, and design patterns. What programming topic interests you most?"
  ]
}

const fallbackResponses = [
  "That's a thoughtful question! Let me help you think through this step by step. What specific aspect would you like to explore further?",
    "I'm here to help you learn! Could you provide a bit more context about what you're trying to understand?",
    "Great question! Learning is most effective when we break complex topics into smaller, digestible pieces. What would you like to focus on first?",
    "I'd be happy to explain that concept! Let's approach it from different angles to make sure you have a solid understanding.",
    "That's exactly the kind of thinking that leads to deep learning! Let's explore this together and build your understanding step by step."
]

export async function POST(request: NextRequest) {
  try {
    const { message, subject, conversationHistory } = await request.json()

    if (!message || !subject) {
      return NextResponse.json(
        { error: 'Message and subject are required' },
        { status: 400 }
      )
    }

    // Simulate API delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    // Get appropriate demo responses for the subject
    const subjectResponses = demoResponses[subject as keyof typeof demoResponses]
    const responses = subjectResponses || fallbackResponses

    // Select a random response
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    return NextResponse.json({ response: randomResponse })

  } catch (error) {
    console.error('Demo chat API error:', error)
    
    return NextResponse.json({
      response: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment!"
    })
  }
}