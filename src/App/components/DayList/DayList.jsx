import React from 'react';
import Day from '../Day/Day';
import './DayList.css';

function DayList({days, selectDate}) {
  const daysArray = days.map((e, i) =>
  <Day key={i} day={e} selectDate={selectDate} />);

  return (
    <main>
      <section className='days-week'>
        <article className='day day-name'>S</article>
        <article className='day day-name'>M</article>
        <article className='day day-name'>T</article>
        <article className='day day-name'>W</article>
        <article className='day day-name'>T</article>
        <article className='day day-name'>F</article>
        <article className='day day-name'>S</article>
      </section>
      <section className='day-list'>
        {daysArray}
      </section>
    </main>
  )
}

export default DayList;
