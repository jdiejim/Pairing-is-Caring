import React from 'react';
import TagList from '../TagList/TagList'
import profile from '../../assets/user1.svg';
import './StudentCard.css';

console.log(profile);

function StudentCard({student}) {
  const profilePic = {
    width: '10%',
    height: 50,
    backgroundImage: `url(/static/media/user1.ddcab890.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <tr>
      <td className='card'>
        <div style={profilePic}></div>
        <div className='info'>
          <h1>{student.name}</h1>
          <p className='slack'>{student.slack}</p>
        </div>
        <TagList tags={student.tags} />
      </td>
      <td className={`slot-cell ${student.slots[0].class}`}>{student.slots[0].text}</td>
      <td className={`slot-cell ${student.slots[1].class}`}>{student.slots[1].text}</td>
      <td className={`slot-cell ${student.slots[2].class}`}>{student.slots[2].text}</td>
    </tr>
  )
}

export default StudentCard;
