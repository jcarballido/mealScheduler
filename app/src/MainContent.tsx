import { useState } from 'react';

interface MainContentProps {
  onToggleLeft: () => void;
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function getMonthName(month: number): string {
  return new Date(2000, month, 1).toLocaleString('default', { month: 'long' });
}

function MainContent({ onToggleLeft }: MainContentProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  function handlePrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  return (
    <div className="w-full h-full p-8 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-6 border-2 border-yellow-300">
          <button
            onClick={onToggleLeft}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Toggle Left Panel
          </button>
          <button
            disabled
            className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
          >
            Placeholder
          </button>

          <h2 className="text-2xl font-bold">
            {getMonthName(currentMonth)} {currentYear}
          </h2>
          <div className='border border-blue-600'>
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded text-gray-600"
            >
              &#8249;
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded text-gray-600"
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-purple-500 grow">
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              className="bg-gray-50 py-2 text-center text-sm font-semibold text-gray-600  "
            >
              {day}
            </div>
          ))}

          {weeks.map((week, weekIndex) =>
            week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`bg-white p-3 text-sm border-2 border-red-700 ${
                  day !== null ? 'text-gray-800' : ''
                }`}
              >
                {day}
              </div>
            ))
          )}
        </div>
    </div>
  );
}

export default MainContent;
