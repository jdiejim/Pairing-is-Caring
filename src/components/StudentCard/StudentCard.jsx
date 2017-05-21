import React from 'react';
import TagList from '../TagList/TagList';
import Slot from '../Slot/Slot';
import pic1 from '../../assets/user1.svg';
import pic2 from '../../assets/user2.svg';
import pic3 from '../../assets/user3.svg';
import pic4 from '../../assets/user4.svg';
import pic5 from '../../assets/user5.svg';
import './StudentCard.css';

const pics = [pic1, pic2, pic3, pic4, pic5];

function StudentCard({student}) {
  let pic = pics[student.profile];

  const profilePic = {
    backgroundImage: `url(${pic})`,
  }

  return (
    <article className='card'>
      <section className='student-description'>
        <div className='profile-pic' style={profilePic}></div>
        <div className='info'>
          <h1>{student.name}</h1>
          <p className='slack'>{student.slack}</p>
        </div>
        <TagList tags={student.tags} />
      </section>
      <Slot slot={student.slots[0]} />
      <Slot slot={student.slots[1]} />
      <Slot slot={student.slots[2]} />
    </article>
  )
}

export default StudentCard;
