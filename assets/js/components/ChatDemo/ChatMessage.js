import React, { Component } from 'react';

class ChatMessage extends Component{
    render() {
       return(
          <p style={{marginBottom: 0}}>{this.props.message}<br/>
          <small>{this.props.timestamp}</small></p>
       );
    }
 }

 export default ChatMessage;