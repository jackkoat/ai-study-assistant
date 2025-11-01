interface Subject {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  color: string
}

interface SubjectCardProps {
  subject: Subject
  onClick: () => void
}

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const Icon = subject.icon

  return (
    <button
      onClick={onClick}
      className="card text-left w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-250 ease-out cursor-pointer"
    >
      <div className="flex flex-col items-center text-center space-y-md">
        {/* Icon */}
        <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center`}>
          <Icon size={32} className="text-white" />
        </div>
        
        {/* Content */}
        <div className="w-full">
          <h3 className="text-card text-neutral-900 mb-sm">
            {subject.name}
          </h3>
          <p className="text-small text-neutral-600">
            {subject.description}
          </p>
        </div>
      </div>
    </button>
  )
}