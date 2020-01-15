import React from 'react';
import axios from 'axios';

export default class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }
  render() {
    return (
      <>
        <div>About Me: </div>
      </>
    )
  }
}