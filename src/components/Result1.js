import React, { Component } from 'react'
import Dashboard from './Dashboard'

export class Result1 extends Component {
    render() {
        return (
            <div>
                <h5>The encoded string is: <span> {this.props.data}</span></h5>
            </div>
        )
    }
}

export default Result1
