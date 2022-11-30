import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-12 text-center">
                <p>{ greeting }</p>
            </div>
        </div>
    </div>
  )
}

export default ItemListContainer