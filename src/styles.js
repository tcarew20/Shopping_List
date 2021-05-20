import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    page:{
        marginBottom: '100px'
    },
    heading:{
        margin: '20px'
    },
    form:{
        marginTop: '40px',
        padding: '30px'
    },
    submit:{
        marginTop: '20px'
    },
    shopItem:{
        marginBottom: '20px',
    },
    listSection:{
        margin:'40px 20px'
    },
    addedItem:{
        backgroundColor:'#ddd',
        padding: '10px',
        margin:'5px'
    },
    delete:{
        maxWidth: '16px'
    },
    emptyMessage:{
        margin: '15px 0px',
        fontStyle: 'italic' 
    }
}));

export default useStyles;
