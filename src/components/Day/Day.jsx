import React from 'react';
import './Day.css';

function Day({day, selectDate}) {
  let dayType = day.month !== day.currentMonth ? 'days out' : 'days';

  dayType += day.today === day.date ? ' now' : '';

  return (
    <article className={dayType} onClick={selectDate} data-day={day.date}>
      {day.day}
    </article>
  )
}

export default Day;
