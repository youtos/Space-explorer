import { useState } from 'react';
import { Calendar as CalendarIcon, Moon, Sun, Star, Telescope } from 'lucide-react';

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const events2026 = [
  {
    date: '17 февраля 2026',
    month: 1,
    day: 17,
    title: 'Кольцеобразное солнечное затмение',
    type: 'eclipse',
    icon: <Sun className="w-5 h-5" />,
    description: 'Видно из Антарктиды и частей Южной Америки. Максимум затмения в 12:13 UTC.',
    color: 'from-orange-500/40 to-yellow-500/40'
  },
  {
    date: '3 марта 2026',
    month: 2,
    day: 3,
    title: 'Полное лунное затмение',
    type: 'eclipse',
    icon: <Moon className="w-5 h-5" />,
    description: 'Видно из Северной Америки, Южной Америки, Европы и Африки.',
    color: 'from-red-500/40 to-orange-500/40'
  },
  {
    date: '22-23 апреля 2026',
    month: 3,
    day: 22,
    title: 'Метеорный поток Лириды',
    type: 'meteor',
    icon: <Star className="w-5 h-5" />,
    description: 'Пик активности до 20 метеоров в час. Лучшее время наблюдения после полуночи.',
    color: 'from-blue-500/40 to-purple-500/40'
  },
  {
    date: '16 мая 2026',
    month: 4,
    day: 16,
    title: 'Меркурий в максимальной элонгации',
    type: 'planet',
    icon: <Telescope className="w-5 h-5" />,
    description: 'Лучшее время для наблюдения Меркурия, виден низко на западе после захода солнца.',
    color: 'from-gray-500/40 to-slate-500/40'
  },
  {
    date: '21 июня 2026',
    month: 5,
    day: 21,
    title: 'Летнее солнцестояние',
    type: 'solstice',
    icon: <Sun className="w-5 h-5" />,
    description: 'Самый длинный день в году в Северном полушарии.',
    color: 'from-yellow-500/40 to-orange-500/40'
  },
  {
    date: '12 августа 2026',
    month: 7,
    day: 12,
    title: 'Полное солнечное затмение',
    type: 'eclipse',
    icon: <Sun className="w-5 h-5" />,
    description: 'Полоса тотальности пересекает север Испании, Исландию и Гренландию.',
    color: 'from-orange-500/40 to-red-500/40'
  },
  {
    date: '12-13 августа 2026',
    month: 7,
    day: 12,
    title: 'Метеорный поток Персеиды',
    type: 'meteor',
    icon: <Star className="w-5 h-5" />,
    description: 'Один из лучших метеорных потоков с до 60 метеоров в час в пик.',
    color: 'from-purple-500/40 to-pink-500/40'
  },
  {
    date: '22 сентября 2026',
    month: 8,
    day: 22,
    title: 'Осеннее равноденствие',
    type: 'equinox',
    icon: <Sun className="w-5 h-5" />,
    description: 'Равная продолжительность дня и ночи. Начало осени в Северном полушарии.',
    color: 'from-amber-500/40 to-orange-500/40'
  },
  {
    date: '21-22 октября 2026',
    month: 9,
    day: 21,
    title: 'Метеорный поток Ориониды',
    type: 'meteor',
    icon: <Star className="w-5 h-5" />,
    description: 'Быстрые метеоры из обломков кометы Галлея, до 25 в час.',
    color: 'from-blue-500/40 to-indigo-500/40'
  },
  {
    date: '13-14 декабря 2026',
    month: 11,
    day: 13,
    title: 'Метеорный поток Геминиды',
    type: 'meteor',
    icon: <Star className="w-5 h-5" />,
    description: 'Король метеорных потоков с до 120 метеоров в час!',
    color: 'from-green-500/40 to-blue-500/40'
  },
  {
    date: '21 декабря 2026',
    month: 11,
    day: 21,
    title: 'Зимнее солнцестояние',
    type: 'solstice',
    icon: <Moon className="w-5 h-5" />,
    description: 'Самый короткий день в году в Северном полушарии.',
    color: 'from-blue-500/40 to-purple-500/40'
  }
];

