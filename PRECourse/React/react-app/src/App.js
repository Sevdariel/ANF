import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      a: "",
    };
    this.textInputA = React.createRef();
    this.textInputB = React.createRef();
    this.textInput = React.createRef();
  }

  update(e) {
    this.setState({ a: this.textInputA.current.value });
    // findDOMNode is deprecated
    // this.setState({ b: ReactDOM.findDOMNode(this.b).value });
    this.setState({ b: this.textInput.current.value });
  }
  render() {
    return (
      <div>
        <input ref={this.textInputA} type="text" onChange={this.update.bind(this)} /> {this.state.a}
        <hr/>
        <Input ref={this.textInput} update={this.update.bind(this)} /> {this.state.b}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <input ref={this.textInput} type="text" onChange={this.props.update}/>
  }
}
export default App;
