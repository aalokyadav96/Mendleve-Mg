import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';
import CreatePlaceForm from '../components/CreatePlaceForm.js'; // Import the form component

const CreatePlace = () => {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Create New Place</h1>';

    // Create the form and pass a submit handler
    const form = CreatePlaceForm(async (formData) => {
        try {
            // Send the form data to the backend API
            const createdPlace = await api.createPlace(formData);

            // On successful creation, navigate to the created place's page
            if (createdPlace && createdPlace.placeid) {
                navigateTo(`/place/${createdPlace.placeid}`);
            } else {
                alert('Failed to create place.');
            }
        } catch (error) {
            console.error('Error creating place:', error);
            alert('Error creating place: ' + error.message);
        }
    });

    element.appendChild(form);
    return element;
};

export default CreatePlace;

// import { navigateTo } from '../router.js';
// import { CreatePlaceForm } from '../components/CreatePlaceForm.js';
// import { api } from '../api.js'; // Import the centralized API

// const CreatePlace = () => {
//     const element = document.createElement('div');
//     element.innerHTML = '<h1>Create New Place</h1>';

//     // Function to handle form submission and place creation
//     const handleCreatePlace = async (placeData) => {
//         try {
//             const response = await api.createPlace(placeData); // Send form data to backend
//             alert('Place created successfully');
//             navigateTo(`/place/${response.placeid}`); // Redirect to the newly created place's page
//         } catch (error) {
//             console.error('Error creating place:', error); // Log any errors
//             alert('Failed to create place: ' + error.message);
//         }
//     };

//     // Create place form and pass the form submission handler
//     const form = CreatePlaceForm(handleCreatePlace);
//     element.appendChild(form);

//     return element;
// };

// export default CreatePlace;

// import { getUser } from '../store.js';
// import { CreatePlaceForm } from '../components/CreatePlaceForm.js';
// import { navigateTo } from '../router.js';

// const CreatePlace = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Place</h1>`;

//     const user = getUser();

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Place.</h1>`;
//         return element;
//     }

//     const placeForm = CreatePlaceForm((placeDetails) => {
//         console.log('Place created:', placeDetails); // Send data to your server
//         displayPlaceDetails(placeDetails); // Display the created place details
//     });

//     element.appendChild(placeForm);
//     return element;

//     function displayPlaceDetails(placeDetails) {
//         // Clear the element and show the place details
//         element.innerHTML = `<h1>Place Created Successfully</h1>`;
//         element.innerHTML += `<p>Name: ${placeDetails.name}</p>`;
//         element.innerHTML += `<p>Address: ${placeDetails.address}</p>`;
//         element.innerHTML += `<p>Description: ${placeDetails.description}</p>`;
//         // Optionally add a button to navigate to places page
//         const backButton = document.createElement('button');
//         backButton.innerText = 'Go to Places';
//         backButton.onclick = () => navigateTo('/places');
//         element.appendChild(backButton);
//     }
// };

// export default CreatePlace;

// import { getUser } from '../store.js';
// import { CreatePlaceForm } from '../components/CreatePlaceForm.js';
// import { navigateTo } from '../router.js';

// const CreatePlace = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Place</h1>`;

//     const user = getUser();

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Place.</h1>`;
//         return element;
//     }

//     const placeForm = CreatePlaceForm((placeDetails) => {
//         console.log('Place created:', placeDetails); // Send data to your server
//         navigateTo('/places'); // Redirect to places page after creation
//     });

//     element.appendChild(placeForm);
//     return element;
// };

// export default CreatePlace;
