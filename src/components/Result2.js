import React, { Component } from 'react'

export class Result2 extends Component {
    render() {
        return (
            <div>
                <h5>The decoded string is: <span> {this.props.data}</span></h5>
            </div>
        )
    }
}

export default Result2
