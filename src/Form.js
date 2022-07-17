import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props);
        // this.addButton = this.addButton.bind(this);
    }
    addButton = () => {
        this.props.addNews();
        console.log('Hi');
    }

    render() {
        return (
            <div>
                <button onClick={this.addButton}>Ekle</button>
            </div>
        )
    }
}

export default Form;
