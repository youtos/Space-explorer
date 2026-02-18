import React, { useState } from 'react';
import { MapSVG } from './MapSVG';
import { Info, Star, MapPin } from 'lucide-react';

interface ConstellationMapWithButtonsProps {
  theme: 'light' | 'dark';
}

export function MapSVGWithButtons({ theme }: ConstellationMapWithButtonsProps) {
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  // Координаты интересных точек на карте (в процентах)
  const constellations = [
    { name: 'Большая Медведица', x: 45, y: 66, description: 'Созвездие северного полушария неба' },
    { name: 'Малая Медведица', x: 50, y: 57, description: 'Содержит Полярную звезду' },
    { name: 'Кассиопея', x: 49, y: 50, description: 'Имеет характерную W-образную форму' },
    { name: 'Лебедь', x: 28, y: 50, description: 'Яркое созвездие с звездой Денеб' },
    { name: 'Лира', x: 29, y: 53, description: 'Содержит яркую звезду Вега' },
  ];

  return (
    <div className="relative">
      {/* SVG Карта */}
      <MapSVG theme={theme} />

      {/* Интерактивные кнопки поверх карты */}
      {constellations.map((constellation, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${constellation.x}%`,
            top: `${constellation.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Пульсирующий индикатор */}
          <button
            onClick={() => {
              setSelectedConstellation(constellation.name);
              setShowInfo(true);
            }}
            className="relative group"
          >
            {/* Анимированное кольцо */}
            <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></span>
            
            {/* Основная кнопка */}
            <span className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all ${
              theme === 'dark' 
                ? 'bg-blue-500 hover:bg-blue-400' 
                : 'bg-blue-600 hover:bg-blue-500'
            } shadow-lg group-hover:scale-110`}>
              <Star className="w-4 h-4 text-white" />
            </span>
          </button>

          {/* Всплывающая подсказка */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
            theme === 'dark' 
              ? 'bg-slate-800 text-white border border-white/20' 
              : 'bg-white text-gray-800 border border-gray-300'
          } shadow-xl`}>
            {constellation.name}
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 bg-inherit border-l border-t border-inherit"></div>
          </div>
        </div>
      ))}

      {/* Панель информации */}
      {showInfo && selectedConstellation && (
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 max-w-md w-full mx-4 rounded-2xl p-4 ${
          theme === 'dark'
            ? 'bg-slate-800/95 backdrop-blur-xl border border-white/20'
            : 'bg-white/95 backdrop-blur-xl border border-gray-300'
        } shadow-2xl`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {selectedConstellation}
              </h3>
            </div>
            <button
              onClick={() => setShowInfo(false)}
              className={`p-1 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              ✕
            </button>
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {constellations.find(c => c.name === selectedConstellation)?.description}
          </p>
          <button
            className={`mt-3 w-full py-2 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <Info className="w-4 h-4 inline mr-2" />
            Подробнее
          </button>
        </div>
      )}
    </div>
  );
}
