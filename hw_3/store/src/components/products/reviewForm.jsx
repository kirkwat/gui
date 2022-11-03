//create form to add review

import { useState } from "react";
import { SelectField, TextField } from "../common";
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
    const [ ratingOption ] = useState('');

    return <></>;
}