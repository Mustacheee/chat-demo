import React, { Component } from 'react';
import ChatMessageHistory from './ChatHistory';
    
 var MESSAGES = [
    { message: 'Hi Josh', timestamp: 'Tuesday' },
    { message: 'How are you?', timestamp: 'Wednesday' }                                    
 ];
                                            
 class ChatWindow extends Component {
    state = {
        messages: MESSAGES,
        inputText: ''
    }

    handleSubmit(e) {
       e.preventDefault();
       var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Thursday' }]);
       var nextInputText = '';
       this.setState({ messages: nextMessages, inputText: nextInputText });
    }

    onChange(e) {
       this.setState({inputText: e.target.value});
    }

    render() {
       var windowStyles = {
          maxWidth: '40em',
          margin: '1rem auto'
       };
       
       var formStyles = {
          display: 'flex',
       };
       
       var inputStyles = {
          flex: '1 auto'
       };
       
       var btnStyles = {
          backgroundColor: '#00d8ff',
          border: 'none',
          color: '#336699',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 'bold',
          fontSize: '0.8em'
       };
       
       return (
          <div style={windowStyles}>
             <ChatMessageHistory messages={this.state.messages} />
             <form style={formStyles} onSubmit={this.handleSubmit.bind(this)}>
                <input style={inputStyles} type="text" onChange={this.onChange.bind(this)} value={this.state.inputText} />
                <button style={btnStyles}>Send</button>
             </form>
          </div>
       );
    }
 }

 export default ChatWindow;