'use client'

import { useState } from 'react'
import SubjectCard from './SubjectCard'
import ChatInterface from './ChatInterface'
import { 
  Calculator, 
  Atom, 
  BookOpen, 
  Clock, 
  Code, 
  ChevronLeft 
} from 'lucide-react'

interface Subject {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  color: string
}

const subjects: Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Algebra, Calculus, Statistics & More',
    icon: Calculator,
    color: 'bg-blue-500',
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Physics, Chemistry, Biology',
    icon: Atom,
    color: 'bg-green-500',
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Reading, Writing, Analysis',
    icon: BookOpen,
    color: 'bg-purple-500',
  },
  {
    id: 'history',
    name: 'History',
    description: 'World History, Civics, Culture',
    icon: Clock,
    color: 'bg-amber-500',
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Coding, Algorithms, Software Dev',
    icon: Code,
    color: 'bg-red-500',
  },
]

export default function Dashboard() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [showChat, setShowChat] = useState(false)

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setShowChat(true)
  }

  const handleBackToDashboard = () => {
    setShowChat(false)
    setSelectedSubject(null)
  }

  if (showChat && selectedSubject) {
    return (
      <ChatInterface
        subject={selectedSubject}
        onBack={handleBackToDashboard}
      />
    )
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-bg-surface border-b border-neutral-200 px-xxl py-xl">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-display text-neutral-900">
            Welcome back!
          </h1>
          <p className="text-body text-neutral-600 mt-sm">
            Choose a subject to start your AI-powered study session
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-xxl py-xxl">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xxl">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-small text-neutral-600">Sessions This Week</p>
                <p className="text-section text-neutral-900 font-bold">12</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <BookOpen size={24} className="text-primary-500" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-small text-neutral-600">Study Streak</p>
                <p className="text-section text-neutral-900 font-bold">5 days</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp size={24} className="text-success" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-small text-neutral-600">Topics Mastered</p>
                <p className="text-section text-neutral-900 font-bold">23</p>
              </div>
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <Atom size={24} className="text-amber-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Subject Selection */}
        <div className="mb-lg">
          <h2 className="text-section text-neutral-900 mb-lg">
            Choose Your Subject
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onClick={() => handleSubjectSelect(subject)}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-section text-neutral-900 mb-lg">
            Recent Sessions
          </h2>
          <div className="space-y-md">
            <div className="card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calculator size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-card text-neutral-900">Calculus Integration</p>
                    <p className="text-small text-neutral-600">2 hours ago • Mathematics</p>
                  </div>
                </div>
                <ChevronLeft size={20} className="text-neutral-400 rotate-180" />
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Atom size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-card text-neutral-900">Molecular Biology</p>
                    <p className="text-small text-neutral-600">1 day ago • Science</p>
                  </div>
                </div>
                <ChevronLeft size={20} className="text-neutral-400 rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}