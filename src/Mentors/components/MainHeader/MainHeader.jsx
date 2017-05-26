import React from 'react';
import signInPic from '../../../assets/sign-in.svg';
import SearchBar from '../SearchBar/SearchBar';
import './MainHeader.css';

function MainHeader({today, handlers}) {
  const signIn = {
    width: 20,
    height: 20,
    backgroundImage: `url(${signInPic})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }

  return (
    <header className='header'>
      <section>
        <h1 className='day-title'>Mentors</h1>
      </section>
      <section className='login-search-container'>
        <section className='username-container'>
          <p className='username'>username</p>
          <div style={signIn}></div>
        </section>
        <SearchBar searchMentor={handlers.searchMentor} />
      </section>
    </header>
  )
}

export default MainHeader;
