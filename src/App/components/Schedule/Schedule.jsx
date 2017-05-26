import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import StudentList from '../StudentList/StudentList';
import './Schedule.css';

function Schedule({today, students}) {
  return (
    <main className='main'>
      <MainHeader today={today} />
      <StudentList studentRoster={students} />
    </main>
  )
}
 export default Schedule;
