import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MentorsList from '../MentorsList/MentorsList';
import './MentorsMain.css';

function MentorsMain({today, handlers, mentors}) {
  return (
    <main className='main'>
      <MainHeader today={today} handlers={handlers} />
      <MentorsList mentors={mentors} />
    </main>
  )
}
 export default MentorsMain;
