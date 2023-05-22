import React from 'react';

const Child = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      internalCount: props.count * 2
    }
  }

  render() {
    return (
      <div className="child">
        <h2>{this.props.message}</h2>
        <h4>Count: {this.props.count}</h4>
        <h4>InternalCount: {this.state.internalCount}</h4>
        {this.props.children}
      </div>
    );
  }
};

export default Child;
