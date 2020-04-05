import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class pageTwo extends Component {

    toPageOne() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h3>PageTwo</h3>
                <Link to="/pagetwo">PageOne</Link>
                <button onClick={this.toPageOne.bind(this)}>PageOne</button>
            </div>
        )
    }
}
export default pageTwo;