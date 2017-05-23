import React from 'react';
import left from '../../assets/left-arrow.svg';
import right from '../../assets/right-arrow.svg';
import './CalendarHeader.css';

function CalendarHeader({handlers, monthTitle}) {
  const leftArrow = {
    backgroundImage: `url(${left})`
  }

  const rightArrow = {
    backgroundImage: `url(${right})`
  }

  return (
    <header className='calendar-header'>
      <article className='arrow' style={leftArrow} onClick={handlers.previous}></article>
      <h4 className='month-title'>{monthTitle}</h4>
      <article className='arrow' style={rightArrow} onClick={handlers.next}></article>
    </header>
  )
}

export default CalendarHeader;
