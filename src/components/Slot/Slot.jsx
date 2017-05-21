import React from 'react';
import './Slot.css'

function Slot({slot}) {
  return (
    <td className={`slot-cell ${slot.class}`}>{slot.text}</td>
  )
}

export default Slot;
