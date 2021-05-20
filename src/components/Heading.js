import { AppBar, Typography } from '@material-ui/core';
import useStyles from '../styles.js';

const Heading = () => {

    const classes = useStyles();

    return (
        <>
          <AppBar position="static">
            <Typography className={classes.heading} variant="h3" align="center">Shopping List</Typography>
          </AppBar>
        </>
    )
}

export default Heading
