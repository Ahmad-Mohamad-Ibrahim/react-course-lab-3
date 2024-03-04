import { useEffect, useState } from "react";
import Product from "./Product";
import React from 'react';
import useFetch from "./useFetch";



function Products () {
    // let [products, setProducts] = useState([]);
    let [products, getProducts] = useFetch("http://localhost:2000/products");
    // component did mount
    useEffect(() => {   
    getProducts();
    }, [])
    return ( 
        <div className="row">
            {   products.map((product) => {
                    return <Product key={product.id} product={product} />
                }
            )}
        </div>
     );
}

export default Products ;