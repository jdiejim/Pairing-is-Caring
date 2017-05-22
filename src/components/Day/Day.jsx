import React from 'react';
import './Day.css';

function Day({day}) {
  let dayType = day.month !== day.currentMonth ? 'days out' : 'days';
  dayType += day.today === day.date ? ' now' : '';

  return (
    <article className={dayType}><p>{day.day}</p></article>
  )
}

export default Day;
