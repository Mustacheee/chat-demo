// assets/js/Root.tsx

import React, { Component } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import {Socket} from "phoenix"

export default class Root extends Component {
  state = {
    typed: '',
    messages: [
      { message: 'Hi Josh', timestamp: 'Tuesday' },
      { message: 'How are you?', timestamp: 'Wednesday' }                                    
   ]
  }

  render() {
    return (
       <div className="chat-demo">
          <ChatHistory messages={this.state.messages} />
          <ChatInput 
            handleSubmit={this.handleSubmit.bind(this)}
            handleInputChange={this.onInputChangeHandler.bind(this)}
            value={this.state.typed}
          />
       </div>
    );
 }

 handleSubmit(e) {
  e.preventDefault();
  var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Thursday' }]);
  var nextInputText = '';
  this.setState({ messages: nextMessages, inputText: nextInputText });
}

  keyPress(event) {
    console.log(event.key)
    if (event.key === "Enter") {
      this.addChat()
    }
  }

  addChat() {
    let socket = new Socket("/socket", {params: {token: window.userToken}})
    socket.connect()

    let channel = socket.channel("topic:a", {})

    channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })

    const user = "test user";
    const text = this.state.typed;

    channel.push("message", text)
    console.log(`user is ${user}`)
    console.log(`text is ${text}`)

    const messages = this.state.messages.slice();
    messages.push(text);
    this.setState({ messages: messages, typed: ''})
  }

  onInputChangeHandler(event) {
    this.setState({ typed: event.target.value })
  }
}