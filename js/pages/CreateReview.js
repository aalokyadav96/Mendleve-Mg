import { CreateReviewForm } from '../components/CreateReviewForm.js';
import { navigateTo } from '../router.js';

const CreateReview = () => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Create Review</h1>`;

    const reviewForm = CreateReviewForm((reviewDetails) => {
        console.log('Review created:', reviewDetails); // Send data to your server
        navigateTo('/reviews'); // Redirect to reviews page after submission
    });

    element.appendChild(reviewForm);
    return element;
};

export default CreateReview;
