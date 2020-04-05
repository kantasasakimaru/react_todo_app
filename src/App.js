import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import pageOne from './component/pageOne';
import pageTwo from './component/pageTwo';

class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" component={pageOne} exact={true} />
        <Route path="/pagetwo" component={pageTwo} />
      </div>
    )
  }
}

export default App;