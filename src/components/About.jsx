/* esto es un componente de react, especificamente uno presentacional, aqui importamos
react y en algunos casos si usamos componetes stateFul tambien usaremos el component de
react */

import React from 'react';
import '../assets/styles/components/About.scss';

/* crearemos componentes presentacionales, con un return explicito*/

const About = ({ children }) => (
  <div className='About'>
    {children}
  </div>
);

export default About;
