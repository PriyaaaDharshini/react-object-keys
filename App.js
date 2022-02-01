import React, { Component } from 'react';
import { render } from 'react-dom';
import Student from './Student';
import './style.css';


/*
How is the person coding App supposed to know what props to give the Student Component
how do you know what parameters to pass any function
 */
class App extends Component {
  render() {
    return (
      <div>
        <Student />
      </div>
    );
  }
}



export default App;