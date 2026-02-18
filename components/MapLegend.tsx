import React from 'react';

export function MapLegend() {
  return (
    <div className="sticky top-4 z-20">
      <div 
        className="p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur-xl bg-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        <h3 className="text-xl font-bold text-white mb-5 drop-shadow-lg">
          Легенда карты
        </h3>
        
        {/* Размеры звёзд по величине */}
        <div className="mb-5">
          <h4 className="text-white/90 font-semibold text-sm mb-3">Звёздная величина</h4>
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white shadow-lg"></div>
              </div>
              <span className="text-blue-100/80 text-xs">1-2m</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-md"></div>
              </div>
              <span className="text-blue-100/80 text-xs">3m</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
              </div>
              <span className="text-blue-100/80 text-xs">4m</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-white"></div>
              </div>
              <span className="text-blue-100/80 text-xs">5m+</span>
            </div>
          </div>
        </div>

        {/* Цвета звёзд */}
        <div className="mb-5">
          <h4 className="text-white/90 font-semibold text-sm mb-3">Спектральный класс (цвет)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#fdf5c0' }}></div>
              <span className="text-blue-100/80 text-xs">Бело-жёлтые</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#e5d922' }}></div>
              <span className="text-blue-100/80 text-xs">Жёлтые</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#d6872a' }}></div>
              <span className="text-blue-100/80 text-xs">Оранжевые</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#da4b34' }}></div>
              <span className="text-blue-100/80 text-xs">Красные</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#fff' }}></div>
              <span className="text-blue-100/80 text-xs">Белые</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#cdeaf2' }}></div>
              <span className="text-blue-100/80 text-xs">Бело-голубые</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#89c6ec' }}></div>
              <span className="text-blue-100/80 text-xs">Голубые</span>
            </div>
          </div>
        </div>

        {/* Типы объектов */}
        <div className="mb-5">
          <h4 className="text-white/90 font-semibold text-sm mb-3">Объекты карты</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <line x1="4" y1="10" x2="16" y2="10" stroke="#e5d922" strokeWidth="1" />
                  <line x1="10" y1="4" x2="10" y2="16" stroke="#e5d922" strokeWidth="1" />
                  <circle cx="10" cy="10" r="2" fill="#e5d922" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Линии созвездий</p>
                <p className="text-blue-100/60 text-xs">Жёлтые линии</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-gray-400/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <rect x="2" y="2" width="16" height="16" fill="none" stroke="#c6c6c6" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Млечный путь</p>
                <p className="text-blue-100/60 text-xs">Серая область</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="7" fill="none" stroke="#fff" strokeWidth="0.5" />
                  <line x1="10" y1="3" x2="10" y2="17" stroke="#fff" strokeWidth="0.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Координатная сетка</p>
                <p className="text-blue-100/60 text-xs">Тонкие белые линии</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <line x1="4" y1="10" x2="16" y2="10" stroke="#cdeaf2" strokeWidth="1" />
                  <circle cx="10" cy="10" r="2" fill="#cdeaf2" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Линии голубые</p>
                <p className="text-blue-100/60 text-xs">Дополнительные связи</p>
              </div>
            </div>
          </div>
        </div>

        {/* Типы звёзд */}
        <div className="mb-4">
          <h4 className="text-white/90 font-semibold text-sm mb-3">Особые звёзды</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-purple-400/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3" fill="#fff" opacity="0.8" />
                  <circle cx="10" cy="10" r="2" fill="#fff" opacity="0.5" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Переменные</p>
                <p className="text-blue-100/60 text-xs">Меняют яркость</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-pink-400/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="8" cy="10" r="2" fill="#fff" />
                  <circle cx="12" cy="10" r="2" fill="#fff" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Двойные</p>
                <p className="text-blue-100/60 text-xs">Две звезды</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-indigo-400/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="7" cy="10" r="1.5" fill="#fff" />
                  <circle cx="10" cy="10" r="1.5" fill="#fff" />
                  <circle cx="13" cy="10" r="1.5" fill="#fff" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Кратные</p>
                <p className="text-blue-100/60 text-xs">Три и более</p>
              </div>
            </div>
          </div>
        </div>

        {/* Примечания */}
        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <p className="text-blue-100/80 text-xs text-center">
            ⭐ Размер звёзды указывает на её видимую яркость • 🎨 Цвет соответствует температуре поверхности
          </p>
        </div>
      </div>
    </div>
  );
}