export function EventsCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(1); // Февраль (0-indexed + 1)
  const [selectedEvent, setSelectedEvent] = useState<typeof events2026[0] | null>(null);

  const currentMonthEvents = events2026.filter(event => event.month === selectedMonth);

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <CalendarIcon className="w-8 h-8 text-purple-300" />
        <div>
          <h2 className="text-3xl font-bold text-white">Астрономические события 2026</h2>
          <p className="text-blue-100/80">Планируйте свои наблюдения за звёздами</p>
        </div>
      </div>

      {/* Month Selector */}
      <div className="mb-8">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-4 border border-white/10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {months.map((month, index) => {
              const hasEvents = events2026.some(event => event.month === index);
              return (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(index)}
                  className={`relative px-4 py-3 rounded-xl transition-all duration-300 ${
                    selectedMonth === index
                      ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-lg'
                      : hasEvents
                      ? 'bg-white/10 hover:bg-white/20 border border-white/10'
                      : 'bg-white/5 border border-white/5 opacity-50'
                  }`}
                  disabled={!hasEvents}
                >
                  <span className="text-white font-medium text-sm">{month.slice(0, 3)}</span>
                  {hasEvents && (
                    <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Event List */}
        <div className="space-y-4">
          {currentMonthEvents.length > 0 ? (
            currentMonthEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => setSelectedEvent(event)}
                className={`backdrop-blur-lg bg-gradient-to-r ${event.color} rounded-2xl p-5 border transition-all duration-300 cursor-pointer ${
                  selectedEvent?.title === event.title
                    ? 'border-white/40 shadow-xl scale-105'
                    : 'border-white/20 hover:border-white/30 hover:scale-102'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl backdrop-blur-lg bg-white/20 border border-white/30 text-white">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-100/80 text-sm mb-1">{event.date}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-blue-100/90 text-sm line-clamp-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 text-center">
              <CalendarIcon className="w-12 h-12 text-blue-300/50 mx-auto mb-4" />
              <p className="text-blue-100/70">Нет крупных событий запланировано на {months[selectedMonth]}</p>
            </div>
          )}
        </div>

        {/* Event Details */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 min-h-[400px]">
          {selectedEvent ? (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-2xl backdrop-blur-lg bg-gradient-to-r ${selectedEvent.color} border border-white/30 text-white`}>
                  {selectedEvent.icon}
                </div>
                <div className="flex-1">
                  <div className="text-blue-200/70 text-sm mb-1">{selectedEvent.date}</div>
                  <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                <h4 className="text-white font-semibold mb-2">Описание</h4>
                <p className="text-blue-100/90">{selectedEvent.description}</p>
              </div>

              <div className="backdrop-blur-lg bg-white/10 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Тип события</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-lg bg-white/20 text-white text-sm capitalize border border-white/20">
                    {selectedEvent.type === 'eclipse' ? 'Затмение' : 
                     selectedEvent.type === 'meteor' ? 'Метеорный поток' :
                     selectedEvent.type === 'solstice' ? 'Солнцестояние' :
                     selectedEvent.type === 'equinox' ? 'Равноденствие' : 'Планета'}
                  </span>
                </div>
              </div>

              {selectedEvent.type === 'meteor' && (
                <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Telescope className="w-4 h-4" />
                    Советы по наблюдению
                  </h4>
                  <ul className="text-blue-100/90 text-sm space-y-1">
                    <li>• Найдите тёмное место вдали от городских огней</li>
                    <li>• Дайте глазам 20-30 минут на адаптацию к темноте</li>
                    <li>• Пик наблюдений обычно после полуночи</li>
                    <li>• Телескоп не нужен - используйте невооружённый глаз</li>
                  </ul>
                </div>
              )}

              {selectedEvent.type === 'eclipse' && (
                <div className="backdrop-blur-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    Предупреждение о безопасности
                  </h4>
                  <p className="text-blue-100/90 text-sm">
                    Никогда не смотрите прямо на Солнце во время солнечного затмения без специальных очков для затмений или солнечных фильтров!
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Star className="w-16 h-16 text-purple-300/50 mb-4" />
              <p className="text-blue-100/70 mb-2">Выберите событие для просмотра деталей</p>
              <p className="text-blue-100/50 text-sm">Выберите из событий слева</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="backdrop-blur-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-4 border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">
            {events2026.filter(e => e.type === 'eclipse').length}
          </div>
          <div className="text-blue-100/80 text-sm">Затмений</div>
        </div>
        <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4 border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">
            {events2026.filter(e => e.type === 'meteor').length}
          </div>
          <div className="text-blue-100/80 text-sm">Метеорных потоков</div>
        </div>
        <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-4 border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">
            {events2026.filter(e => e.type === 'solstice' || e.type === 'equinox').length}
          </div>
          <div className="text-blue-100/80 text-sm">Солнцестояний/Равноденствий</div>
        </div>
        <div className="backdrop-blur-lg bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-2xl p-4 border border-white/20">
          <div className="text-3xl font-bold text-white mb-1">
            {events2026.filter(e => e.type === 'planet').length}
          </div>
          <div className="text-blue-100/80 text-sm">Планетарных событий</div>
        </div>
      </div>
    </div>
  );
}
