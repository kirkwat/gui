import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../api";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from './reviewList';

export const ProductDetails = () => {

    const params = useParams();

    const [ product, setProduct ] = useState(undefined);

    useEffect(() => {
        getProductById(params.productId).then(x => setProduct(x));
    }, []);

    const mergeProduct = delta => setProduct({ ...product, ...delta });

    if(!product) {
        return <>Loading...</>;
    }

    return <>
        <nav className="alert alert-secondary pt-2.5 pb-0">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={`/`} className="text-decoration-none">
                        Tasty snacks
                    </Link>
                </li>
                <li className="breadcrumb-item active">{product.name}</li>
            </ol>
        </nav>
        <div className="container">
            <div className="jumbotron bg-light rounded mt-3 mb-4">
                <div className="row py-5">
                    <div className="col-md-4 pe-0">
                        <img src={product.imageUrl} alt={product.name} className="img-fluid"/>
                    </div>
                    <div className="col-md-8 pt-3 ps-0 pe-5">
                        <h1 className="display-4">{product.name}</h1>
                        <h3><span className="badge bg-primary">${product.price}</span></h3>
                        <p className="lead pt-2">{product.description}</p>
                    </div>
                </div>
            </div>
            <ReviewList reviews={product.reviews} />
            <ReviewForm onReviewAdded={ review => mergeProduct({ reviews: [...product.reviews, review]})} />
        </div>
    </>;
};