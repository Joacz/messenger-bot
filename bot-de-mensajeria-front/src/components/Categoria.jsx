import React from 'react';
import '../styles/MensajeCategoria.css';

function Categoria({ nombre }) {
  return (
    <div className='categoria'>
      <span className='nombre-categoria'>{nombre}</span>
    </div>
  );
}

export default Categoria;
