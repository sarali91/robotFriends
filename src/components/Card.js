import React from 'react';
import './Card.css';

// props name, email,id inherent from CardList.js

const Card = ({ name, email, id, clickDelete}) => {
  return (
    <div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <button id={id} onClick={clickDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Card;