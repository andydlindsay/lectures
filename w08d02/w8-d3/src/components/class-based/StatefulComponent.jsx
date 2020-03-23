import React from 'react';

class StatefulComponent extends React.Component {
  constructor(props) {
    // call super to pass props to parent
    super(props);
    this.state = {
      message: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <h2>{ this.state.message }</h2>
      </div>
    );
  }
}

export default StatefulComponent;
