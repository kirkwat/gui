//update for review values
//add if there are no reviews

export const ReviewList = ({ reviews }) =>
    <ul className="list-group mt-4 mb-4">
        {
            reviews.map((review, index) =>
                <li key={index} className="list-group-item">
                    {review.userName}
                    <span className="float-end badge bg-primary">{review.comment}</span>
                    <span className="clearfix"></span>
                </li>)
        }
    </ul>;