import React from 'react';
import DayList from '../DayList/DayList';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import './Calendar.css'

function Calendar({days, handlers, monthTitle}) {
  return (
    <section className='calendar'>
      <CalendarHeader handlers={handlers} monthTitle={monthTitle} />
      <DayList days={days} selectDate={handlers.select}/>
    </section>
  )
}

export default Calendar;
