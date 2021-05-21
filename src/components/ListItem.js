import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles';

const ListItem = ({ onDelete, item, addQuantity, subQuantity }) => {

    const classes = useStyles();

    const [quantity, setQuantity] = useState(item.quantity);

    return (
        <div className={classes.addedItem}>
            <Grid container>
                <Grid item xs={2} >
                    <span>{item.item}</span>
                </Grid>
                <Grid item xs={1} align="center">
                    <span><DeleteIcon onClick={() => 
                        onDelete(item.id)} 
                        className={classes.delete} 
                        style={{ cursor: 'pointer'}}/>
                    </span>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} align="center">
                    <span>x {quantity}</span>
                </Grid>
                <Grid item xs={1}>
                    <RemoveIcon style={{ cursor: 'pointer'}} onClick={() =>
                        setQuantity(quantity - 1)}/>
                </Grid>
                <Grid item xs={1}>
                    <AddIcon style={{ cursor: 'pointer'}} onClick={() =>
                        setQuantity(parseInt(quantity) + 1)}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ListItem
