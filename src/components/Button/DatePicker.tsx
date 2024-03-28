import React, { useState } from 'react';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const numDaysToShow = 14; // Number of days to show

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePreviousClick = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - numDaysToShow);
    setStartDate(newStartDate);
  };

  const handleNextClick = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + numDaysToShow);
    setStartDate(newStartDate);
  };

  const renderDates = () => {
    const days = [];
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + numDaysToShow - 1);
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      const dayOfMonth = date.getDate();
      const isActive = date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();
      days.push(
        <button
          key={dayOfMonth}
          className={`date-button ${isActive ? 'bg-blue-500 text-white' : ''} ${isToday ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDateChange(new Date(date))}
        >
          {dayOfMonth}
        </button>
      );
    }
    return days;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isLeftButtonDisabled = startDate <= today;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-end">
        <button className={ isLeftButtonDisabled ? 'rounded-full' : 'opacity-50 cursor-not-allowed rounded-full' } onClick={handlePreviousClick} disabled={!isLeftButtonDisabled}>&lt;</button>
      </div>
      <div className="flex justify-center">
        <div className="date-picker flex">
          {renderDates()}
        </div>
      </div>
      <div className="flex items-start">
        <button className="arrow" onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

export default DatePicker;