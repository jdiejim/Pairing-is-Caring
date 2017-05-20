import React from 'react';
import TagList from '../TagList/TagList'
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
    width: '10%',
    height: 50,
    backgroundImage: `url(${pic})`,
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
