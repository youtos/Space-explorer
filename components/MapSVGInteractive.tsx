import React from 'react';

interface MapSVGProps {
  theme: 'light' | 'dark';
  onConstellationClick?: (name: string) => void;
}

export function MapSVG({ theme, onConstellationClick }: MapSVGProps) {
  // Обработчик клика по созвездию
  const handleConstellationClick = (name: string) => {
    if (onConstellationClick) {
      onConstellationClick(name);
    }
  };

  return (
    <svg
      id="_Слой_1"
      data-name="Слой_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 595.28 841.89"
      className="w-full h-auto"
      style={{
        filter: theme === 'dark' ? 'invert(1) hue-rotate(180deg)' : 'none',
      }}
    >
      <defs>
        <style>{`
          .st0 {
            letter-spacing: 1em;
          }

          .st0, .st1, .st2, .st3, .st4, .st5, .st6, .st7, .st8, .st9, .st10, .st11, .st12, .st13 {
            fill: #fff;
          }

          .st0, .st1, .st2, .st4, .st5, .st7, .st14, .st9, .st10, .st11, .st12, .st15, .st13 {
            font-size: 5px;
          }

          .st0, .st2, .st4, .st7, .st9, .st11, .st12 {
            font-family: P152SemiBold, P152;
          }

          .st16 {
            fill: #e5d922;
          }

          .st17 {
            stroke: #e5d922;
          }

          .st17, .st18, .st19, .st20, .st21, .st22, .st23, .st24, .st25, .st26, .st27 {
            fill: none;
          }

          .st17, .st18, .st19, .st20, .st21, .st22, .st23, .st24, .st25, .st27 {
            stroke-miterlimit: 10;
          }

          .st17, .st19, .st22, .st23, .st25, .st27 {
            stroke-width: .43px;
          }

          .st28 {
            letter-spacing: .21em;
          }

          .st28, .st29, .st30, .st31, .st32, .st33 {
            font-family: P112Semibold, P112;
          }

          .st28, .st32 {
            font-size: 8px;
          }

          .st34 {
            fill: #89c6ec;
          }

          .st35 {
            opacity: .3;
          }

          .st35, .st36, .st37, .st38 {
            fill: #c6c6c6;
          }

          .st36 {
            opacity: .4;
          }

          .st39, .st33 {
            letter-spacing: 0em;
          }

          .st1 {
            letter-spacing: .2em;
          }

          .st1, .st10 {
            font-family: MyriadPro-Regular, 'Myriad Pro';
          }

          .st18 {
            stroke-width: .14px;
          }

          .st18, .st23, .st24, .st8 {
            stroke: #fff;
          }

          .st2 {
            letter-spacing: .2em;
          }

          .st19 {
            stroke: #f2f4a3;
          }

          .st37 {
            opacity: .2;
          }

          .st20 {
            stroke-width: .85px;
          }

          .st20, .st21, .st26 {
            stroke: #1d1d1b;
          }

          .st21, .st26 {
            stroke-width: .57px;
          }

          .st22 {
            stroke: #cdeaf2;
          }

          .st38 {
            opacity: .1;
          }

          .st4 {
            letter-spacing: .4em;
          }

          .st29 {
            font-size: 18px;
            letter-spacing: 0em;
          }

          .st5, .st10, .st15 {
            letter-spacing: .2em;
          }

          .st5, .st13 {
            font-family: Bm431Italic, Bm431;
          }

          .st6, .st40 {
            display: none;
          }

          .st7 {
            letter-spacing: .9em;
          }

          .st24 {
            stroke-width: .28px;
          }

          .st41 {
            fill: #f7c166;
            font-family: T132SemiBold, T132;
            font-size: 21px;
            letter-spacing: 0em;
          }

          .st14, .st15 {
            font-family: ArialMT, Arial;
          }

          .st25 {
            stroke: #89c6ec;
          }

          .st42, .st30 {
            letter-spacing: 0em;
          }

          .st30, .st31, .st33 {
            font-size: 12px;
          }

          .st43 {
            fill: #cdeaf2;
          }

          .st44 {
            letter-spacing: .04em;
          }

          .st44, .st45 {
            font-family: ArialNarrow, Arial;
            font-size: 11px;
          }

          .st46 {
            fill: #f2f4a3;
          }

          .st40, .st47, .st48, .st49 {
            fill: #1d1d1b;
          }

          .st11 {
            letter-spacing: 2em;
          }

          .st50 {
            fill: #d6872a;
          }

          .st32 {
            letter-spacing: .21em;
          }

          .st45 {
            letter-spacing: .04em;
          }

          .st51 {
            fill: #fdf5c0;
          }

          .st12 {
            letter-spacing: .3em;
          }

          .st48 {
            letter-spacing: .01em;
          }

          .st48, .st49 {
            font-family: P151, P151;
            font-size: 6px;
          }

          .st52 {
            fill: #da4b34;
          }

          .st13 {
            letter-spacing: .2em;
          }

          .st49 {
            letter-spacing: 0em;
          }

          .st27 {
            stroke: #d6872a;
          }

          /* Интерактивные стили */
          .constellation-group {
            cursor: pointer;
            transition: opacity 0.2s ease;
          }

          .constellation-group:hover {
            opacity: 0.7;
          }

          .constellation-highlight {
            fill: rgba(255, 215, 0, 0.3);
            stroke: #ffd700;
            stroke-width: 2px;
            pointer-events: none;
          }

          .star-interactive {
            cursor: pointer;
            transition: transform 0.2s ease, fill 0.2s ease;
          }

          .star-interactive:hover {
            transform: scale(1.3);
            fill: #ffd700 !important;
          }
        `}</style>
      </defs>

      {/* Пример: Интерактивная группа для созвездия Большой Медведицы */}
      <g 
        className="constellation-group" 
        onClick={() => handleConstellationClick('Большая Медведица')}
      >
        {/* Подсветка при ховере - невидимая область для клика */}
        <circle cx="269" cy="560" r="80" className="constellation-highlight" opacity="0" />
        
        {/* Звезды созвездия - можно кликать */}
        <circle className="star-interactive st3" cx="280.8" cy="560.39" r="2.55"/>
        <circle className="star-interactive st3" cx="269.28" cy="560.58" r="2.13"/>
        <circle className="star-interactive st3" cx="254.08" cy="569.07" r="2.55"/>
        <text className="st9" transform="translate(260 590)">
          <tspan x="0" y="0">БОЛЬШАЯ МЕДВЕДИЦА</tspan>
        </text>
      </g>

      {/* Остальной SVG контент здесь */}
      <text className="st29" transform="translate(229.47 235.41)">
        <tspan x="0" y="0">СЕВЕРНОЕ ПОЛУШАРИЕ</tspan>
      </text>
    </svg>
  );
}
