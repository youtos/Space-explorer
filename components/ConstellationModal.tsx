import React from 'react';
import { X } from 'lucide-react';
import type { Constellation } from './ConstellationInteractive';

interface ConstellationModalProps {
  constellation: Constellation;
  onClose: () => void;
}

export function ConstellationModal({ constellation, onClose }: ConstellationModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95))',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 p-6 border-b border-white/10 backdrop-blur-xl bg-white/5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {constellation.nameRu}
              </h2>
              <p className="text-blue-200/80 italic">{constellation.name}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl transition-all bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main description */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-blue-100/90 leading-relaxed">
              {constellation.info.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20">
              <div className="text-purple-300/70 text-sm mb-1">Ярчайшая звезда</div>
              <div className="text-white font-semibold">{constellation.info.brightestStar}</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20">
              <div className="text-blue-300/70 text-sm mb-1">Количество звёзд</div>
              <div className="text-white font-semibold">{constellation.info.stars} главных</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/20">
              <div className="text-cyan-300/70 text-sm mb-1">Площадь</div>
              <div className="text-white font-semibold">{constellation.info.area}</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-400/20">
              <div className="text-teal-300/70 text-sm mb-1">Лучший месяц</div>
              <div className="text-white font-semibold">{constellation.info.bestMonth}</div>
            </div>
          </div>

          {/* Visibility */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-xl">👁️</span>
              Видимость
            </h3>
            <p className="text-blue-100/80">{constellation.info.visibility}</p>
          </div>

          {/* Mythology */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/20">
            <h3 className="text-amber-200 font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">📜</span>
              Мифология
            </h3>
            <p className="text-amber-100/90 leading-relaxed">
              {constellation.info.mythology}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-xl font-semibold transition-all bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-400/30 text-white"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
