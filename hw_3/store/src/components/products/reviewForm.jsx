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

    return <>
        <ul className="list-group">
            <li className="list-group-item bg-secondary text-white">
                <h5 className="mb-1">Add Review</h5>
            </li>
            <li className="list-group-item">
                <div className="row mt-2">
                    <div className="col-6">
                        <TextField label="Your Name"
                                    value={newUserName}
                                    setValue={setNewUserName} />
                    </div>
                    <div className="col-3">
                        <SelectField label="Rating"
                                value={newRating}
                                setValue={setNewRating}
                                options={ratingOptions}
                                optionValueKey="value"
                                optionLabelKey="label" />
                    </div>
                    <div className="col-3 mt-4">
                        <Rating value={newRating}/>
                    </div>
                    <div className="col-12">
                        <TextAreaField label="Comment"
                                    value={newComment}
                                    setValue={setNewComment} />
                    </div>
                </div>
                <div className="row mb-2">
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