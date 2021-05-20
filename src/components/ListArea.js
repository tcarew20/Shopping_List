import { Grid } from '@material-ui/core';
import ListItem from './ListItem';
import useStyles from '../styles';


const ListArea = ({ shopItems, onDelete, addQuantity, subQuantity }) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.listSection}>
                <Grid container>
                    <Grid item xs={6} style={{ marginLeft: '7px'}}>
                        Item
                    </Grid>
                    <Grid item xs={3}  align="right">
                        Quantity
                    </Grid>
                    <Grid item xs={3} align="center"></Grid>
                </Grid>
                {shopItems.length > 0 
                    ?
                    shopItems.map(item => (
                    <ListItem 
                        key={item.id} 
                        item={item} 
                        onDelete={onDelete} 
                        addQuantity={addQuantity}
                        subQuantity={subQuantity}/>
                ))
                    :
                    <div className={classes.emptyMessage}>There are no items in your shopping list</div>
            }
            </div>
        </>
    )
}

export default ListArea
