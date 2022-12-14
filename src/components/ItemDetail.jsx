import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  return (
    <div className="detail-card text-center">
      <div className="detail-top">
        <img src={`/img/products/${item.image}.jpg`} className="detail-img" alt={item.title} />
      </div>
      <div className="detail-bot">
        <h5 className="detail-title">{item.title}</h5>
        <hr />
        <p className="detail-text">{item.description}</p>
        <hr />
        <p className="detail-price">Precio por unidad: ${item.price}</p>
        <div className="detail-cart">
          <ItemCount stockItems={item.stock} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;