
import React from 'react';
import '../assets/styles/components/CardContact.scss';

const CardContact = () => {
  return (
    <div className='CardContact'>
      <div className='CardContact--item1'>
        <a className='CardContact__a' href='https://github.com/Roarco'>
          <h3 className='CardContact__h3'>See Projects</h3>
        </a>
      </div>
      <div className='CardContact--item2'>
        <a className='CardContact__a' href=' mailto:sebuscaroberth@gmail.com'>
          <h3 className='CardContact__h3'>Send Mail</h3>
        </a>
      </div>
    </div>

  );
};

export default CardContact;
