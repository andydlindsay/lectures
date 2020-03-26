import React from 'react';

const ClassBased = class extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
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
        <h2>{ this.state.count }</h2>
        <button onClick={this.incrementCount}>Plus 1!</button>
      </div>
    );
  }
};

export default ClassBased;
