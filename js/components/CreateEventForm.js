import { InputField } from './InputField.js';
import { Button } from './Button.js';

export const CreateEventForm = (onCreateEvent) => {
    const form = document.createElement('form');

    const titleInput = InputField('Event Title', 'title');
    const dateInput = InputField('Event Date', 'date', 'date'); // Use type 'date'
    const placeInput = InputField('place', 'place');
    const descriptionInput = InputField('Description', 'description');

    const submitButton = Button('Create Event', (event) => {
        event.preventDefault();
        const eventDetails = {
            title: titleInput.value,
            date: dateInput.value,
            place: placeInput.value,
            description: descriptionInput.value,
        };
        onCreateEvent(eventDetails);
    });

    form.appendChild(titleInput);
    form.appendChild(dateInput);
    form.appendChild(placeInput);
    form.appendChild(descriptionInput);
    form.appendChild(submitButton);

    return form;
};
