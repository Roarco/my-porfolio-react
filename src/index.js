/* Este es el punto de entrada, aqui importamos react, asi como react-dom y todos aquellos
componetes o archivos que requiera nuesta aplicacion.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';

/* con ReactDOM.render empujamos el componente al html */

ReactDOM.render(<App />, document.getElementById('app'));
