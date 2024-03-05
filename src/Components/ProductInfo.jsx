import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

function ProductInfo() {
    const {id} = useParams();
    let [product,setProduct] = useState({});

    useEffect(() => {   
        getProduct(id);
    }, []);

    let getProduct = (productId) => {
        axios.get(`http://localhost:2000/products/${productId}`)
        .then(res => setProduct(res.data))
        .catch();
    }

    return ( 
    <div className="card bg-dark text-white">
        <img className="card-img" src={product.imgUrl} alt="Card image" />
        <div className="card-img-overlay">
            <h5 className="card-title text-dark">{product.name}</h5>
            <p className="card-text text-dark">{product.price}$</p>
            <p className="card-text text-dark">{product.quantity > 0 ? <span>In stock</span> :  <span className="text-danger">Out of stock</span>}</p>
        </div>
    </div>
    );
}

export default ProductInfo;