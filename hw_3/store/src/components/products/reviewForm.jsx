//fix styling
//fix rating option thing

import { useState } from "react";
import { SelectField, TextField, TextAreaField, Rating } from "../common";
import { ProductReview } from "../../models";

export const ReviewForm = ({ onReviewAdded }) => {
    const ratingOptions = [
        { value: 1, label: '1 stars' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
    ];

    const [ newUserName, setNewUserName ] = useState('');
    const [ newRating, setNewRating ] = useState('');
    const [ newComment, setNewComment ] = useState('');
    //const [ ratingOptions ] = useState('');

    return <>
        <ul className="list-group mt-4 mb-4">
            <li className="list-group-item active">
                Add Review
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-6">
                        <TextField label="Your Name"
                                    value={newUserName}
                                    setValue={setNewUserName} />
                    </div>
                    <div className="col-3">
                        <SelectField label="Rating"
                                value={newRating}
                                setValue={setNewRating}
                                options={[1,2,3,4,5]} />
                    </div>
                    <div className="col-3">
                            <Rating value={newRating} className=""/>
                        </div>
                    <div className="col-12">
                        <TextAreaField label="Comment"
                                    value={newComment}
                                    setValue={setNewComment} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-primary"
                            onClick={ () => {
                                onReviewAdded(new ProductReview(newUserName, newRating, newComment, new Date().toDateString()));
                                setNewUserName('');
                                setNewRating('');
                                setNewComment('');
                            }}>
                            Submit
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    
    
    </>;
}