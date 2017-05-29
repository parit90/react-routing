import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
          {/*for nested routing greet Component is passed as child to app Component hence {this.props.children} is used*/}
          {this.props.children}
          {/*React simple starter*/}
        </div>
    );
  }
}
