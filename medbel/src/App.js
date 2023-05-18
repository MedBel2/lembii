import './App.css';
import { useState } from 'react';
import Le from './com/Le.js';
import Me from './com/Me.js';

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Wednesday",
      description: "Horror",
      posterURL: "https://m.media-amazon.com/images/I/41YZTePdSOL._AC_.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Me3an",
      description: "science fiction horror",
      posterURL: "https://th.bing.com/th/id/OIP.SC4_7HPZwfIANrCLcF6AgwHaJQ?pid=ImgDet&rs=1",
      rating: 4,
    },
    {
      id: 3,
      title: "The witcher",
      description: "action",
      posterURL: "https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg",
      rating: 5,
    },
    {
      id: 4,
      title: "black panther wakanda forever",
      description: "Action",
      posterURL: "https://lumiere-a.akamaihd.net/v1/images/blackpanther-wakandaforever_payoff_1-sht_v10_lg_c5ec6aef.jpeg?region=0%2C0%2C1688%2C2500",
      rating: 3,
    },
    {
      id: 5,
      title: "violent night",
      posterURL: "https://th.bing.com/th/id/R.76e0ba532226cb1ccb3490060e399e19?rik=rL6E%2baZ%2flkqj7w&pid=ImgRaw&r=0",
      description: "Horror",
      rating: 3,
    },
    {
      id: 6,
      title: "avatar the way of water",
      description: "Science fiction",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
      rating: 5,
    },
  ]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = job.rating >= parseFloat(filterRating);
    return titleMatch && ratingMatch;
  });

  return (
    <div>
    <h1>This is My list:</h1>
      
        <input
          type="text"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          placeholder="Filter by Title"
        />
        <input
          type="number"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          placeholder="Filter by Rating"
        />
      
      <Le addJob={addJob} />
      <Me jobs={filteredJobs} />
  </div>
  );
}

export default App;
