import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class One extends Component {
  constructor(props) {
    super(props);
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  render() {
    return (
      <div style={{ background: 'red' }}>
        <button onClick={this.btnOnClick}>Click</button>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
      </div>
    );
  }
}

One.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

One.defaultProps = {
  age: 18,
};

ReactDOM.render(
  <One
    name="Smith"
    firstName="John"
  />,
  document.getElementById('app'),
);
