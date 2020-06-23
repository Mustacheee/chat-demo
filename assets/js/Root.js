// assets/js/Root.tsx

import React, { Component } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import {Socket} from "phoenix"
import message from './components/Message/Message';

export default class Root extends Component {
  state = {
    typed: '',
    messages: [],
    topic: "default"
  }

  channel = null;

  componentDidMount() {
    const socket = new Socket("/socket", {params: {username: "default user"}});
    socket.connect()

    this.channel = socket.channel(`topic:${this.state.topic}`, {})

    this.channel.join()
      .receive("ok", resp => { 
        console.log("Joined successfully", resp)
        const messages = resp.messages.map( existing => {
          return { message: existing.message, timestamp: `${existing.inserted_at}Z`}
        });
        
        this.setState({ messages: messages })
      })
      .receive("error", resp => { console.log("Unable to join", resp) })

      this.channel.on(`topic:${this.state.topic}:message`, newMessage => {
        console.log("got something!", newMessage);
        const messages = this.state.messages.slice();

        messages.push({ message: newMessage.message, timestamp: newMessage.inserted_at });
        this.setState({ messages: messages })
      })
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
    const text = this.state.typed;

    if (text === "") {
      return false;
    }

    this.channel.push("message", { message: text })
  }

  onInputChangeHandler(event) {
    this.setState({ typed: event.target.value })
  }
}