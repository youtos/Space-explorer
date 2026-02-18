// ПРИМЕРЫ ИНТЕРАКТИВНЫХ ЭЛЕМЕНТОВ ДЛЯ SVG КАРТЫ
// ================================================

/*
  СПОСОБ 1: Клики внутри SVG
  ---------------------------
  Добавьте onClick к элементам SVG:
*/

// В MapSVG.tsx:
<g onClick={() => handleClick('Созвездие')}>
  <circle cx="100" cy="100" r="5" className="cursor-pointer hover:fill-yellow-400" />
  <text x="110" y="105">Название</text>
</g>

/*
  СПОСОБ 2: Hover эффекты в CSS
  ------------------------------
*/

const svgStyles = `
  .star {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .star:hover {
    transform: scale(1.5);
    fill: #ffd700 !important;
  }
  
  .constellation-line {
    stroke: #fff;
    stroke-width: 1px;
    opacity: 0.5;
  }
  
  .constellation-line:hover {
    opacity: 1;
    stroke-width: 2px;
    stroke: #ffd700;
  }
`;

/*
  СПОСОБ 3: HTML кнопки поверх SVG
  ---------------------------------
*/

function InteractiveMap() {
  return (
    <div className="relative">
      <svg>...</svg>
      
      {/* Кнопки в абсолютной позиции */}
      <button 
        className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        style={{ pointerEvents: 'auto' }}
      >
        <span className="flex w-10 h-10 bg-blue-500 rounded-full items-center justify-center">
          ⭐
        </span>
      </button>
    </div>
  );
}

/*
  СПОСОБ 4: Области клика (невидимые)
  ------------------------------------
*/

<svg>
  {/* Невидимая область для клика */}
  <rect 
    x="100" y="100" width="200" height="150"
    fill="transparent"
    onClick={() => alert('Clicked!')}
    className="cursor-pointer"
  />
  
  {/* Видимый контент */}
  <circle cx="150" cy="125" r="5" />
</svg>

/*
  СПОСОБ 5: Подсветка созвездий
  ------------------------------
*/

function HighlightableConstellation() {
  const [highlighted, setHighlighted] = useState(false);
  
  return (
    <g 
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
      className="cursor-pointer"
    >
      {highlighted && (
        <circle cx="200" cy="200" r="50" fill="rgba(255,215,0,0.3)" />
      )}
      <circle cx="200" cy="200" r="5" fill={highlighted ? '#ffd700' : '#fff'} />
    </g>
  );
}

/*
  СПОСОБ 6: Модальное окно при клике
  -----------------------------------
*/

function MapWithModal() {
  const [selectedStar, setSelectedStar] = useState(null);
  
  return (
    <div>
      <svg>
        <circle 
          cx="100" cy="100" r="5"
          onClick={() => setSelectedStar({ name: 'Вега', info: '...' })}
        />
      </svg>
      
      {selectedStar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <h3>{selectedStar.name}</h3>
            <p>{selectedStar.info}</p>
            <button onClick={() => setSelectedStar(null)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

/*
  СПОСОБ 7: Пульсирующие маркеры
  -------------------------------
*/

<svg>
  <defs>
    <radialGradient id="glow">
      <stop offset="0%" stopColor="#ffd700" stopOpacity="1"/>
      <stop offset="100%" stopColor="#ffd700" stopOpacity="0"/>
    </radialGradient>
  </defs>
  
  {/* Пульсирующий круг */}
  <circle cx="100" cy="100" r="10" fill="url(#glow)">
    <animate 
      attributeName="r" 
      from="5" to="20" 
      dur="2s" 
      repeatCount="indefinite"
    />
    <animate 
      attributeName="opacity" 
      from="1" to="0" 
      dur="2s" 
      repeatCount="indefinite"
    />
  </circle>
  
  {/* Основная точка */}
  <circle cx="100" cy="100" r="3" fill="#ffd700" />
</svg>

/*
  СПОСОБ 8: Tooltip при наведении
  --------------------------------
*/

function StarWithTooltip({ x, y, name }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <g>
      <circle 
        cx={x} cy={y} r="5"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <g>
          <rect x={x+10} y={y-20} width="100" height="30" fill="black" rx="5" />
          <text x={x+15} y={y-5} fill="white">{name}</text>
        </g>
      )}
    </g>
  );
}

/*
  СПОСОБ 9: Анимация при клике
  -----------------------------
*/

function AnimatedStar() {
  const [clicked, setClicked] = useState(false);
  
  return (
    <circle 
      cx="100" cy="100" r="5"
      onClick={() => setClicked(true)}
      className={`transition-all duration-500 ${
        clicked ? 'fill-yellow-400 scale-150' : 'fill-white'
      }`}
      onTransitionEnd={() => setClicked(false)}
    />
  );
}

/*
  СПОСОБ 10: Связанные созвездия
  -------------------------------
*/

function ConstellationMap() {
  const [activeConstellation, setActiveConstellation] = useState(null);
  
  const constellations = {
    ursa_major: [
      { x: 100, y: 100 },
      { x: 150, y: 110 },
      { x: 200, y: 100 },
    ]
  };
  
  return (
    <svg>
      {activeConstellation === 'ursa_major' && (
        <polyline 
          points="100,100 150,110 200,100"
          stroke="#ffd700"
          strokeWidth="2"
          fill="none"
        />
      )}
      
      <g onClick={() => setActiveConstellation('ursa_major')}>
        {constellations.ursa_major.map((star, i) => (
          <circle key={i} cx={star.x} cy={star.y} r="5" fill="white" />
        ))}
      </g>
    </svg>
  );
}

// ================================================
// РЕКОМЕНДАЦИИ ПО ИСПОЛЬЗОВАНИЮ
// ================================================

/*
  1. Для маленьких интерактивных элементов (звёзды) - используйте onClick прямо на SVG
  2. Для больших областей (созвездия) - используйте невидимые rect/circle для клика
  3. Для кнопок и сложных UI - используйте HTML поверх SVG (position: absolute)
  4. Для тултипов - комбинируйте SVG и HTML
  5. Для анимаций - используйте CSS transitions или SVG <animate>
*/

export {};
