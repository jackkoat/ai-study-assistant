'use client'

import { useState } from 'react'
import { 
  BookOpen, 
  MessageCircle, 
  TrendingUp, 
  Settings, 
  User,
  Menu,
  X
} from 'lucide-react'

interface SidebarItem {
  icon: React.ComponentType<any>
  label: string
  active?: boolean
}

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems: SidebarItem[] = [
    { icon: BookOpen, label: 'Dashboard', active: true },
    { icon: MessageCircle, label: 'Chat Sessions' },
    { icon: TrendingUp, label: 'Progress' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ]

  const NavItems = () => (
    <nav className="space-y-sm">
      {navigationItems.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.label}
            href="#"
            className={`sidebar-link ${item.active ? 'active' : ''}`}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </a>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-md left-md z-50 p-sm bg-bg-surface rounded-md shadow-md"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:relative left-0 top-0 h-full w-80 bg-bg-surface p-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="mb-xxl">
          <h1 className="text-section text-neutral-900 font-bold">
            AI Study Assistant
          </h1>
          <p className="text-small text-neutral-600 mt-xs">
            Your intelligent tutoring companion
          </p>
        </div>

        {/* Navigation */}
        <NavItems />

        {/* User Profile Section */}
        <div className="mt-auto pt-lg border-t border-neutral-200">
          <div className="flex items-center gap-sm">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-primary-500" />
            </div>
            <div>
              <p className="text-small font-body-bold text-neutral-900">
                Student
              </p>
              <p className="text-small text-neutral-600">
                Free Plan
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}