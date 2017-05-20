import React from 'react';
import Tag from '../Tag/Tag';
import './TagList.css';

function TagList({tags}) {
  const tagsArray = tags.map((e, i) => <Tag key={i} title={e} />);

  return (
    <section className='tag-list'>
      {tagsArray}
    </section>
  )
}

export default TagList;
