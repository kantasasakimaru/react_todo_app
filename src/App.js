import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeResult: "change default value",
      inputResult: "input default value",
      keyUpResult: "keyup default value"
    };
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
        <input defaultValue={this.state.inputResult} onInput={this.onInput.bind(this)} placeholder="input" />
        {this.state.inputResult}
        <br />

        <input value={this.state.changeResult} onChange={(e) => this.onChange(e)} placeholder="change" />
        {this.state.changeResult}
        <br />

        <input defaultValue={this.state.keyUpResult} onKeyUp={this.onKeyup.bind(this)} placeholder="keyup　　　　　　　　　" />
        {this.state.keyUpResult}
        <br />

      </div>
    );
  }
}

export default App;