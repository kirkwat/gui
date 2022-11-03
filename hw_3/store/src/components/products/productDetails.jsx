//fix styling
//fix errors in console

import { useState, useEffect } from "react";
import { getProductById } from "../../api";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from './reviewList';

export const ProductDetails = () => {

    const [ product, setProduct ] = useState(undefined);

    useEffect(() => {
        getProductById(1).then(x => setProduct(x));
    }, []);

    const mergeProduct = delta => setProduct({ ...product, ...delta });

    if(!product) {
        return <>Loading...</>;
    }

    return <>
        <div className="container">
            <nav aria-label="breadcrumb" className="rounded">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>
            <div className="jumbotron bg-secondary mt-4 mb-4">
                <div className="row">
                    <div className="col-md-4">
                        <img src={product.imageUrl} alt={product.name} className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4">{product.name}</h1>
                        <h3><span className="badge bg-primary">${product.price}</span></h3>
                        <p className="lead">{product.description}</p>
                    </div>
                </div>
            </div>
            <ReviewList reviews={product.reviews} />
            <ReviewForm onReviewAdded={ review => mergeProduct({ reviews: [...product.reviews, review]})} />
        </div>
    </>;
};