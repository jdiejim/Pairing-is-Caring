import React from 'react';
import StudentCard from '../StudentCard/StudentCard';
import './StudentList.css'

function StudentList({students}) {
  let studentCards = students.map((e, i) => <StudentCard key={i} student={e} />)

  return (
    <table>
      <thead>
        <tr className='table-header'>
          <th className='empty-header'></th>
          <th className='slot-header'>8<span>am</span></th>
          <th className='slot-header'>12<span>pm</span></th>
          <th className='slot-header'>4<span>pm</span></th>
        </tr>
      </thead>
      <tbody>
        {studentCards}
      </tbody>
    </table>
  )
}

export default StudentList;
