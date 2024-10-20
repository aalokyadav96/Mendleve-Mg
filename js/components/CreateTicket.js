// CreateTicket.js
import { InputField } from './InputField.js';
import { Button } from './Button.js';

export const CreateTicketForm = (onCreateTicket) => {
    const form = document.createElement('form');

    const ticketNameInput = InputField('Ticket Name', 'ticketName');
    const priceInput = InputField('Price', 'price', 'number'); // Use type 'number'
    const quantityInput = InputField('Quantity', 'quantity', 'number'); // Ticket quantity

    const submitButton = Button('Create Ticket', (event) => {
        event.preventDefault();
        const ticketDetails = {
            name: ticketNameInput.value,
            price: priceInput.value,
            quantity: quantityInput.value,
        };
        onCreateTicket(ticketDetails);
    });

    form.appendChild(ticketNameInput);
    form.appendChild(priceInput);
    form.appendChild(quantityInput);
    form.appendChild(submitButton);

    return form;
};
