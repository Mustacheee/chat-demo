// assets/js/Root.tsx

import React, { Component } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

// import Header from './components/Header'
// import HomePage from './pages'

export default class Root extends Component {
  state = {
    typed: ''
  }

  render() {
    return (
      <div>
        <ChatHistory />
        <ChatInput 
          handleSubmit={this.addChat.bind(this)}
          handleChange={this.onInputChangeHandler.bind(this)}
          typed={this.state.typed}
        />
      </div>
    )
  }

  addChat() {
    const user = "test user";
    const text = this.state.typed;
    console.log(`user is ${user}`)
    console.log(`text is ${text}`)
  }

  onInputChangeHandler(event) {
    this.setState({ typed: event.target.value })
  }
}