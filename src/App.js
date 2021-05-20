import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import useStyles from './styles.js';
import Heading from './components/Heading';
import ListArea from './components/ListArea';
import Form from './components/Form';


function App() {

  const classes = useStyles();

  const [shopItems, setShopItems] = useState([
    {
        id: 1,
        item: 'Bananas',
        quantity: 2
    },
    {
        id: 2,
        item: 'Apples',
        quantity: 4
    },
    {
        id: 3,
        item: 'Milk',
        quantity: 1
    }
]);

 function deleteItem(id){
   setShopItems(shopItems.filter(item => item.id !== id));
 }

function createItem(item){
  const id = Math.floor(Math.random() * 1000) + 1;
  console.log(id);
  const newItem = {...item, id};
  setShopItems([...shopItems, newItem]);
}

  return (
    <>
      <CssBaseline>
        <div className={classes.page}>
          <Heading />
          <Container maxWidth="sm">
            <Form 
              onAdd={createItem}/>
            <ListArea 
              shopItems={shopItems} 
              onDelete={deleteItem}/>
          </Container>
        </div>
      </CssBaseline>
    </>
  );
}

export default App;
