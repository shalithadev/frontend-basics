import React, { Component } from 'react';

// Define a class component that extends React.Component or React.PureComponent
class ClassComponent extends Component {
  // Define constructor if necessary
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {
      count: 0
    };
  }

  // Define lifecycle methods if necessary
  componentDidMount() {
    // Code to run after the component is mounted
  }

  // Define instance methods if necessary
  handleClick = () => {
    // Update state or perform other logic
    this.setState({ count: this.state.count + 1 });
  }

  // Define render() method to return JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;