import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById, addReview } from "../../api";
import { CartContext } from "../../context";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from './reviewList';

export const ProductDetails = () => {

    const params = useParams();
    const cartContext = useContext(CartContext);

    const [ product, setProduct ] = useState(undefined);

    useEffect(() => {
        getProductById(params.productId).then(x => setProduct(x));
    }, []);

    const onReviewAdded = review => {
        const _product = {...product};
        _product.reviews.push(review);
        setProduct(_product);
        addReview(product.id, review);
    }

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
                        <Link to={`/cart`} 
                            className="btn btn-warning float-end"
                            onClick={() => cartContext.addToCart(product)}>
                                Add to Cart
                            </Link>
                    </div>
                </div>
            </div>
            <ReviewList reviews={product.reviews} />
            <ReviewForm onReviewAdded={ review => onReviewAdded(review)} />
        </div>
    </>;
};