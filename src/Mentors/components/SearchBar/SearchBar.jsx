import React from 'react';
import search from '../../../assets/search.svg';
import './SearchBar.css';

function SearchBar({searchMentor}) {
  const searchIcon = {
    backgroundImage: `url(${search})`,
    backgroundPosition: '95% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px',
  }
  return (
    <form>
      <input onKeyUp={searchMentor} style={searchIcon} className='search' type='text' placeholder='name, tags, location...' />
    </form>
  )
}

export default SearchBar;
