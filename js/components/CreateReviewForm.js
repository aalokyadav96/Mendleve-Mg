import { InputField } from './InputField.js';
import { Button } from './Button.js';

export const CreateReviewForm = (onCreateReview) => {
    const form = document.createElement('form');

    const reviewInput = InputField('Your Review', 'review', 'textarea');
    const submitButton = Button('Submit Review', (event) => {
        event.preventDefault();
        const reviewDetails = {
            content: reviewInput.value,
        };
        onCreateReview(reviewDetails);
        reviewInput.value = ''; // Clear input after submission
    });

    form.appendChild(reviewInput);
    form.appendChild(submitButton);

    return form;
};

// import { InputField } from './InputField.js';
// import { Button } from './Button.js';

// export const CreateReviewForm = (onCreateReview) => {
//     const form = document.createElement('form');

//     const placeInput = InputField('Place Name', 'place');
//     const ratingInput = InputField('Rating (1-5)', 'rating', 'number'); // Use type 'number'
//     const commentInput = InputField('Comment', 'comment', 'textarea');

//     const submitButton = Button('Submit Review', (event) => {
//         event.preventDefault();
//         const reviewDetails = {
//             place: placeInput.value,
//             rating: ratingInput.value,
//             comment: commentInput.value,
//         };
//         onCreateReview(reviewDetails);
//     });

//     form.appendChild(placeInput);
//     form.appendChild(ratingInput);
//     form.appendChild(commentInput);
//     form.appendChild(submitButton);

//     return form;
// };
