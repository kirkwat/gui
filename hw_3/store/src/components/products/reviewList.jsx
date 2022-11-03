//fix styling

import { Rating } from "../common";

export const ReviewList = ({ reviews }) => {

    if(reviews.length === 0) {
        return <>
            <h2>Product Reviews
                <span className="text-secondary"> ({reviews.length})</span>
            </h2>
            <p>Be the first to add a review!</p>
        </>
    }

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return <>
        <h4>Product Reviews
            <span className="text-secondary"> ({reviews.length})</span>
        </h4>

        <ul className="list-group">
            {
                reviews.map((review, index) =>

                    <div key={index} className="card">
                        <div className="card-header">
                            <Rating value={review.rating} className="d-inline-flex"/>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-secondary float-end">{new Date(review.date).toLocaleDateString('en-US',options)}</p>
                            <p className="card-text text-secondary">{review.userName}</p>
                            <p className="card-text">"{review.comment}"</p>
                        </div>
                    </div>
                )
            }
        </ul>
    </>;
};