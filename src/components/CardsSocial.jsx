
import React from 'react';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import '../assets/styles/components/CardsSocial.scss';

const CardsSocial = () => {
  return (
    <div className='CardsSocial'>
      <a href='https://www.facebook.com/roberthandres.arrietacontrera.7'>
        <img src={facebook} alt='Facebook' />
      </a>
      <a href='https://twitter.com/Robira12'>
        <img src={twitter} alt='Twitter' />
      </a>
      <a href='https://www.instagram.com/roarco1698/'>
        <img src={instagram} alt='Instagram' />
      </a>
    </div>
  );
};

export default CardsSocial;
