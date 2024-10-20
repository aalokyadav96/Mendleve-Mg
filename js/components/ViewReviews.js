const ViewReviews = (reviews) => {
    const reviewsList = document.createElement('div');
    reviewsList.innerHTML = '<h2>Reviews:</h2>';
    
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.innerHTML = `<strong>${review.title}</strong><p>${review.content}</p><p>Rating: ${review.rating}</p>`;
        reviewsList.appendChild(reviewItem);
    });
    
    return reviewsList;
};

export default ViewReviews;
