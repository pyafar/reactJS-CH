import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import productsArray from '../data/products.json'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(()=> {
    console.log(id)
    const promise = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(id ? productsArray.filter(item => item.category === id) : productsArray);
      }, 2000);
    });
    promise.then((data)=>{
      setItems(data);
    })
  }, [id]);


  

  return (
    <div className="container mt-3">
      <div className="row">
        <ItemList items = {items} />
        
        {/* <ItemCount stockItems={10}/> */}
        
      </div>
    </div>
  )
}

export default ItemListContainer