import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class pageOne extends Component {

    toPageTwo() {
        this.props.history.push('/pagetwo')
    }

    render() {
        return (
            <div>
                <h3>PageOne</h3>
                <Link to="/pagetwo">PageTwo</Link>
                <button onClick={this.toPageTwo.bind(this)}>PageTwo</button>
            </div>
        )
    }
}
export default pageOne;