import React from 'react';
import MentorCard from '../MentorCard/MentorCard';
import './MentorsList.css'

function MentorsList({mentors}) {
  let cards = mentors.map(e => <MentorCard mentor={e} />)
  return (
    <section className='mentors-list'>
      {cards}
    </section>
  )
}

export default MentorsList;
