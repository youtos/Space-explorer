import { useState } from 'react';
import { Star, Sparkles, Zap } from 'lucide-react';

const starTypes = [
  {
    type: 'Красный гигант',
    color: '#ff6b6b',
    description: 'Большие, холодные звёзды на поздних стадиях своей эволюции. Они кажутся красными из-за низкой температуры поверхности.',
    temperature: '3 000 - 4 000 К',
    examples: 'Бетельгейзе, Альдебаран',
    lifespan: '100 миллионов лет',
    icon: '🔴'
  },
  {
    type: 'Голубой сверхгигант',
    color: '#4dabf7',
    description: 'Массивные, чрезвычайно горячие звёзды, одни из самых ярких во Вселенной.',
    temperature: '20 000 - 50 000 К',
    examples: 'Ригель, Денеб',
    lifespan: '10 миллионов лет',
    icon: '🔵'
  },
  {
    type: 'Жёлтый карлик',
    color: '#ffd43b',
    description: 'Звёзды главной последовательности, такие как наше Солнце. Имеют умеренную температуру и размер.',
    temperature: '5 000 - 6 000 К',
    examples: 'Солнце, Альфа Центавра A',
    lifespan: '10 миллиардов лет',
    icon: '🟡'
  },
  {
    type: 'Белый карлик',
    color: '#e0e0e0',
    description: 'Маленькие, плотные остатки звёзд, исчерпавших своё ядерное топливо.',
    temperature: '8 000 - 40 000 К',
    examples: 'Сириус B, Процион B',
    lifespan: 'Миллиарды лет (остывание)',
    icon: '⚪'
  },
  {
    type: 'Нейтронная звезда',
    color: '#9c36b5',
    description: 'Чрезвычайно плотные звёздные остатки, образовавшиеся после взрывов сверхновых.',
    temperature: '600 000 К',
    examples: 'Пульсар PSR B1919+21',
    lifespan: 'Триллионы лет',
    icon: '🟣'
  }
];

const brightestStars = [
  {
    name: 'Сириус',
    constellation: 'Большой Пёс',
    magnitude: -1.46,
    distance: '8,6 световых лет',
    type: 'Двойная система'
  },
  {
    name: 'Канопус',
    constellation: 'Киль',
    magnitude: -0.72,
    distance: '310 световых лет',
    type: 'Белый сверхгигант'
  },
  {
    name: 'Арктур',
    constellation: 'Волопас',
    magnitude: -0.05,
    distance: '37 световых лет',
    type: 'Красный гигант'
  },
  {
    name: 'Вега',
    constellation: 'Лира',
    magnitude: 0.03,
    distance: '25 световых лет',
    type: 'Главная последовательность'
  },
  {
    name: 'Ригель',
    constellation: 'Орион',
    magnitude: 0.13,
    distance: '860 световых лет',
    type: 'Голубой сверхгигант'
  }
];

export function StarsInfo() {
  const [selectedType, setSelectedType] = useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Star Types */}
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-yellow-300" />
          <div>
            <h2 className="text-3xl font-bold text-white">Типы звёзд</h2>
            <p className="text-blue-100/80">Исследуйте различные звёздные классификации</p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {starTypes.map((star, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(index)}
              className={`p-4 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
                selectedType === index
                  ? 'bg-white/20 border-white/40 shadow-lg scale-105'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-4xl mb-2">{star.icon}</div>
              <div className="text-white font-semibold text-sm text-center">
                {star.type}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Star Info */}
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
          <div className="flex items-start gap-4 mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg"
              style={{ 
                backgroundColor: starTypes[selectedType].color + '40',
                border: `2px solid ${starTypes[selectedType].color}`
              }}
            >
              {starTypes[selectedType].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {starTypes[selectedType].type}
              </h3>
              <p className="text-blue-100/90">
                {starTypes[selectedType].description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-lg bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-blue-200/70 text-sm mb-1">Температура</div>
              <div className="text-white font-semibold">
                {starTypes[selectedType].temperature}
              </div>
            </div>
            <div className="backdrop-blur-lg bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-blue-200/70 text-sm mb-1">Примеры</div>
              <div className="text-white font-semibold">
                {starTypes[selectedType].examples}
              </div>
            </div>
            <div className="backdrop-blur-lg bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-blue-200/70 text-sm mb-1">Продолжительность жизни</div>
              <div className="text-white font-semibold">
                {starTypes[selectedType].lifespan}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brightest Stars */}
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-yellow-300" />
          <div>
            <h2 className="text-3xl font-bold text-white">Ярчайшие звёзды</h2>
            <p className="text-blue-100/80">Самые яркие звёзды, видимые с Земли</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brightestStars.map((star, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-5 border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-200 transition-colors">
                    {star.name}
                  </h3>
                  <p className="text-blue-200/70 text-sm">
                    {star.constellation}
                  </p>
                </div>
                <Star 
                  className="w-6 h-6 text-yellow-300 group-hover:scale-125 transition-transform" 
                  fill="currentColor"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200/70 text-sm">Звёздная величина</span>
                  <span className="text-white font-semibold">{star.magnitude}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200/70 text-sm">Расстояние</span>
                  <span className="text-white font-semibold text-sm">{star.distance}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200/70 text-sm">Тип</span>
                  <span className="text-white font-semibold text-sm">{star.type}</span>
                </div>
              </div>

              {/* Brightness indicator */}
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"
                  style={{ width: `${Math.max(20, 100 - (star.magnitude + 1.5) * 20)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-300" fill="currentColor" />
          Знаете ли вы?
        </h3>
        <div className="space-y-3 text-blue-100/90">
          <p>• Солнце — лишь одна из приблизительно 100-400 миллиардов звёзд в галактике Млечный Путь.</p>
          <p>• Звёзды рождаются в облаках газа и пыли, называемых туманностями, которые могут простираться на миллионы километров.</p>
          <p>• Свет от ближайшей звезды (Проксима Центавра) доходит до Земли более 4 лет.</p>
          <p>• Чайная ложка материи нейтронной звезды весила бы около 6 миллиардов тонн на Земле!</p>
        </div>
      </div>
    </div>
  );
}
