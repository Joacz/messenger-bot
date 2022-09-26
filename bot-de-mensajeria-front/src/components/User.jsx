import React from 'react';
import '../styles/User.css';
import UserImage from '../svg/user.svg';
import AdminImage from '../svg/admin.svg';

function User({ name, email, isAdmin }) {
  if (!isAdmin) {
    return (
      <div className='user'>
        <div className='user-public-data'>
          <img id='user-img' src={UserImage} alt='user' />
          <div className='user-data'>
            <h3>{name}</h3>
            <span>{email}</span>
          </div>
        </div>
        <div className='separator'></div>
        <div className='user-actions'>
          <button className='button'>Borrar</button>
          <button className='button'>Editar</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='user'>
        <div className='user-public-data'>
          <img id='admin-img' src={AdminImage} alt='user' />
          <div className='user-data'>
            <h3>{name}</h3>
            <span>{email}</span>
          </div>
        </div>
        <div className='separator'></div>
        <div className='user-actions'>
          <button className='button'>Editar</button>
        </div>
      </div>
    );
  }
}

export default User;
