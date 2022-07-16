import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Test from './Test'

class Middleware extends Component {

    // static propTypes = 
    // {
    //     array : PropTypes.array
    // }

    static defaultProps = 
    {
        name : "Default value name"
    };
    render() {
        const elements = this.props.array.map(array =>
            <Test key={array.id} newsData={array} />
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
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    array: PropTypes.array.isRequired
}

export default Middleware;
