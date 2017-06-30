import React, { Component } from 'react';
import MovieReview from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
    .then(res => res.json())
    .then(r => this.setState({ reviews: r.results }))
  }

  render() {
    const reviewsArr = this.state.reviews.map((review, i) => <MovieReview reviews={review}/> )
    return (
      <div className='latest-movie-reviews'>
       <h2>The Latest Reviews:</h2>
        {reviewsArr}
      </div>
    )
  }
}
