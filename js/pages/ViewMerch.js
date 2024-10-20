import { CreateReviewForm } from '../components/CreateReviewForm.js';
import { getUser } from '../store.js';

export default function ViewMerch({ merchId }) {
    const element = document.createElement('div');
    
    const merch = mockMerchandise.find(item => item.id === Number(merchId));
    const user = getUser();

    if (merch) {
        element.innerHTML = `
            <h1>${merch.name}</h1>
            <p>Price: $${merch.price}</p>
            <h2>Reviews</h2>
            <div id="reviews-list"></div>
            <h3>Add Your Review</h3>
        `;

        const reviewsList = element.querySelector('#reviews-list');

        // Display existing reviews
        merch.reviews.forEach(review => {
            const reviewItem = document.createElement('p');
            reviewItem.textContent = review.content;
            reviewsList.appendChild(reviewItem);
        });

        // Add review form
        const reviewForm = CreateReviewForm((reviewDetails) => {
            merch.reviews.push(reviewDetails); // Add review to merchandise
            const newReviewItem = document.createElement('p');
            newReviewItem.textContent = reviewDetails.content;
            reviewsList.appendChild(newReviewItem);
        });

        element.appendChild(reviewForm);
    } else {
        element.innerHTML = '<h1>Merchandise Not Found</h1>';
    }

    return element;
}
