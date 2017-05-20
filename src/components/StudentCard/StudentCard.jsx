import React from 'react';
import TagList from '../TagList/TagList'
import profile from '../../assets/user1.svg';
import './StudentCard.css';

function StudentCard({student}) {
  const profilePic = {
    width: 50,
    height: 50,
    backgroundImage: `url(${profile})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <article className='card'>
      <div style={profilePic}></div>
      <div className='info'>
        <h1>{student.name}</h1>
        <p className='slack'>{student.slack}</p>
      </div>
      <TagList tags={student.tags} />
    </article>
  )
}

export default StudentCard;
