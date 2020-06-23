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
   ],
   topic: "a"
  }

  socket = new Socket("/socket", {params: {token: window.userToken}});
  channel = null;

  componentDidMount() {
    this.socket.connect()

    this.channel = this.socket.channel(`topic:${this.state.topic}`, {})

    this.channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })
  }

  render() {
    return (
       <div className="chat-demo">
          <ChatHistory messages={this.state.messages} />
          <ChatInput 
            handleSubmit={this.addChat.bind(this)}
            handleInputChange={this.onInputChangeHandler.bind(this)}
            value={this.state.typed}
          />
       </div>
    );
 }

  keyPress(event) {
    if (event.key === "Enter") {
      this.addChat()
    }
  }

  addChat(e) {
    e.preventDefault();
    // const user = "test user";
    const text = this.state.typed;

    if (text === "") {
      return false;
    }

    this.channel.push("message", text)

    const messages = this.state.messages.slice();
    messages.push({ message: text, timestamp: 'Friday' });
    this.setState({ messages: messages, typed: ''})
  }

  onInputChangeHandler(event) {
    this.setState({ typed: event.target.value })
  }
}