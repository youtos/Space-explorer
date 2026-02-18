import React, { useState } from 'react';

interface InteractiveMapDemoProps {
  theme: 'light' | 'dark';
}

export function InteractiveMapDemo({ theme }: InteractiveMapDemoProps) {
  const [selectedStar, setSelectedStar] = useState<string | null>(null);
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);

  // Данные о созвездиях и звёздах
  const stars = [
    { id: 'vega', name: 'Вега', x: 180, y: 470, constellation: 'Лира', brightness: 0.03 },
    { id: 'deneb', name: 'Денеб', x: 220, y: 420, constellation: 'Лебедь', brightness: 1.25 },
    { id: 'altair', name: 'Альтаир', x: 200, y: 440, constellation: 'Орёл', brightness: 0.77 },
    { id: 'polaris', name: 'Полярная', x: 300, y: 480, constellation: 'Малая Медведица', brightness: 2.02 },
  ];

  const constellations = {
    'Летний треугольник': ['vega', 'deneb', 'altair'],
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Информационная панель */}
      <div className={`mb-4 p-4 rounded-xl ${
        theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
      }`}>
        <p className={`text-sm ${theme === 'dark' ? 'text-blue-200/80' : 'text-gray-600'}`}>
          ⭐ Наведите на звезду чтобы увидеть её название • Кликните чтобы узнать больше
        </p>
      </div>

      {/* SVG карта */}
      <div className="relative">
        <svg 
          viewBox="0 0 600 600" 
          className={`w-full h-auto rounded-2xl ${
            theme === 'dark' ? 'bg-slate-900' : 'bg-blue-50'
          }`}
        >
          <defs>
            {/* Градиент для звёзд */}
            <radialGradient id="starGlow">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="50%" stopColor="#ffd700" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0"/>
            </radialGradient>

            {/* Анимация пульсации */}
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              
              .star-glow {
                animation: pulse 2s ease-in-out infinite;
              }

              .star-interactive {
                cursor: pointer;
                transition: all 0.3s ease;
              }

              .star-interactive:hover {
                transform: scale(1.3);
              }

              .constellation-line {
                stroke: ${theme === 'dark' ? '#4a90e2' : '#2563eb'};
                stroke-width: 1.5;
                fill: none;
                opacity: 0.3;
                transition: opacity 0.3s ease;
              }

              .constellation-line:hover {
                opacity: 0.8;
              }
            `}</style>
          </defs>

          {/* Фон с звёздами */}
          {[...Array(50)].map((_, i) => (
            <circle
              key={`bg-star-${i}`}
              cx={Math.random() * 600}
              cy={Math.random() * 600}
              r={Math.random() * 1 + 0.5}
              fill="white"
              opacity={Math.random() * 0.5 + 0.3}
            />
          ))}

          {/* Линии созвездий */}
          {constellations['Летний треугольник'] && (
            <polyline
              points="180,470 220,420 200,440 180,470"
              className="constellation-line"
            />
          )}

          {/* Основные звёзды */}
          {stars.map(star => {
            const isHovered = hoveredStar === star.id;
            const isSelected = selectedStar === star.id;
            const radius = 5 - star.brightness;

            return (
              <g key={star.id}>
                {/* Свечение при наведении */}
                {isHovered && (
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={radius * 4}
                    fill="url(#starGlow)"
                    className="star-glow"
                  />
                )}

                {/* Звезда */}
                <circle
                  cx={star.x}
                  cy={star.y}
                  r={isHovered || isSelected ? radius * 1.5 : radius}
                  fill={isSelected ? '#ffd700' : isHovered ? '#ffe066' : '#ffffff'}
                  className="star-interactive"
                  onMouseEnter={() => setHoveredStar(star.id)}
                  onMouseLeave={() => setHoveredStar(null)}
                  onClick={() => setSelectedStar(selectedStar === star.id ? null : star.id)}
                />

                {/* Название при наведении */}
                {isHovered && (
                  <g>
                    <rect
                      x={star.x + 10}
                      y={star.y - 25}
                      width={star.name.length * 8 + 10}
                      height="25"
                      fill={theme === 'dark' ? '#1e293b' : '#ffffff'}
                      stroke={theme === 'dark' ? '#475569' : '#cbd5e1'}
                      strokeWidth="1"
                      rx="5"
                    />
                    <text
                      x={star.x + 15}
                      y={star.y - 10}
                      fill={theme === 'dark' ? '#ffffff' : '#1e293b'}
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {star.name}
                    </text>
                  </g>
                )}

                {/* Индикатор выбора */}
                {isSelected && (
                  <>
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={radius * 3}
                      fill="none"
                      stroke="#ffd700"
                      strokeWidth="2"
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        from={radius * 2}
                        to={radius * 4}
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.8"
                        to="0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {/* Информационная карточка при выборе звезды */}
        {selectedStar && (
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 max-w-sm w-full mx-4 rounded-2xl p-5 shadow-2xl ${
            theme === 'dark'
              ? 'bg-slate-800/95 backdrop-blur-xl border border-white/20'
              : 'bg-white/95 backdrop-blur-xl border border-gray-300'
          }`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  ⭐ {stars.find(s => s.id === selectedStar)?.name}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stars.find(s => s.id === selectedStar)?.constellation}
                </p>
              </div>
              <button
                onClick={() => setSelectedStar(null)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-white/10 text-white'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                ✕
              </button>
            </div>

            <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="flex justify-between text-sm">
                <span>Яркость:</span>
                <span className="font-medium">
                  {stars.find(s => s.id === selectedStar)?.brightness}ᵐ
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Координаты:</span>
                <span className="font-mono text-xs">
                  {stars.find(s => s.id === selectedStar)?.x}, {stars.find(s => s.id === selectedStar)?.y}
                </span>
              </div>
            </div>

            <button
              className={`mt-4 w-full py-2.5 rounded-lg font-medium transition-all ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Подробнее о звезде
            </button>
          </div>
        )}
      </div>

      {/* Легенда */}
      <div className={`mt-4 p-4 rounded-xl ${
        theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
      }`}>
        <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Видимые звёзды:
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {stars.map(star => (
            <button
              key={star.id}
              onClick={() => setSelectedStar(star.id)}
              className={`text-left p-2 rounded-lg transition-colors ${
                selectedStar === star.id
                  ? theme === 'dark' ? 'bg-blue-600/30' : 'bg-blue-100'
                  : theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-200'
              }`}
            >
              <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                ⭐ {star.name}
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {star.constellation}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
