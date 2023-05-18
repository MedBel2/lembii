import React, { useState } from 'react';

const Td = ({ addJob }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    const newJob = {
      title: title,
      rating: parseFloat(rating),
      description: description,
    };
    addJob(newJob);
    setTitle('');
    setRating(0);
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Td;
