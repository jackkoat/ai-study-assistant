import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client (you'll need to set OPENAI_API_KEY in your environment)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Subject-specific system prompts
const subjectPrompts = {
  mathematics: `You are an expert mathematics tutor. Help students understand mathematical concepts step by step. Provide clear explanations, work through problems systematically, and offer multiple solution methods when appropriate. Always verify your calculations and encourage critical thinking.`,
  science: `You are a knowledgeable science tutor specializing in physics, chemistry, and biology. Explain scientific concepts using real-world examples, encourage hypothesis formation, and guide students through the scientific method. Break down complex topics into digestible parts.`,
  literature: `You are a literature tutor who helps students analyze texts, understand themes, character development, and literary devices. Encourage close reading, discuss historical context, and help students develop their own interpretations while supporting claims with textual evidence.`,
  history: `You are a history tutor who makes the past come alive. Connect historical events to present-day situations, encourage critical thinking about cause and effect, and help students understand multiple perspectives on historical events. Use storytelling to make history engaging.`,
  programming: `You are a programming tutor who helps students understand coding concepts, debug issues, and learn best practices. Provide clear explanations with code examples, suggest improvements, and encourage good software development habits. Adapt explanations to the student's skill level.`,
}

export async function POST(request: NextRequest) {
  try {
    const { message, subject, conversationHistory } = await request.json()

    if (!message || !subject) {
      return NextResponse.json(
        { error: 'Message and subject are required' },
        { status: 400 }
      )
    }

    // Get the appropriate system prompt for the subject
    const systemPrompt = subjectPrompts[subject as keyof typeof subjectPrompts] || 
      subjectPrompts.mathematics

    // Convert conversation history to OpenAI format
    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ]

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    })

    const response = completion.choices[0]?.message?.content || 
      'I apologize, but I encountered an issue generating a response. Please try again.'

    return NextResponse.json({ response })

  } catch (error) {
    console.error('Chat API error:', error)
    
    // Fallback responses for development/demo purposes
    const fallbackResponses = {
      mathematics: "I'd be happy to help with your math question! Could you provide more details about the specific concept or problem you're working on?",
      science: "That's a great science question! Let's break it down step by step. What aspect would you like to explore first?",
      literature: "I'd love to discuss literature with you! What text or concept would you like to analyze?",
      history: "History is fascinating! Which period or event interests you? I can help you understand the context and significance.",
      programming: "Let's solve this coding challenge together! What programming language are you using, and what's the specific issue?",
      default: "That's an interesting question! Could you tell me more about what you're trying to understand?"
    }

    const fallbackResponse = fallbackResponses[subject as keyof typeof fallbackResponses] || 
      fallbackResponses.default

    return NextResponse.json({ response: fallbackResponse })
  }
}