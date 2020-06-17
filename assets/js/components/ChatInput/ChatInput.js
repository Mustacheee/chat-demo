import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const chatInput = props => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item xs={12}> 
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                    placeholder="Input Text" 
                    value={props.typed} 
                    onChange={props.handleChange}
                    onKeyPress={props.handleKeyPress}
                />
            </Grid>
            <Grid item xs={12}> 
                <Button variant="contained" color="primary" onClick={props.handleSubmit}>Send</Button>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default chatInput;