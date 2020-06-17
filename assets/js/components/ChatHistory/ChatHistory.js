import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const chatHistory = props => {
    return (
        <TextField
          id="outlined-multiline-static"
          multiline
          placeholder="Chat History"
          rows={4}
          defaultValue={props.messages.join('\n')}
          inputProps={{readOnly: true}}
          variant="filled"
        />
        // <TextareaAutosize
        //     id="filled-full-width"
        //     label="Chat History"
        //     margin="normal"
        //     readOnly={true}
        //     variant="filled"
        //     defaultValue={props.messages.join('\n')}
        // >
        // </TextareaAutosize>
    );
}

export default chatHistory;