import { InputField } from './InputField.js';
import { Button } from './Button.js';

export const CreateTicketForm = (onCreateTicket) => {
    const form = document.createElement('form');
    const ticketList = document.createElement('div'); // Container for dynamic ticket items

    const addTicketButton = Button('Add Ticket', () => {
        const ticketItem = document.createElement('div');
        const nameInput = InputField('Ticket Name', 'ticket-name');
        const priceInput = InputField('Price', 'ticket-price', 'number');
        const quantityInput = InputField('Quantity', 'ticket-quantity', 'number');

        // Append inputs to ticket item
        ticketItem.appendChild(nameInput);
        ticketItem.appendChild(priceInput);
        ticketItem.appendChild(quantityInput);

        // Add a remove button for each ticket item
        const removeButton = Button('Remove', () => {
            ticketList.removeChild(ticketItem);
        });
        ticketItem.appendChild(removeButton);

        ticketList.appendChild(ticketItem);
    });

    const submitButton = Button('Create Tickets', (event) => {
        event.preventDefault();
        const ticketDetails = Array.from(ticketList.children).map(item => {
            const name = item.querySelector('input[name="ticket-name"]').value;
            const price = item.querySelector('input[name="ticket-price"]').value;
            const quantity = item.querySelector('input[name="ticket-quantity"]').value;
            return { name, price, quantity };
        });
        onCreateTicket(ticketDetails);
    });

    form.appendChild(addTicketButton);
    form.appendChild(ticketList);
    form.appendChild(submitButton);

    return form;
};
