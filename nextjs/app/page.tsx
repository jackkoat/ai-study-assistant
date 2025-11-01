import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Dashboard />
      </div>
    </main>
  )
}