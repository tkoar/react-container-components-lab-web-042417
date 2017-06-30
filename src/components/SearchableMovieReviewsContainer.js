// Code SearchableMovieReviewsContainer Here

import React from 'react'
import MovieReviews from './MovieReviews'


export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  render() {
    const reviewsArr = this.state.reviews.map((review) => <MovieReviews reviews={review} /> )

    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitReview}>
          <label htmlFor='search-input'>Search Movie Reviews</label>
          <input
            id='search-input'
            type="text"
            style={{width: 300}}
            onChange={this.getSearchInput} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        {reviewsArr}
      </div>
    );
  }
}
