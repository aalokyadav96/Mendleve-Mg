const CreatePlaceForm = (onSubmit) => {
    const form = document.createElement('form');

    form.innerHTML = `
        <div>
            <label for="name">Place Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location">
        </div>
        <div>
            <label for="capacity">Capacity:</label>
            <input type="number" id="capacity" name="capacity" min="0">
        </div>
        <button type="submit">Create Place</button>
    `;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = form.querySelector('#name').value;
        const location = form.querySelector('#location').value;
        const capacity = parseInt(form.querySelector('#capacity').value, 10) || 0;

        // Call the provided onSubmit function with form data
        onSubmit({ name, location, capacity });
    });

    return form;
};

export default CreatePlaceForm;

// export const CreatePlaceForm = (onCreatePlace) => {
//     const form = document.createElement('form');

//     // Create input fields
//     const titleInput = document.createElement('input');
//     titleInput.setAttribute('type', 'text');
//     titleInput.setAttribute('placeholder', 'Title');
//     titleInput.required = true;

//     const descriptionInput = document.createElement('textarea');
//     descriptionInput.setAttribute('placeholder', 'Description');
//     descriptionInput.required = true;

//     const addressInput = document.createElement('input');
//     addressInput.setAttribute('type', 'text');
//     addressInput.setAttribute('placeholder', 'Address');
//     addressInput.required = true;

//     // Create submit button
//     const submitButton = document.createElement('button');
//     submitButton.innerText = 'Create Place';

//     // Handle form submission
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const placeData = {
//             title: titleInput.value,
//             description: descriptionInput.value,
//             address: addressInput.value,
//         };

//         onCreatePlace(placeData); // Call the handler passed from CreatePlace.js
//     });

//     // Append fields to the form
//     form.appendChild(titleInput);
//     form.appendChild(descriptionInput);
//     form.appendChild(addressInput);
//     form.appendChild(submitButton);

//     return form;
// };

// import { InputField } from './InputField.js';
// import { Button } from './Button.js';

// export const CreatePlaceForm = (onCreatePlace) => {
//     const form = document.createElement('form');

//     const nameInput = InputField('Place Name', 'name');
//     const addressInput = InputField('Address', 'address');
//     const descriptionInput = InputField('Description', 'description');

//     const submitButton = Button('Create Place', (event) => {
//         event.preventDefault();
//         const placeDetails = {
//             name: nameInput.value,
//             address: addressInput.value,
//             description: descriptionInput.value,
//         };
//         onCreatePlace(placeDetails);
//     });

//     form.appendChild(nameInput);
//     form.appendChild(addressInput);
//     form.appendChild(descriptionInput);
//     form.appendChild(submitButton);

//     return form;
// };
