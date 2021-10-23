import React from 'react';
import '../assets/styles/components/CardPhotoCircle.scss';
import roberth from '../assets/images/roberth.jpg';

const CardPhotoCircle = () => {
  return (
    <div className='card_photo center circle'>
      <img src={roberth} alt='Roberth' />
      <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ enableBackground: 'new -580 439 577.9 194' }} xmlSpace='preserve'>
        <circle cx={50} cy={50} r={40} />
      </svg>
    </div>

  );
};

export default CardPhotoCircle;

