import { useState } from 'react';
import { ConstellationMap } from './components/ConstellationMap';
import { StarsInfo } from './components/StarsInfo';
import { EventsCalendar } from './components/EventsCalendar';
import { ConstellationQuiz } from './components/ConstellationQuiz';
import { Stars, Calendar, BookOpen, Brain } from 'lucide-react';

type Tab = 'map' | 'info' | 'calendar' | 'quiz';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('map');

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1655058402270-de7dd5838ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMHN0YXJzJTIwc3BhY2V8ZW58MXx8fHwxNzcwNzYxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Night sky"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-purple-950/30 to-slate-900/80" />
      </div>

      {/* Floating stars effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 2 + 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Космический исследователь
              </h1>
              <p className="text-blue-100/80 text-lg">Путешествие сквозь звёзды и созвездия</p>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="px-6 md:px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-2 border border-white/20 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button
                  onClick={() => setActiveTab('map')}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === 'map'
                      ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-lg'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Stars className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Карта</span>
                </button>
                <button
                  onClick={() => setActiveTab('info')}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === 'info'
                      ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-lg'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <BookOpen className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Звёзды</span>
                </button>
                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === 'calendar'
                      ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-lg'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">События</span>
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === 'quiz'
                      ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-lg'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Brain className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Викторина</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="px-6 md:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'map' && <ConstellationMap />}
            {activeTab === 'info' && <StarsInfo />}
            {activeTab === 'calendar' && <EventsCalendar />}
            {activeTab === 'quiz' && <ConstellationQuiz />}
          </div>
        </main>
      </div>
    </div>
  );
}