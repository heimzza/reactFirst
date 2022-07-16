import React, { Component } from 'react'
import Test from "./Test"

class Middleware extends Component {
  render() {
    return (
      <div>
        {
            this.props.array.map(array =>
                <Test baslik={array.title} aciklama={array.description}/>
            )
        }
      </div>
    )
  }
}

export default Middleware;
