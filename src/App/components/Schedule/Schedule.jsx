import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import StudentList from '../StudentList/StudentList';
import './Schedule.css';

function Schedule({today, students, handlers}) {
  return (
    <main className='main'>
      <MainHeader today={today} />
      <StudentList studentRoster={students} handlers={handlers} />
    </main>
  )
}
 export default Schedule;
