import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state txt",
      cat: 0
    };
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    );
  }
}

// export const StatelessApp = () => <h1>Hello stateless</h1>

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired,
};

App.defaultProps = {
  txt: "this is the default txt",
};

export default App;
