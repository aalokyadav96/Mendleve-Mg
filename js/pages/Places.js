import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';

const Places = () => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Places</h1>';

    // Create a container to display the list of places
    const placesList = document.createElement('ul');
    element.appendChild(placesList);

    async function fetchPlaces() {
        try {
            const places = await api.getPlaces(); // Fetch places data from the backend
            
            if (!places || places.length === 0) {
                placesList.innerHTML = '<p>No places available.</p>';
                return;
            }

            // Render each place as a list item
            places.forEach((place) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h2>${place.name || 'Untitled Place'}</h2>
                    <p>Location: ${place.location || 'Unknown'}</p>
                    <p>Capacity: ${place.capacity || 'Not specified'}</p>
                `;

                // Add a link to view the place details
                const viewButton = document.createElement('button');
                viewButton.innerText = 'View Place';
                viewButton.addEventListener('click', () => {
                    navigateTo(`/place/${place.placeid}`);
                });

                listItem.appendChild(viewButton);
                placesList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching places:', error);
            placesList.innerHTML = `<p>Error loading places: ${error.message}</p>`;
        }
    }

    fetchPlaces(); // Fetch places on component load
    return element;
};

export default Places;

// import { api } from '../api.js'; // Import the centralized API
// import { navigateTo } from '../router.js'; // Import navigation function

// const Places = () => {
//     const element = document.createElement('div');
//     element.innerHTML = '<h1>Places</h1><p>Loading places...</p>'; // Initial loading state

//     // Function to fetch and display places
//     async function fetchPlaces() {
//         try {
//             const places = await api.getPlaces(); // Fetch places from backend
//             if (!places || places.length === 0) {
//                 element.innerHTML = '<p>No places found.</p>';
//                 return;
//             }

//             // Create a list of places
//             const list = document.createElement('ul');
//             places.forEach(place => {
//                 const listItem = document.createElement('li');
//                 listItem.innerHTML = `
//                     <h2>${place.title}</h2>
//                     <p>${place.description || 'No description available'}</p>
//                     <button id="view-${place.placeid}">View Details</button>
//                 `;

//                 // Add event listener to the "View Details" button
//                 listItem.querySelector(`#view-${place.placeid}`).addEventListener('click', () => {
//                     navigateTo(`/place/${place.placeid}`); // Navigate to the place details page
//                 });

//                 list.appendChild(listItem); // Append the place item to the list
//             });

//             // Replace the initial content with the list of places
//             element.innerHTML = '';
//             element.appendChild(list);
//         } catch (error) {
//             console.error('Error fetching places:', error); // Log any errors
//             element.innerHTML = '<p>Failed to load places.</p>';
//         }
//     }

//     fetchPlaces(); // Call the function to fetch places
//     return element;
// };

// export default Places;


// // pages/Places.js
// const mockPlaces = [
//     { id: 1, name: 'Central Park', location: 'New York' },
//     { id: 2, name: 'Eiffel Tower', location: 'Paris' },
//     { id: 3, name: 'Great Wall of China', location: 'China' },
// ];

// export default function Places() {
//     const element = document.createElement('div');
//     element.innerHTML = '<h1>Places List</h1>';

//     const list = document.createElement('ul');
//     mockPlaces.forEach(place => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<a href="/place/${place.id}">${place.name}</a> - ${place.location}`;
//         list.appendChild(listItem);
//     });

//     element.appendChild(list);
//     return element;
// }
