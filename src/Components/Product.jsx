import React from 'react';

function Product ({ product }) {
    return ( 
        <div className="card col-4">
            <img className="card-img-top" src={product.imgUrl}/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="row">
                    <p className="col-3">{product.price}$</p>
                </div>

                <div className="row">
                    <p className="col-6">{product.quantity > 0 ? <span>In stock</span> :  <span className="text-danger">Out of stock</span>}</p>
                </div>
                <a className="btn btn-primary">Buy</a>
            </div>
        </div>
    );
}

export default Product ;