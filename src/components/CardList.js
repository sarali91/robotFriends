import React from 'react';
import Card from './Card';

// props robots inherent from app.js
const CardList = ({ robots,clickDelete }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              clickDelete = {clickDelete}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;