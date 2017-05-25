import React from 'react';
import './Slot.css'

function Slot({slot}) {
  return (
    <article className={`slot-cell ${slot.class}`}>
      <p>{slot.text}</p>
    </article>
  )
}

export default Slot;
