
import React from 'react';
import CardImage from '../components/CardImage';
import CardPhotoCircle from '../components/CardPhotoCircle';
import CardsDetails from '../components/CardsDetails';
import CardsSocial from '../components/CardsSocial';
import CardContact from '../components/CardContact';
import '../assets/styles/components/Cards.scss';

const Card = () => (
  <div className='card'>
    <CardImage />
    <CardPhotoCircle />
    <CardsDetails />
    <CardsSocial />
    <CardContact />
  </div>
);

export default Card;

