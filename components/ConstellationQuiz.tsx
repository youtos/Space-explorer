import { useState } from 'react';
import { Star, Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: 'Какое созвездие содержит знаменитый астеризм "Большой Ковш"?',
    options: ['Малая Медведица', 'Большая Медведица', 'Орион', 'Кассиопея'],
    correctAnswer: 1,
    explanation: 'Большой Ковш является частью Большой Медведицы. Это один из самых узнаваемых рисунков на северном небе.'
  },
  {
    question: 'Сколько созвездий официально признано Международным астрономическим союзом?',
    options: ['48', '66', '88', '108'],
    correctAnswer: 2,
    explanation: 'Официально признано 88 созвездий, которые покрывают всю небесную сферу.'
  },
  {
    question: 'Какое созвездие названо в честь мифического греческого охотника?',
    options: ['Персей', 'Геркулес', 'Орион', 'Центавр'],
    correctAnswer: 2,
    explanation: 'Орион назван в честь охотника из греческой мифологии и является одним из самых ярких созвездий на ночном небе.'
  },
  {
    question: 'Какую форму образует созвездие Кассиопея?',
    options: ['Крест', 'W или M', 'Круг', 'Треугольник'],
    correctAnswer: 1,
    explanation: 'Кассиопея образует характерную форму W или M, в зависимости от её ориентации на небе.'
  },
  {
    question: 'Какое самое большое созвездие по площади?',
    options: ['Большая Медведица', 'Гидра', 'Дева', 'Кит'],
    correctAnswer: 1,
    explanation: 'Гидра — самое большое созвездие, покрывающее 3,16% неба. Оно представляет водяную змею из греческой мифологии.'
  },
  {
    question: 'Зодиакальное созвездие Лев представляет какое животное?',
    options: ['Лев', 'Медведь', 'Овен', 'Бык'],
    correctAnswer: 0,
    explanation: 'Лев представляет льва и ассоциируется с Немейским львом из греческой мифологии.'
  },
  {
    question: 'Какое созвездие содержит яркую звезду Вега?',
    options: ['Орёл', 'Лебедь', 'Лира', 'Пегас'],
    correctAnswer: 2,
    explanation: 'Вега — самая яркая звезда в созвездии Лиры и одна из ярчайших звёзд на ночном небе.'
  },
  {
    question: 'Какое самое маленькое созвездие?',
    options: ['Малый Конь', 'Южный Крест', 'Стрела', 'Южная Корона'],
    correctAnswer: 1,
    explanation: 'Южный Крест — самое маленькое созвездие, хотя оно также одно из самых известных в Южном полушарии.'
  },
  {
    question: 'Какое созвездие представляет лебедя?',
    options: ['Орёл', 'Ворон', 'Лебедь', 'Голубь'],
    correctAnswer: 2,
    explanation: 'Лебедь представляет лебедя и также известен как Северный Крест из-за своей характерной формы.'
  },
  {
    question: 'Полярная звезда (Полярис) расположена в каком созвездии?',
    options: ['Большая Медведица', 'Малая Медведица', 'Дракон', 'Кассиопея'],
    correctAnswer: 1,
    explanation: 'Полярная звезда расположена на конце ручки Малого Ковша в созвездии Малой Медведицы.'
  }
];

export function ConstellationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (!answeredQuestions[currentQuestion]) {
      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      const newAnswered = [...answeredQuestions];
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(Array(questions.length).fill(false));
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return 'Идеально! Вы мастер созвездий! 🌟';
    if (percentage >= 80) return 'Отлично! Вы хорошо знаете звёзды! ⭐';
    if (percentage >= 60) return 'Отличная работа! Продолжайте исследовать космос! ✨';
    if (percentage >= 40) return 'Хорошая попытка! Продолжайте изучать созвездия! 💫';
    return 'Продолжайте изучать звёзды и попробуйте снова! 🌠';
  };

  if (quizCompleted) {
    return (
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="backdrop-blur-lg bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-3xl p-8 border border-white/20 mb-8">
            <Trophy className="w-20 h-20 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Викторина завершена!</h2>
            <div className="text-6xl font-bold text-white mb-4">
              {score}/{questions.length}
            </div>
            <p className="text-xl text-blue-100/90 mb-4">{getScoreMessage()}</p>
            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${(score / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-500/40 to-purple-500/40 hover:from-blue-500/60 hover:to-purple-500/60 border border-white/30 shadow-lg transition-all duration-300 mx-auto text-white font-semibold text-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
          <div>
            <h2 className="text-3xl font-bold text-white">Викторина о созвездиях</h2>
            <p className="text-blue-100/80">Проверьте свои знания о звёздах</p>
          </div>
        </div>
        <div className="backdrop-blur-lg bg-white/10 rounded-xl px-4 py-2 border border-white/20">
          <div className="text-white font-semibold">
            Вопрос {currentQuestion + 1}/{questions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-100/80 text-sm">Прогресс</span>
          <span className="text-white font-semibold text-sm">Счёт: {score}</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 mb-6">
        <h3 className="text-2xl font-bold text-white mb-6">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let bgColor = 'bg-white/10 hover:bg-white/20';
            let borderColor = 'border-white/20';
            let icon = null;

            if (showExplanation) {
              if (index === question.correctAnswer) {
                bgColor = 'bg-green-500/30';
                borderColor = 'border-green-400/50';
                icon = <CheckCircle className="w-5 h-5 text-green-300" />;
              } else if (index === selectedAnswer && !isCorrect) {
                bgColor = 'bg-red-500/30';
                borderColor = 'border-red-400/50';
                icon = <XCircle className="w-5 h-5 text-red-300" />;
              }
            } else if (selectedAnswer === index) {
              bgColor = 'bg-white/20';
              borderColor = 'border-white/40';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 ${bgColor} ${borderColor} ${
                  !showExplanation && 'hover:scale-102'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{option}</span>
                  {icon}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`backdrop-blur-lg rounded-2xl p-6 border mb-6 animate-in fade-in duration-300 ${
          isCorrect 
            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30' 
            : 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/30'
        }`}>
          <div className="flex items-start gap-3 mb-3">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-1" />
            )}
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                {isCorrect ? 'Правильно! 🎉' : 'Не совсем верно'}
              </h4>
              <p className="text-blue-100/90">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      {showExplanation && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-500/40 to-purple-500/40 hover:from-blue-500/60 hover:to-purple-500/60 border border-white/30 shadow-lg transition-all duration-300 text-white font-semibold"
          >
            {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Показать результаты'}
          </button>
        </div>
      )}
    </div>
  );
}
