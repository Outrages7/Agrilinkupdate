// MoviePosterCard.js
import React from 'react';

const MoviePosterCard = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="poster">
          <img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Location Unknown" />
        </div>
        <div className="details">
          <h1>Location Unknown</h1>
          <h2>2021 • PG • 1hr 38min</h2>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <span>4.2/5</span>
          </div>
          <div className="tags">
            <span className="tag">Italian</span>
            <span className="tag">Drama</span>
            <span className="tag">Indie</span>
          </div>
          <p className="desc">
            Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.
          </p>
          <div className="cast">
            <h3>Cast</h3>
            <ul>
              <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
              <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
              <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Repeat for other cards */}
    </div>
  );
};

export default MoviePosterCard;
