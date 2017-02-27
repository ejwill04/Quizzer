import React, { Component } from 'react';
import Answers from './Answers';

export default class Questions extends Component {

  mapQuestions() {
    const { questionData, recordScore } = this.props;
    return questionData ?
      questionData.map((question, i) => {
        return (
          <div key={i}>
            <div
              className='question-title'>{question.title}</div>
            <Answers array={question.answers}
              radioName={`question${i}`}
              recordScore={recordScore} />
          </div>
        )
      })
      : null;
  }

  render() {
    return (
      <div>
        {this.mapQuestions()}
      </div>
    )
  }
}
