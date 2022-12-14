import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsArray from '../data/products.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsArray.find(item => item.id === parseInt(id)));
      }, 2000);
    });

    promise.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;