import React, { Component } from 'react'
// rcc

class Test extends Component {
  render() {

    console.log(this.props);
    const{baslik,aciklama} = this.props;
    return (
      <div>
        <h1>{baslik}</h1>
        <p>{aciklama}</p>
        <form action="">
            <input type="text" />
            <button>Save</button>
        </form>
      </div>
    )
  }
}

export default Test;