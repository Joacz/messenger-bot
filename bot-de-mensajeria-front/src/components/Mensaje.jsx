import React from 'react';
import '../styles/MensajeCategoria.css';

function Mensaje({ contenido }) {
  return (
    <div className='mensaje'>
      <span className='contenido-mensaje'>{contenido}</span>
    </div>
  );
}

export default Mensaje;
