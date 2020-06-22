// assets/js/Root.tsx

import React, { Component } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import {Socket} from "phoenix"
import ChatDemo from '../js/components/ChatDemo/ChatDemo';

export default class Root extends Component {
  state = {
    typed: '',
    messages: []
  }

  render() {
    return (
      <div>
        <ChatHistory messages={this.state.messages}/>
        <ChatInput 
          handleSubmit={this.addChat.bind(this)}
          handleChange={this.onInputChangeHandler.bind(this)}
          typed={this.state.typed}
          handleKeyPress={this.keyPress.bind(this)}
        />
        <ChatDemo />
      </div>
    )
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