import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Test from './Test'

class Middleware extends Component {
  render() {
    const elements = this.props.array.map(array =>
        <Test key={array.id} baslik={array.title} aciklama={array.description}/>
    )
    return (
      <div>
        {
            this.props.name
        }
        {
            elements
        }
      </div>
    )
  }
}

Middleware.propTypes = {
    name : PropTypes.string,
    array : PropTypes.array
}

export default Middleware;
