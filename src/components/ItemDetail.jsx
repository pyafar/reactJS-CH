import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
<div className="card">
  <img src={`/img/products/${item.image}.jpg`} className="card-img-top" alt={item.title} />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">${item.price}</li>
  </ul>
  <div className="card-body">
    <ItemCount stockItems = { item.stock }/>
  </div>
</div>
  )
}

export default ItemDetail