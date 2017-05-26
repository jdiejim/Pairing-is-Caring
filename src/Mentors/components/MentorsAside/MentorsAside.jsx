import React from 'react';
import { Link } from 'react-router-dom';
import './MentorsAside.css';

function MentorsAside() {
  return (
    <aside>
      <nav className='nav'>
        <Link to='/' className='nav-link'>Schedule</Link>
        <a className='nav-link active-link'>Mentors</a>
        <a className='nav-link'>Profile</a>
        <a className='nav-link'>Groups</a>
        <a className='nav-link'>Events</a>
      </nav>
    </aside>
  )
}

export default MentorsAside;
