import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MentorsList from '../MentorsList/MentorsList';
import './MentorsMain.css';

function MentorsMain({today, mentors}) {
  return (
    <main className='main'>
      <MainHeader today={today} />
      <MentorsList mentors={mentors} />
    </main>
  )
}
 export default MentorsMain;
