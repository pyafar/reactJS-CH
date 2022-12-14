import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Link to={`/item/${product.id}`} className="text-decoration-none text-dark">
            <div className="card card-style">
                <img src={`/img/products/${product.image}.jpg`} className="card-img-top" alt={product.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>

                </div>
            </div>
        </Link>
    )
}

export default Item;