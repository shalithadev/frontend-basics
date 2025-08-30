import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // Fetch initial data when the component mounts
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the data has changed
    if (prevState.data !== this.state.data) {
      // Data has changed, perform additional actions
      console.log('Data has been updated:', this.state.data);
    }
  }

  componentWillUnmount() {
    // Cleanup tasks before the component is unmounted
    console.log('Component will unmount');
    // For example, remove event listeners, cancel ongoing tasks, etc.
  }

  fetchData() {
    // Simulate fetching data from an API
    setTimeout(() => {
      this.setState({ data: 'Some data fetched from API' });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

export default ClassComponent;