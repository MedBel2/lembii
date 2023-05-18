import React from 'react';

const Le = ({ title, rating, posterURL }) => {
  console.log("Marhbe Bikom", title);
  return (
    <div>
      <h1>Movies: {title}</h1>
      <p>Rating: {rating}</p>
      <img src={posterURL} alt={title} />
    </div>
  );
};

export default Le;
