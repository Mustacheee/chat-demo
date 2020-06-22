import React from 'react';

const chatInput = props => {
   return (
      <form className="chat-input-container" onSubmit={props.handleSubmit}>
         <input type="text" onChange={props.handleInputChange} value={props.value} />
         <button>Send</button>
      </form>
   );
 }

 export default chatInput;