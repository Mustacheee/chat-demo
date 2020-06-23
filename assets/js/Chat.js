import React, { Component } from 'react';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import {Socket} from "phoenix"

export default class Chat extends Component {
  state = {
    typed: '',
    messages: [],
    topic: "default",
    username: this.props.username
  }

  channel = null;

  componentDidMount() {
    const socket = new Socket("/socket", {params: {username: this.state.username}});
    socket.connect()

    this.channel = socket.channel(`topic:${this.state.topic}`, {})

    this.channel.join()
      .receive("error", resp => { console.log("Unable to join", resp) })
      .receive("ok", resp => { 
        console.log("Received an OK response", resp)

        const messages = resp.messages.map(this.formatMessage);
        this.setState({ messages: messages })
      })

      this.channel.on(`topic:${this.state.topic}:message`, newMessage => {
        console.log("Incoming!", newMessage)

        const messages = this.state.messages.slice();
        messages.push(this.formatMessage(newMessage));
        this.setState({ messages: messages })
      })
  }
  
  formatMessage(message) {
    return { message: message.message, timestamp: `${message.inserted_at}Z`, author: message.user.username }
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
    this.setState({ typed: '' })
  }

  onInputChangeHandler(event) {
    this.setState({ typed: event.target.value })
  }
}