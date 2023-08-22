import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test(){
  const [movierating, setMovieRating] = useState(0)
  return(
  <div>
   <StarRating color='blue' maxRating={10} onSetRating ={setMovieRating} />
   <p>This movies was rated {movierating} stars</p>
   </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} message={['Terrible','Bad','Okay','Good','Amazing']} />
    <StarRating size={24} color='#a936ad' className="test" defaultRating={1} />
    <Test/>
  </React.StrictMode>
);


