import React from 'react';
import TagList from '../TagList/TagList';
import './MentorCard.css';

function MentorCard({mentor}) {
  let {name, slack, background, tags, location, email, jobTitle, phone, employer, availability} = mentor;
  let otherSocial = email === '' ? phone : email;
  let social = slack === '' ? otherSocial : slack;
  let company = employer === '' ? '' : `- ${employer}`;

  return (
    <article className='mentor-card'>
      <section className='contact-info'>
        <div>
          <h1 className='name'>{name}</h1>
          <p className='job-title'>{jobTitle} {company}</p>
          <p className='slack'>{social}</p>
        </div>
        <div className='availability'>{availability}</div>
      </section>
      <section className='bio-container'>
        <section className='bio-header'>
          <h3 className='location'>{location}</h3>
        </section>
        <p className='bio'>{background}</p>
        <TagList tags={tags} />
      </section>
    </article>
  )
}

export default MentorCard;



// <section className='bio'>
//   <p>{background}</p>
// </section>
