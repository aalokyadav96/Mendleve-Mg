import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';

const ViewPlace = (placeId) => {
    const element = document.createElement('div');
    element.innerHTML = '<p>Loading place details...</p>'; // Placeholder while loading

    async function fetchPlace() {
        try {
            console.log('Fetching place with ID:', placeId); // Debug log to ensure placeId is passed correctly
            
            const place = await api.getPlace(placeId); // Fetch place data from the backend
            if (!place) {
                throw new Error('Place not found'); // If no place is returned, throw an error
            }

            // Replace the loading placeholder with the actual place details
            element.innerHTML = `
                <h1>${place.name || 'Untitled Place'}</h1>
                <p>Location: ${place.location || 'Unknown'}</p>
                <p>Capacity: ${place.capacity || 'Not specified'}</p>
                <p>Reviews: ${place.reviews ? place.reviews.join(', ') : 'No reviews yet'}</p>
                <p>Merch: ${place.merch ? place.merch.join(', ') : 'No merchandise available'}</p>
            `;
        } catch (error) {
            console.error('Error fetching place:', error);
            element.innerHTML = `<p>Error loading place: ${error.message}</p>`;
            setTimeout(() => {
                navigateTo('/places'); // Redirect to the places list after showing the error
            }, 2000); // Delay to show the error before redirecting
        }
    }

    fetchPlace(); // Fetch place details on component load
    return element;
};

export default ViewPlace;

// import { api } from '../api.js'; // Import the centralized API
// import { navigateTo } from '../router.js'; // Import navigation function

// const ViewPlace = (placeId) => {
//     const element = document.createElement('div');
//     element.innerHTML = '<p>Loading place details...</p>'; // Initial loading placeholder

//     // Function to fetch and display place details
//     async function fetchPlace() {
//         try {
//             console.log('Fetching place with ID:', placeId); // Debug log for checking placeId
//             const place = await api.getPlace(placeId); // Fetch place details from the backend
            
//             if (!place) {
//                 throw new Error('Place not found'); // If no place is returned, throw an error
//             }

//             // Replace loading placeholder with place details
//             element.innerHTML = `
//                 <h1>${place.title}</h1>
//                 <p>${place.description || 'No description available'}</p>
//                 <p>Address: ${place.address || 'No address available'}</p>
//                 <p>Reviews: ${place.reviews ? place.reviews.join(', ') : 'No reviews yet'}</p>
//                 <p>Media: ${place.media ? place.media.join(', ') : 'No media uploaded'}</p>
//             `;
//         } catch (error) {
//             console.error('Error fetching place:', error); // Log any errors
//             element.innerHTML = `<p>Error loading place: ${error.message}</p>`;
//             setTimeout(() => {
//                 navigateTo('/places'); // Redirect to the places list after showing the error
//             }, 2000); // Delay to show the error message before redirecting
//         }
//     }

//     fetchPlace(); // Fetch place details on component load
//     return element;
// };

// export default ViewPlace;

// // pages/ViewPlace.js
// const mockPlaces = [
//     { id: 1, name: 'Central Park', description: "This is a sample place description.",location: 'New York' },
//     { id: 2, name: 'Eiffel Tower', description: "This is a sample place description.",location: 'Paris' },
//     { id: 3, name: 'Great Wall of China', description: "This is a sample place description.",location: 'China' },
// ];

// export default function ViewPlace({ placeId }) {
//     const element = document.createElement('div');
    
//     const place = mockPlaces.find(place => place.id === Number(placeId));
    
//     if (place) {
//         element.innerHTML = `<h1>${place.name}</h1><strong>${place.description}</strong><p>Date: ${place.location}</p>`;
//     } else {
//         element.innerHTML = '<h1>Place Not Found</h1>';
//     }

//     return element;
// }

// const ViewPlace = ({ placeId }) => {
//     const element = document.createElement('div');
    
//     // Fetch the place details based on placeId (you'll need to implement this function)
//     const placeDetails = fetchPlaceById(placeId); // Replace with your data fetching logic
//     element.innerHTML = `<h1>${placeDetails.name}</h1>`;
//     element.innerHTML += `<p>${placeDetails.description}</p>`;
//     element.innerHTML += `<p>Address: ${placeDetails.address}</p>`;

//     return element;
// };

// // Mock function to represent fetching a place by ID
// const fetchPlaceById = (id) => {
//     // Implement your fetching logic here
//     return {
//         name: "Sample Place",
//         description: "This is a sample place description.",
//         address: "123 Sample St, Sample City",
//     };
// };

// export default ViewPlace;
