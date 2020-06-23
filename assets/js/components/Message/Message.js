import React from 'react';

const message = props => {
   return(
      <p>{props.message}<br/>
      <small>{props.timestamp}</small>
   </p>
   );
 }

 export default message;