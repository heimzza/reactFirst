import React, { Component } from 'react'
import PropTypes from 'prop-types'
// rcc

class Test extends Component {
  static propTypes = {
    newsData:PropTypes.shape(
      {
        title:PropTypes.string,
        description:PropTypes.string
      }
    )
  }
  render() {

    console.log(this.props.newsData);
    const{title,description} = this.props.newsData;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <form action="">
            <input type="text" />
            <button>Save</button>
        </form>
      </div>
    )
  }
}

export default Test;