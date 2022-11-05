import { Rating } from "../common";

export const ReviewList = ({ reviews }) => {

    if(reviews.length === 0) {
        return <>
            <h3>Product Reviews
                <span className="text-secondary"> ({reviews.length})</span>
            </h3>
            <p className="bg-light rounded p-3">Be the first to add a review!</p>
        </>
    }

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return <>
        <h3>Product Reviews
            <span className="text-secondary"> ({reviews.length})</span>
        </h3>

        <ul className="list-group">
            {
                reviews.map((review, index) =>

                    <div key={index} className="card mb-3">
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