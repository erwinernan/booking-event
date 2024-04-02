import React, { useEffect, useState } from 'react';
import './datePicker.css';
// import ChevronButton from '../../../components/Button/ChevronButton';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  // const numDaysToShow = 14; // Number of days to show
  const [numDaysToShow, setNumDaysToShow] = useState(14);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  useEffect(() => {
    // console.log(selectedDate);
    const updateNumDaysToShow = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setNumDaysToShow(14); // lg
      } else if (windowWidth >= 1024) {
        setNumDaysToShow(12); // lg
      } else if (windowWidth >= 768) {
        setNumDaysToShow(8); // md
      } else if (windowWidth >= 640) {
        setNumDaysToShow(6); // md
      } else {
        setNumDaysToShow(5); // sm & xs
      }
    };

    updateNumDaysToShow();

    // Event listener for window resize to update numDaysToShow
    window.addEventListener('resize', updateNumDaysToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateNumDaysToShow);
    };
  }, [selectedDate]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const formatDateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
    return `${year}-${month}-${day}`;
  };

  const isStartDateBeforeToday = (startDate: Date) => {
    const today = new Date();
    return formatDateToString(startDate) <= formatDateToString(today);
  };

  const handlePreviousClick = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() - numDaysToShow); // Update based on the current startDate
    setStartDate(newStartDate);
    setNextButtonClicked(false);
  };

  const handleNextClick = () => {
    // if (!nextButtonClicked) {
      const newStartDate = new Date(startDate);
      newStartDate.setDate(startDate.getDate() + numDaysToShow);
      setStartDate(newStartDate);
      // setNextButtonClicked(true);
    // }
  };

  const renderDates = () => {
    const days = [];

    for (let i = 0; i < numDaysToShow; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dayOfMonth = date.getDate().toString().padStart(2, '0'); // Ensure two digits for day
      const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });

      days.push(
        <button
          key={dayOfMonth}
          className={`date-button w-1/4 ${selectedDate.toDateString() === date.toDateString() ? 'bg-white text-black' : 'bg-transparent text-white'}`}
          onClick={() => handleDateChange(date)}
        >
          {/* {`${dayOfWeek} ${dayOfMonth}`} */}
          <span className="text-xs">{dayOfWeek}</span>
          <br />
          <span className="text-xl font-bold">{dayOfMonth}</span>
        </button>
      );
    }
    return days;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isLeftButtonDisabled = isStartDateBeforeToday(startDate);
  const isNextButtonDisabled = nextButtonClicked;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-end">
        {/* <button className={ isLeftButtonDisabled ? 'rounded-full' : 'opacity-50 cursor-not-allowed rounded-full' } onClick={handlePreviousClick} disabled={!isLeftButtonDisabled}>&lt;</button> */}
        <button
          className={`flex items-center justify-center ring-1 ring-white focus:outline-none p-2 rounded-full bg-transparent text-white ${isLeftButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePreviousClick}
          disabled={isLeftButtonDisabled} // Disable if start date is before today
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* <ChevronButton className={isLeftButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''} onClick={handlePreviousClick} disabled={isLeftButtonDisabled} /> */}
      </div>
      <div className="flex justify-center mx-4">
        <div className="date-picker flex">
          {renderDates()}
        </div>
      </div>
      <div className="flex items-start">
        <button
          className={`flex items-center justify-center ring-1 ring-white focus:outline-none p-2 rounded-full bg-transparent text-white ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextClick}
          disabled={isNextButtonDisabled} // Disable if next button has been clicked
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DatePicker;