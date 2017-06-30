// Code MovieReviews Here
import React from 'react'


export default class MovieReview extends React.Component {
  render() {
    var URL = this.props.reviews.link['url']
    return (
      <div>
      return (
          <div key={this.props.reviews.headline}
            className="review" >
            <header>
              <a
                className="review-link"
                href={URL}
              >
                {this.props.reviews.headline}
              </a>
              <br/>
              <span className="author">{this.props.reviews.byline}</span>
            </header>
            <blockquote>{this.props.reviews.summary_short}</blockquote>
          </div>
          );
          };

      </div>
    )
  }
}
