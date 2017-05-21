import React from 'react';
import Calendar from '../Calendar/Calendar';
import './AsideNav.css';

function AsideNav() {
  return (
    <aside>
      <Calendar />
      <nav className='nav'>
        <a className='nav-link'>Schedule</a>
        <a className='nav-link'>Profile</a>
        <a className='nav-link'>Groups</a>
        <a className='nav-link'>Events</a>
        <a className='nav-link'>Mentors</a>
      </nav>
    </aside>
  )
}

export default AsideNav;
