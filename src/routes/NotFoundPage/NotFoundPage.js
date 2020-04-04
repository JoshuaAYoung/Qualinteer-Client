import React, { Component } from 'react';
import './NotFoundPage.css'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <header role="banner" className="notFoundBanner">
          <h1 className='pageHeader'>404
          <br />
          Page Not Found.</h1>
          <p className='pageInstructions'>We can’t find the page you’re looking for. Please check the url.</p>
        </header>
        <div className='notFoundImageContainer'>
          <img src='/assets/not-found.svg' alt='not found' className='notFoundImage' />
        </div>
      </div>
    );
  }
}
