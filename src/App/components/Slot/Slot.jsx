import React from 'react';
import pic4 from '../../../assets/user4.svg';
import './Slot.css'

function Slot({slot, handlers}) {
  const profilePic = {
    backgroundImage: `url(${pic4})`,
  }

  return (
    <article onClick={handlers.reserve} className={`slot-cell ${slot.class}`}>
      <p>{slot.text}</p>
    </article>
  )
}

export default Slot;
