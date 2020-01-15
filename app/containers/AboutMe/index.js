import React from 'react';
import axios from 'axios';

export default class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
    this.getAboutMeData = this.getAboutMeData.bind(this)
  }

  componentDidMount() {
    this.getAboutMeData();
  }

  getAboutMeData() {
    axios.get('http://localhost:3004/data')
      .then((data) => {
        this.setState({
          user: data.data[0]
        })
      })
      .catch((err) => {
        console.log('err' + err)
      })
  }

  render() {
    const imgStyle = {
      borderRadius: '60%',
      width: '20%',
    };
    const { name, img, blurb } = this.state.user;
    return (
      <>
        <h1>About Me: </h1>
        <div>
          <p>{name}</p>
          <img src={img} style={imgStyle} />
          <p>{blurb}</p>
        </div>
      </>
    )
  }
}