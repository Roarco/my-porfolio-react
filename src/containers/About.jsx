/* esto es un componente de react, especificamente uno presentacional, aqui importamos
react y en algunos casos si usamos componetes stateFul tambien usaremos el component de
react */

import React from 'react';
import '../assets/styles/components/About.scss';
import Card from './Card';

/* crearemos componentes presentacionales, con un return explicito*/

const About = () => (
  <div className='About'>
    <Card />
  </div>
);

export default About;
