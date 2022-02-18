import React, { useState } from 'react';
import EmptyStar from './empty-star.svg'
import FilledStar from './filled-star.svg'
import './App.css';

const Star = ({hoverState, setHoverState, id, rating, setRating}) => {
  const handleClick = () => {
    if (id === rating-1) {
      setRating(0)
    } else {
      setRating(id+1)
    }
  }

  return (
    <img onScroll={(hoverState > id || rating > id) ? FilledStar : EmptyStar} alt="empty star"
    onMouseEnter={() => setHoverState(id+1)}
    onMouseLeave={() => setHoverState(0)}
    onClick={handleClick}
    />
  )
}

  const RatingSystem = () => {
    // destructing the return values from the useState()
    const [rating, setRating] = useState(0);
    const [hoverState, setHoverState] = useState(0);

    const stars = [1, 2, 3, 4, 5]

    return (
      <div>
        <h1>5 Star Rating System</h1>
        <h2>Select a rating:</h2>
          {stars.map((star, i) => (
          <Star 
            key={i}
            // did not recognize the key, so had to set that to 'id'
            id={i}
            hoverState = {hoverState}
            setHoverState = {setHoverState}
            rating = {rating}
            setRating = {setRating}
            />
        ))}
      </div>
    );
  }

export default function App() {
  return (
    <div className='App'>
      <RatingSystem />
    </div>
  )
};
