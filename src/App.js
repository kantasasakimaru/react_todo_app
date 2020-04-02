import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickResult: "",
      changeResult: "",
      inputResult: "",
      keyUpResult: ""
    };
  }

  onClick(e) {
    this.setState({ clickResult: "clicked" });
  }

  onInput(e) {
    this.setState({ inputResult: e.target.value });
  }

  onChange(e) {
    this.setState({ changeResult: e.target.value });
  }

  onKeyup(e) {
    this.setState({ keyUpResult: e.target.value });
  }


  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>click</button>
        {this.state.clickResult}
        <br />

        <input onInput={this.onInput.bind(this)} placeholder="input" />
        {this.state.inputResult}
        <br />

        <input onChange={this.onChange.bind(this)} placeholder="change" />
        {this.state.changeResult}
        <br />

        <input onKeyUp={this.onKeyup.bind(this)} placeholder="keyup" />
        {this.state.keyUpResult}
        <br />

      </div>
    );
  }
}

export default App;