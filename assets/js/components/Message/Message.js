import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en)

const message = props => {
   const timeAgo = new TimeAgo('en-US');
   const time = new Date(props.timestamp);
   
   return(
      <p>({props.author}) - {props.message}<br/>
      <small>{timeAgo.format(time)}</small>
   </p>
   );
 }

 export default message;