import React from 'react';
import Message from '../Message/Message';

const chatHistory = props => {   
   return (
      <div className="chat-history">
         <ul>{props.messages.map(createMessage)}</ul>
      </div>
   );
 }

 const createMessage = (message, index) => {
   return (
      <li key={index} className="message">
         <Message message={message.message} timestamp={message.timestamp} author={message.author}/>
      </li>);
 };

 export default chatHistory;