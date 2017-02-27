import React, { Component } from 'react';

export default class Answers extends Component {

  mapAnswers() {
    const { array, radioName, recordScore } = this.props;
    return array.map((answer, i, array) => {
      return (
        <div className='answer-wrapper' key={i}>
          <input
           className='answer'
           type='radio'
           name={radioName}
           value={answer.title}
           onClick={() => recordScore(answer.score, radioName)}
          />{answer.title}
        </div>
      )
    })
  }

  render() {
    return (
      <radiogroup>
        {this.mapAnswers()}
      </radiogroup>
    )
  }
}
