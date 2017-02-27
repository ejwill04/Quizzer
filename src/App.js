import React, { Component } from 'react';
import './App.css';
import Questions from './Questions';
import SubmitBtn from './SubmitBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: '',
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/quizzes', {
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // },
      method: 'GET',
    }).then(response => response.json())
    .then(payload => this.setState({ quizzes: payload.quizzes[0] }));
  }

  recordScore(value, question) {
    console.log('score: ', value)
    console.log('score: ', question)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.quizzes.title}</h2>
        </div>
        <div className='App-body'>
          <Questions
            questionData={this.state ? this.state.quizzes.questions : null}
            recordScore={this.recordScore}/>
          <SubmitBtn
            recordScore={this.recordScore} />
        </div>
      </div>
    );
  }
}

export default App;
