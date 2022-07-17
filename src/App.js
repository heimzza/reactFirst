import React, { Component } from 'react';
import './App.css';
import Test from './Test';
import Test2 from './Test2';
import Middleware from './Middleware'

const array = [
  {
    id: 1,
    title: "Title 1 (One)",
    description: "Description 1 (One)",
  },
  {
    id: 2,
    title: "Title 2 (Two)",
    description: "Description 2 (Two)",
  },
  {
    id: 3,
    title: "Title 3 (Three)",
    description: "Description 3 (Three)",
  },
]
class App extends Component {

  state = {
    name : "Hamzaa"
  }

  // constructor(props){ //old es5
  //   super(props);
  //   this.state = {
  //     name : "Hamza"
  //   }
  // }

  addNews() 
  {
    console.log('Ekledim');
    array.push({
      id:4,
      title:"Yeni Eleman",
      description:"Eleman eklendi"
    });
    console.log(array);
  }

  changeName(){
    this.setState(
      {
        name : "Hello set state"
      }
    )
  }
  render() {
    const number = 12;
    const isIt = true;
    const title = "This is title";
    const description = "This is description";
    
    // return (
    //   <div className="container">
    //     <h1 style={{color:"red"}}>Test</h1>
    //     <h1>sa</h1>
    //     <h4>{10 * 5.6}</h4>
    //     {"uppercase".toUpperCase()}
    //     {
    //       isIt ? <p>It is</p> : <p>It's not</p>
    //     }
    //     <h5>{number}</h5>
    //     <Test baslik={array[0].title} aciklama={array[0].description}/>
    //     <Test baslik={array[1].title} aciklama={array[1].description}/>
    //     <Test baslik={array[2].title} aciklama={array[2].description}/>
    //     {/* <Test2/> */}
    //   </div>
    // );
    return (
      <div className="container">

        <h1>{this.state.name}</h1>
        {/* <Middleware array={array} addNews={this.addNews} /> */}
        <button onClick={this.changeName.bind(this)}>Değiştir</button>
      </div>
    );
  }
}

export default App;
