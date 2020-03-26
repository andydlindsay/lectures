import React from 'react';
import Child from './Child';

const Props = class extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world',
      count: 15
    };
  }

  render() {
    return (
      <div className="props">
        <Child message={this.state.message} count={this.state.count}>
          <p>Happy Birthday!</p>
        </Child>
      </div>
    );
  }
};

export default Props;
