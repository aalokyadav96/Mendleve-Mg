import { InputField } from './InputField.js';
import { Button } from './Button.js';

export const CreateMerchForm = (onCreateMerch) => {
    const form = document.createElement('form');
    const merchList = document.createElement('div'); // Container for dynamic merch items

    const addMerchButton = Button('Add Merchandise', () => {
        const merchItem = document.createElement('div');
        const nameInput = InputField('Merch Name', 'name');
        const priceInput = InputField('Price', 'price', 'number');
        const quantityInput = InputField('Quantity', 'quantity', 'number');

        // Append inputs to merch item
        merchItem.appendChild(nameInput);
        merchItem.appendChild(priceInput);
        merchItem.appendChild(quantityInput);
        
        // Add a remove button for each merch item
        const removeButton = Button('Remove', () => {
            merchList.removeChild(merchItem);
        });
        merchItem.appendChild(removeButton);

        merchList.appendChild(merchItem);
    });

    const submitButton = Button('Create Merchandise', (event) => {
        event.preventDefault();
        const merchDetails = Array.from(merchList.children).map(item => {
            const name = item.querySelector('input[name="name"]').value;
            const price = item.querySelector('input[name="price"]').value;
            const quantity = item.querySelector('input[name="quantity"]').value;
            return { name, price, quantity };
        });
        onCreateMerch(merchDetails);
    });

    form.appendChild(addMerchButton);
    form.appendChild(merchList);
    form.appendChild(submitButton);

    return form;
};

// import { InputField } from './InputField.js';
// import { Button } from './Button.js';

// export const CreateMerchForm = (onCreateMerch) => {
//     const form = document.createElement('form');

//     const nameInput = InputField('Merch Name', 'name');
//     const priceInput = InputField('Price', 'price', 'number'); // Use type 'number'
//     const descriptionInput = InputField('Description', 'description');

//     const submitButton = Button('Create Merchandise', (event) => {
//         event.preventDefault();
//         const merchDetails = {
//             name: nameInput.value,
//             price: priceInput.value,
//             description: descriptionInput.value,
//         };
//         onCreateMerch(merchDetails);
//     });

//     form.appendChild(nameInput);
//     form.appendChild(priceInput);
//     form.appendChild(descriptionInput);
//     form.appendChild(submitButton);

//     return form;
// };
