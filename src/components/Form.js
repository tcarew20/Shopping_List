import React, { useState } from 'react';
import { Typography, Grid, Paper, TextField, Button } from '@material-ui/core';
import useStyles from '../styles.js';


const Form = ({ onAdd }) => {

    const classes = useStyles();

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();

        if(!item || !quantity){
            alert('Please fill in both fields');
            return
        }
        
        onAdd({ item, quantity });

        setItem('');
        setQuantity('');
       }

    return (
        <>  
        <Grid container justify="center">
            <Paper variant="elevation" className={classes.form}>
                <form align="center" onSubmit={formSubmit}>
                    <Typography align="left" variant="body1">Item</Typography>
                    <TextField
                        value={item}
                        placeholder='Add item'
                        type="text"
                        onChange={(e) => setItem(e.target.value)}
                        align="center" 
                        className={classes.shopItem}>
                    </TextField>
                    <Typography align="left" variant="body1">Quantity</Typography>
                    <TextField
                        value={quantity}
                        placeholder='Add quantity'
                        type="number"
                        align="center" 
                        className={classes.shopItem}
                        onChange={(e) => setQuantity(e.target.value)}>   
                    </TextField>
                    <div>
                        <Button
                            className={classes.submit} 
                            color="primary" 
                            variant="contained"
                            type='submit'>Add
                        </Button>
                    </div>
                </form>
            </Paper>
        </Grid>
        </>
    )
}

export default Form
