import React from 'react';
import './MentorCard.css';

function MentorCard({mentor}) {
  let {name, slack, background} = mentor;
  return (
    <article className='mentor-card'>
      <section className='contact-info'>
        <h1>{name}</h1>
        <p>{slack}</p>
      </section>
      <section className='bio'>
        <p>{background}</p>
      </section>
    </article>
  )
}

export default MentorCard;
