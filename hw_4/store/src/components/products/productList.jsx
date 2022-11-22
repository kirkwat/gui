//TODO get buttons to bottom of card

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api";
import { CartContext } from "../../context";

export const ProductList = () => {

    const [ products, setProducts ] = useState(undefined);

    useEffect(() => {
        getProducts().then(x => setProducts(x));
    }, []);

    if(!products) {
        return <>Loading...</>;
    }

    return <>
        <nav className="alert alert-secondary">
            Tasty snacks
        </nav>
        <div className="container">
            <div className="row g-3">
            {
                products.map((product, index) =>
                    <div key={index} className="col-4">
                        <div className="card h-100">
                            <div className="position-relative mt-5 mx-5">
                                <img src={product.imageUrl} alt={product.name} className="card-img-top img-fluid"/>
                                <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill text-bg-success">
                                    ${product.price}
                                </span>
                            </div>
                            <div className="card-body pt-4">
                                <h4 className="card-title text-center">{product.name}</h4>
                                <div className="row g-2 align-items-end">
                                    <Link to={`products/${product.id}`} className="btn btn-info text-white">
                                        Product Details
                                    </Link>
                                    <Link to={`products/${product.id}`} 
                                        className="btn btn-warning"
                                        onClick={() => CartContext.addToCart(product)}
                                        >
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
        {console.log(CartContext)}
    </>;
};