import { useState, useEffect } from "react";
import { getProducts } from "../../api";

export const ProductList = () => {

    const [ products, setProducts ] = useState(undefined);

    useEffect(() => {
        getProducts().then(x => setProducts(x));
    }, []);

    if(!products) {
        return <>Loading...</>;
    }

    return <>
        {console.log(products)}
        <div className="container">
            {/* add router links*/}
            <nav className="bg-dark text-white p-2 fs-4">Store</nav>
            <nav className="alert alert-secondary">
                Tasty snacks
            </nav>
            <div className="row g-3">
            {
                products.map((product, index) =>

                    <div key={index} className="col-4">
                        <div className="card h-100">
                            <div className="position-relative mt-5 mx-5">
                                <img src={product.imageUrl} alt={product.name} className="card-img-top img-fluid"/>
                                <span class="position-absolute top-100 start-100 translate-middle badge rounded-pill text-bg-success">
                                    ${product.price}
                                </span>
                            </div>
                            <div className="card-body pt-4">
                                <h4 className="card-title text-center">{product.name}</h4>
                                <div className="row g-2 align-items-end">
                                    <button type="button" className="btn btn-info text-white">
                                        Product Details
                                    </button>
                                    <button type="button" className="btn btn-warning">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    </>;
};