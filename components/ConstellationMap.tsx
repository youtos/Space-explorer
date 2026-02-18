import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { MapSVG } from './MapSVG';
import { MapLegend } from './MapLegend';
import { ConstellationInteractive } from './ConstellationInteractive';
import { ConstellationModal } from './ConstellationModal';
import type { Constellation } from './ConstellationInteractive';

export function ConstellationMap() {
  const theme = 'light'; // Всегда светлая тема
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, panX: 0, panY: 0 });
  const [hoveredConstellation, setHoveredConstellation] = useState<Constellation | null>(null);
  const [selectedConstellation, setSelectedConstellation] = useState<Constellation | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Нативный обработчик wheel для зумирования
  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom(prev => Math.min(Math.max(prev + delta, 0.5), 3));
    };

    // Добавляем нативный обработчик с passive: false
    mapElement.addEventListener('wheel', handleWheelNative, { passive: false });

    return () => {
      mapElement.removeEventListener('wheel', handleWheelNative);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setPan({
      x: dragStart.panX + dx,
      y: dragStart.panY + dy,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="transition-colors duration-300 bg-transparent">
      <div className="mb-6 p-6 rounded-2xl border border-white/20 shadow-lg backdrop-blur-xl bg-white/10" style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
      }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl mb-2 text-white font-bold drop-shadow-lg">
              Карта созвездий
            </h2>
            <p className="text-blue-100/80 drop-shadow-md">
              Карта звёздного неба Северного полушария
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}
              className="p-2 rounded-xl transition-all bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
              title="Увеличить"
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
              className="p-2 rounded-xl transition-all bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
              title="Уменьшить"
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 rounded-xl transition-all bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
              title="Сбросить масштаб"
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative rounded-2xl overflow-hidden border border-gray-300 bg-white backdrop-blur-sm"
        style={{ touchAction: 'none' }}
      >
        <div
          ref={mapRef}
          className="w-full h-auto select-none cursor-grab active:cursor-grabbing relative"
          style={{
            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            touchAction: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <MapSVG theme={theme} />
          <ConstellationInteractive 
            viewBox="0 0 551 534" 
            onHover={setHoveredConstellation}
            onSelect={setSelectedConstellation}
          />
        </div>

        <div className="mt-4 p-4 rounded-xl border text-center bg-gray-100 border-gray-200">
          <p className="text-sm text-gray-600">
            🖱️ Перетащите для перемещения • 🔍 Прокрутите для масштабирования • ⭐ Наведите на созвездия • 🖱️ Кликните для подробной информации
          </p>
        </div>
      </div>

      <div className="mt-6">
        <MapLegend />
      </div>

      {selectedConstellation && (
        <ConstellationModal
          constellation={selectedConstellation}
          onClose={() => setSelectedConstellation(null)}
        />
      )}
    </div>
  );
}