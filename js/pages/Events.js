import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';

const Events = () => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Events</h1>`;

    const eventsContainer = document.createElement('div');
    eventsContainer.id = 'events-container'; // Container for the list of events
    element.appendChild(eventsContainer);

    async function fetchEvents() {
        try {
            const events = await api.getEvents(); // Fetch events from the backend
            if (events && events.length > 0) {
                eventsContainer.innerHTML = ''; // Clear any existing content

                // Create event elements for each event
                events.forEach((event) => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('event-item');
                    eventElement.innerHTML = `
                        <h2>${event.title}</h2>
                        <p>${event.description}</p>
                        <p>Date: ${event.date || 'No date provided'}</p>
                        <button class="view-event-btn" data-id="${event.eventid}">View Event</button>
                    `;
                    eventsContainer.appendChild(eventElement);
                });

                // Add event listeners to "View Event" buttons
                const viewButtons = eventsContainer.querySelectorAll('.view-event-btn');
                viewButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        const eventId = e.target.getAttribute('data-id');
                        navigateTo(`/event/${eventId}`); // Navigate to the event details page
                    });
                });
            } else {
                eventsContainer.innerHTML = '<p>No events found.</p>';
            }
        } catch (error) {
            console.error('Failed to fetch events:', error);
            eventsContainer.innerHTML = `<p>Failed to load events: ${error.message}</p>`;
        }
    }

    fetchEvents(); // Fetch events on component load

    return element;
};

export default Events;

// import { api } from '../api.js'; // Import the API module
// import { EventCard } from '../components/EventCard.js'; 

// const Events = async () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Events</h1>`;
//     console.log(element);

//     try {
//         const events = await api.getEvents(); // Fetch the events using the API method

//         // Check if events exist and render them
//         if (events.length > 0) {
//             events.forEach(event => {
//                 const eventCard = EventCard(event); 
//                 element.appendChild(eventCard);
//             });
//         } else {
//             element.innerHTML += `<p>No events available at the moment.</p>`;
//         }
//     } catch (error) {
//         // Display an error message if fetching events fails
//         element.innerHTML += `<p>Failed to load events: ${error.message}</p>`;
//     }

//     return element;
// };

// export default Events;

// import { api } from '../api.js'; // Import the API module
// import { EventCard } from '../components/EventCard.js'; // Import the EventCard component for displaying events

// const Events = async () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Events</h1>`;

//     try {
//         const events = await api.getEvents(); // Fetch the events using the API method

//         // Loop through the events and create cards for each
//         events.forEach(event => {
//             const eventCard = EventCard(event); // Assuming you have an EventCard component to render individual event info
//             element.appendChild(eventCard); // Append each event card to the main container
//         });
//     } catch (error) {
//         // Display an error message if fetching events fails
//         element.innerHTML += `<p>Failed to load events: ${error.message}</p>`;
//     }

//     return element;
// };

// export default Events;

// import { api } from '../api.js';
// import { EventCard } from '../components/EventCard.js'; // A component to display each event

// const Events = async () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Events</h1>`;
    
//     try {
//         const events = await api.getEvents(); // Fetch events from the backend
//         events.forEach(event => {
//             const eventCard = EventCard(event); // Create a card for each event
//             element.appendChild(eventCard);
//         });
//     } catch (error) {
//         element.innerHTML += `<p>Failed to load events: ${error.message}</p>`;
//     }
    
//     return element;
// };

// export default Events;

// // pages/Events.js
// const mockEvents = [
//     { id: 1, title: 'Music Festival', date: '2024-07-12' },
//     { id: 2, title: 'Art Exhibition', date: '2024-08-25' },
//     { id: 3, title: 'Tech Conference', date: '2024-09-15' },
// ];

// export default function Events() {
//     const element = document.createElement('div');
//     element.innerHTML = '<h1>Events List</h1>';

//     const list = document.createElement('ul');
//     mockEvents.forEach(event => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<a href="/view/event/${event.id}">${event.title}</a> - ${event.date}`;
//         list.appendChild(listItem);
//     });

//     element.appendChild(list);
//     return element;
// }
