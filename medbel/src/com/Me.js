import React from 'react';
import Le from './Le.js';

const Me = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <Le key={job.title} title={job.title} rating={job.rating} />
      ))}
    </div>
  );
};

export default Me;
