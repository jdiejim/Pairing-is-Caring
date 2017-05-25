import React from 'react';
import StudentCard from '../StudentCard/StudentCard';
import './StudentList.css'

function StudentList({studentRoster}) {
  let studentCards = studentRoster.map((e, i) => <StudentCard key={i} student={e} />)

  return (
    <section className='student-list'>
      <header className='card-container-header'>
        <article className='empty-card'></article>
        <article className='slot-header'><p>8<span>am</span></p></article>
        <article className='slot-header'><p>12<span>pm</span></p></article>
        <article className='slot-header'><p>4<span>pm</span></p></article>
      </header>
      {studentCards}
    </section>
  )
}

export default StudentList;
