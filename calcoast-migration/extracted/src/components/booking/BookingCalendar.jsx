import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TIME_SLOTS = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function BookingCalendar({ onDateTimeSelect }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(v => v - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(v => v + 1); }
    else setViewMonth(m => m + 1);
  };

  const isDisabled = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (d < todayMidnight) return true;
    if (d.getDay() === 0) return true; // Sunday
    return false;
  };

  const isToday = (day) => {
    return viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate();
  };

  const isSelected = (day) => {
    return selectedDate && selectedDate.day === day && selectedDate.month === viewMonth && selectedDate.year === viewYear;
  };

  const handleDayClick = (day) => {
    if (isDisabled(day)) return;
    const date = { day, month: viewMonth, year: viewYear };
    setSelectedDate(date);
    setSelectedTime(null);
    onDateTimeSelect({ date, time: null });
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    onDateTimeSelect({ date: selectedDate, time });
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 rounded-full hover:bg-muted transition-colors">
          <ChevronLeft className="w-5 h-5 text-obsidian" />
        </button>
        <h3 className="font-heading font-bold text-lg text-obsidian">
          {monthNames[viewMonth]} {viewYear}
        </h3>
        <button onClick={nextMonth} className="p-2 rounded-full hover:bg-muted transition-colors">
          <ChevronRight className="w-5 h-5 text-obsidian" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-2">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
          <div key={d} className="text-center text-xs font-bold text-muted-foreground uppercase py-1">{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const disabled = isDisabled(day);
          const selected = isSelected(day);
          const todayMark = isToday(day);
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              disabled={disabled}
              className={`
                aspect-square rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-center
                ${disabled ? 'text-muted-foreground/40 cursor-not-allowed' : ''}
                ${selected ? 'bg-forest text-white shadow-md shadow-forest/30 scale-105' : ''}
                ${!disabled && !selected ? 'hover:bg-forest/10 text-obsidian cursor-pointer' : ''}
                ${todayMark && !selected ? 'ring-2 ring-forest/50' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mt-6">
          <p className="text-sm font-bold text-obsidian uppercase tracking-wide mb-3">Available Times</p>
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map(time => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all duration-150
                  ${selectedTime === time
                    ? 'bg-stone text-charcoal border-stone shadow-sm'
                    : 'border-border text-obsidian hover:border-forest hover:bg-forest/5'
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}