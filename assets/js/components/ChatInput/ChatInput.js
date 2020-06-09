import React, { useState } from 'react';

const chatInput = props => {
    return (
        <div>
            <input placeholder="Input Text" value={props.typed} onChange={props.handleChange}/>
            <button onClick={props.handleSubmit}/>
        </div>
    );
}

export default chatInput;