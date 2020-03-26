import React from 'react';

const UpdateState = class extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: 'I am untouched :)'
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
    // this.state.count = this.state.count + 1;
  }

  render() {
    return (
      <div className="class-based">
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>Plus 1!</button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

export default UpdateState;
