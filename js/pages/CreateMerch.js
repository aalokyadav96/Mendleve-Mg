import { CreateMerchForm } from '../components/CreateMerchForm.js';
import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';

const CreateMerch = (eventId) => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Create Merchandise</h1>`;
    
    const createMerchForm = CreateMerchForm(async (merchData) => {
        try {
            await api.createMerch(eventId, merchData); // Create new merchandise
            navigateTo(`/event/${eventId}`); // Redirect back to the event page
        } catch (error) {
            alert("Merchandise creation failed: " + error.message);
        }
    });

    element.appendChild(createMerchForm);
    return element;
};

export default CreateMerch;

// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { navigateTo } from '../router.js';

// const CreateMerch = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Merchandise</h1>`;

//     const merchForm = CreateMerchForm((merchDetails) => {
//         console.log('Merch created:', merchDetails); // Send data to your server
//         navigateTo('/merch'); // Redirect to merch page after creation
//     });

//     element.appendChild(merchForm);
//     return element;
// };

// export default CreateMerch;
