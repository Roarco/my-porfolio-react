
import React from 'react';
import '../assets/styles/components/CardsDetails.scss';
import roberth from '../assets/images/roberth.jpg';

const CardsDetails = ({ children }) => (
  <div className='card_details'>
    <div className='card_photo center circle'>
      <img src={roberth} alt='roberth' />
      <svg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new -580 439 577.9 194;'
        xmlSpace='preserve'
      >
        <circle cx='50' cy='50' r='40' />
      </svg>
    </div>
    <p className='card_title'>Hi, My name is</p>
    <p className='card_value'>Roberth Arrieta Contreras</p>
  </div>
);

export default CardsDetails;
