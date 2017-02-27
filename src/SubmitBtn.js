import React, { Component } from 'react';

export default class SubmitBtn extends Component {
  render() {
    return (
      <button
        className='btn'
        onClick={() => this.props.recordScore()}
        >Submit</button>
    )
  }
}
