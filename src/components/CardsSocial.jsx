
import React from 'react';
import twitter from '../assets/images/twitter.png';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import '../assets/styles/components/CardsSocial.scss';

const CardsSocial = () => (
  <div className='card_social'>
    <a href='https://twitter.com/Robira12'>
      <img src={twitter} alt='Twitter' />
    </a>
    <a href='https://github.com/Roarco'>
      <img src={github} alt='github' />
    </a>
    <a href='https://www.instagram.com/roarco1698/'>
      <img src={instagram} alt='instagram' />
    </a>
  </div>
);

export default CardsSocial;
