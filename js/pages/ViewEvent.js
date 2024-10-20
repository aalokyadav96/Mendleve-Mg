import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';

const ViewEvent = (eventId) => {
    const element = document.createElement('div');
    console.log("h");
    element.innerHTML = '<p>Loading event details...</p>'; // Placeholder while loading
console.log("gdfhsbfgdh");
    async function fetchEvent() {
        try {
            console.log('Fetching event with ID:', eventId); // Debug log to ensure eventId is passed correctly
            
            const event = await api.getEvent(eventId); // Fetch event data from the backend
            if (!event) {
                throw new Error('Event not found'); // If no event is returned, throw an error
            }

            // Replace the loading placeholder with the actual event details
            element.innerHTML = `
                <h1>${event.title}</h1>
                <p>${event.description}</p>
                <p>Date: ${event.date || 'No date available'}</p>
                <p>Place: ${event.place || 'No place information'}</p>
                <p>Reviews: ${event.reviews ? event.reviews.join(', ') : 'No reviews yet'}</p>
                <p>Media: ${event.media ? event.media.join(', ') : 'No media uploaded'}</p>
            `;
        } catch (error) {
            console.error('Error fetching event:', error); // Log the error
            element.innerHTML = `<p>Error loading event: ${error.message}</p>`;
            setTimeout(() => {
                navigateTo('/events'); // Redirect to the events list after showing the error
            }, 2000); // Delay to show the error before redirecting
        }
    }

    fetchEvent(); // Fetch event details on component load
    return element;
};

export default ViewEvent;

// import { api } from '../api.js'; // Use the centralized API
// import { navigateTo } from '../router.js';

// const ViewEvent = (eventId) => {
//     const element = document.createElement('div');
    
//     async function fetchEvent() {
//         try {
//             console.log('Fetching event with ID:', eventId); // Debug log to ensure eventId is passed correctly
//             const event = await api.getEvent(eventId); // Fetch event data from backend
            
//             if (!event) {
//                 throw new Error('Event not found');
//             }

//             element.innerHTML = `
//                 <h1>${event.title}</h1>
//                 <p>${event.description}</p>
//                 <p>Date: ${event.date || 'No date available'}</p>
//             `;
//         } catch (error) {
//             console.error('Error fetching event:', error); // Log the error
//             alert("Failed to load event: " + error.message);
//             navigateTo('/events'); // Redirect to events list if failed
//         }
//     }

//     fetchEvent(); // Fetch event details on component load
//     return element;
// };

// export default ViewEvent;

// import { api } from '../api.js'; // Use the centralized API
// import { navigateTo } from '../router.js';

// const ViewEvent = (eventId) => {
//     const element = document.createElement('div');
    
//     async function fetchEvent() {
//         try {
//             const event = await api.getEvent(eventId); // Fetch event data from backend
//             element.innerHTML = `
//                 <h1>${event.title}</h1>
//                 <p>${event.description}</p>
//                 <p>Date: ${event.date}</p>
//             `;
//         } catch (error) {
//             alert("Failed to load event: " + error.message);
//             navigateTo('/events'); // Redirect to events list if failed
//         }
//     }

//     fetchEvent(); // Fetch event details on component load
//     return element;
// };

// export default ViewEvent;

// import { Modal } from '../components/Modal.js'; // Adjust the import path as necessary
// // import { CreateReviewForm } from '../components/CreateReviewForm.js';
// // import { getUser } from '../store.js';

// // In your mock data file
// const mockEvents = [
//     { id: 1, title: 'Music Festival', date: '2024-07-12', reviews: [] },
//     { id: 2, title: 'Art Exhibition', date: '2024-08-25', reviews: [] },
//     { id: 3, title: 'Tech Conference', date: '2024-09-15', reviews: [] },
// ];

// const mockMerchandise = [
//     { id: 1, name: 'T-Shirt', price: 20, reviews: [] },
//     { id: 2, name: 'Poster', price: 10, reviews: [] },
// ];

// const mockTickets = [
//     { id: 1, type: 'General Admission', price: 50, reviews: [] },
//     { id: 2, type: 'VIP', price: 100, reviews: [] },
// ];

// export default function ViewEvent({ eventId }) {
//     const element = document.createElement('div');

//     const event = mockEvents.find(event => event.id === Number(eventId));

//     if (event) {
//         // element.innerHTML = `<h1>${event.title}</h1><strong>${event.id}</strong><p>Date: ${event.date}</p>`;
        
//         element.innerHTML = `
//             <h1>${event.title}</h1>
//             <strong>${event.id}</strong>
//             <p>Date: ${event.date}</p>
//             <h2>Reviews</h2>
//             <div id="reviews-list"></div>
//             <h3>Add Your Review</h3>
//         `;

//         // const reviewsList = element.querySelector('#reviews-list');

//         // // Display existing reviews
//         // event.reviews.forEach(review => {
//         //     const reviewItem = document.createElement('p');
//         //     reviewItem.textContent = review.content;
//         //     reviewsList.appendChild(reviewItem);
//         // });

//         // // Add review form
//         // const reviewForm = CreateReviewForm((reviewDetails) => {
//         //     event.reviews.push(reviewDetails); // Add review to event
//         //     const newReviewItem = document.createElement('p');
//         //     newReviewItem.textContent = reviewDetails.content;
//         //     reviewsList.appendChild(newReviewItem);
//         // });

//         // element.appendChild(reviewForm);
        
//         // Merchandise Section
//         const merchSection = document.createElement('div');
//         merchSection.innerHTML = `<h2>Available Merchandise</h2>`;
//         mockMerchandise.forEach(merch => {
//             const merchItem = document.createElement('div');
//             merchItem.innerHTML = `${merch.name} - $${merch.price} `;
            
//             const buyButton = document.createElement('button');
//             buyButton.innerText = 'Buy';
//             buyButton.onclick = () => openMerchModal(merch.id); // Attach event listener
//             merchItem.appendChild(buyButton);
//             merchSection.appendChild(merchItem);
//         });
//         element.appendChild(merchSection);

//         // Tickets Section
//         const ticketsSection = document.createElement('div');
//         ticketsSection.innerHTML = `<h2>Available Tickets</h2>`;
//         mockTickets.forEach(ticket => {
//             const ticketItem = document.createElement('div');
//             ticketItem.innerHTML = `${ticket.type} - $${ticket.price} `;
            
//             const buyButton = document.createElement('button');
//             buyButton.innerText = 'Buy';
//             buyButton.onclick = () => openTicketModal(ticket.id); // Attach event listener
//             ticketItem.appendChild(buyButton);
//             ticketsSection.appendChild(ticketItem);
//         });
//         element.appendChild(ticketsSection);

//     } else {
//         element.innerHTML = '<h1>Event Not Found</h1>';
//     }

//     return element;

//     function openMerchModal(merchId) {
//         const selectedMerch = mockMerchandise.find(m => m.id === merchId);
//         const content = `You are about to purchase ${selectedMerch.name} for $${selectedMerch.price}. Confirm your purchase.`;
//         const modal = Modal(content, () => {
//             document.body.removeChild(modal);
//         });
//         document.body.appendChild(modal);
//         console.log('Merch modal opened:', selectedMerch);
//     }

//     function openTicketModal(ticketId) {
//         const selectedTicket = mockTickets.find(t => t.id === ticketId);
//         const content = `You are about to purchase a ${selectedTicket.type} ticket for $${selectedTicket.price}. Confirm your purchase.`;
//         const modal = Modal(content, () => {
//             document.body.removeChild(modal);
//         });
//         document.body.appendChild(modal);
//         console.log('Ticket modal opened:', selectedTicket);
//     }
// }

// import { Modal } from '../components/Modal.js'; // Adjust the import path as necessary

// const mockEvents = [
//     { id: 1, title: 'Music Festival', date: '2024-07-12' },
//     { id: 2, title: 'Art Exhibition', date: '2024-08-25' },
//     { id: 3, title: 'Tech Conference', date: '2024-09-15' },
// ];

// const mockMerchandise = [
//     { id: 1, name: 'T-Shirt', price: 20 },
//     { id: 2, name: 'Poster', price: 10 },
// ];

// const mockTickets = [
//     { id: 1, type: 'General Admission', price: 50 },
//     { id: 2, type: 'VIP', price: 100 },
// ];

// export default function ViewEvent({ eventId }) {
//     const element = document.createElement('div');

//     const event = mockEvents.find(event => event.id === Number(eventId));

//     if (event) {
//         element.innerHTML = `<h1>${event.title}</h1><strong>${event.id}</strong><p>Date: ${event.date}</p>`;
        
//         // Merchandise Section
//         const merchSection = document.createElement('div');
//         merchSection.innerHTML = `<h2>Available Merchandise</h2>`;
//         mockMerchandise.forEach(merch => {
//             const merchItem = document.createElement('div');
//             merchItem.innerHTML = `${merch.name} - $${merch.price} <button onclick="openMerchModal(${merch.id})">Buy</button>`;
//             merchSection.appendChild(merchItem);
//         });
//         element.appendChild(merchSection);

//         // Tickets Section
//         const ticketsSection = document.createElement('div');
//         ticketsSection.innerHTML = `<h2>Available Tickets</h2>`;
//         mockTickets.forEach(ticket => {
//             const ticketItem = document.createElement('div');
//             ticketItem.innerHTML = `${ticket.type} - $${ticket.price} <button onclick="openTicketModal(${ticket.id})">Buy</button>`;
//             ticketsSection.appendChild(ticketItem);
//         });
//         element.appendChild(ticketsSection);

//     } else {
//         element.innerHTML = '<h1>Event Not Found</h1>';
//     }

//     return element;

//     function openMerchModal(merchId) {
//         const selectedMerch = mockMerchandise.find(m => m.id === merchId);
//         const content = `You are about to purchase ${selectedMerch.name} for $${selectedMerch.price}. Confirm your purchase.`;
//         const modal = Modal(content, () => {
//             document.body.removeChild(modal);
//         });
//         document.body.appendChild(modal);
//         console.log('Merch modal opened:', selectedMerch);
//     }

//     function openTicketModal(ticketId) {
//         const selectedTicket = mockTickets.find(t => t.id === ticketId);
//         const content = `You are about to purchase a ${selectedTicket.type} ticket for $${selectedTicket.price}. Confirm your purchase.`;
//         const modal = Modal(content, () => {
//             document.body.removeChild(modal);
//         });
//         document.body.appendChild(modal);
//         console.log('Ticket modal opened:', selectedTicket);
//     }
// }

// const mockEvents = [
//     { id: 1, title: 'Music Festival', date: '2024-07-12' },
//     { id: 2, title: 'Art Exhibition', date: '2024-08-25' },
//     { id: 3, title: 'Tech Conference', date: '2024-09-15' },
// ];

// const mockMerchandise = [
//     { id: 1, name: 'T-Shirt', price: 20 },
//     { id: 2, name: 'Poster', price: 10 },
// ];

// const mockTickets = [
//     { id: 1, type: 'General Admission', price: 50 },
//     { id: 2, type: 'VIP', price: 100 },
// ];

// export default function ViewEvent({ eventId }) {
//     const element = document.createElement('div');

//     const event = mockEvents.find(event => event.id === Number(eventId));

//     if (event) {
//         element.innerHTML = `<h1>${event.title}</h1><strong>${event.id}</strong><p>Date: ${event.date}</p>`;
        
//         // Merchandise Section
//         const merchSection = document.createElement('div');
//         merchSection.innerHTML = `<h2>Available Merchandise</h2>`;
//         mockMerchandise.forEach(merch => {
//             const merchItem = document.createElement('div');
//             merchItem.innerHTML = `${merch.name} - $${merch.price} <button onclick="buyMerch(${merch.id})">Buy</button>`;
//             merchSection.appendChild(merchItem);
//         });
//         element.appendChild(merchSection);

//         // Tickets Section
//         const ticketsSection = document.createElement('div');
//         ticketsSection.innerHTML = `<h2>Available Tickets</h2>`;
//         mockTickets.forEach(ticket => {
//             const ticketItem = document.createElement('div');
//             ticketItem.innerHTML = `${ticket.type} - $${ticket.price} <button onclick="buyTicket(${ticket.id})">Buy</button>`;
//             ticketsSection.appendChild(ticketItem);
//         });
//         element.appendChild(ticketsSection);

//     } else {
//         element.innerHTML = '<h1>Event Not Found</h1>';
//     }

//     return element;

//     function buyMerch(merchId) {
//         const selectedMerch = mockMerchandise.find(m => m.id === merchId);
//         console.log('Purchased Merchandise:', selectedMerch);
//         alert(`You bought ${selectedMerch.name} for $${selectedMerch.price}`);
//     }

//     function buyTicket(ticketId) {
//         const selectedTicket = mockTickets.find(t => t.id === ticketId);
//         console.log('Purchased Ticket:', selectedTicket);
//         alert(`You bought ${selectedTicket.type} ticket for $${selectedTicket.price}`);
//     }
// }

// // pages/ViewEvent.js
// const mockEvents = [
//     { id: 1, title: 'Music Festival', date: '2024-07-12' },
//     { id: 2, title: 'Art Exhibition', date: '2024-08-25' },
//     { id: 3, title: 'Tech Conference', date: '2024-09-15' },
// ];

// export default function ViewEvent({ eventId }) {
//     const element = document.createElement('div');
    
//     const event = mockEvents.find(event => event.id === Number(eventId));
    
//     if (event) {
//         element.innerHTML = `<h1>${event.title}</h1><strong>${event.id}</strong><p>Date: ${event.date}</p>`;
//     } else {
//         element.innerHTML = '<h1>Event Not Found</h1>';
//     }

//     return element;
// }


// const ViewEvent = ({ eventId }) => {
//     const element = document.createElement('div');
    
//     // Fetch the event details based on eventId (you'll need to implement this function)
//     const eventDetails = fetchEventById(eventId); // Replace with your data fetching logic
//     element.innerHTML = `<h1>${eventDetails.id}</h1>`;
//     element.innerHTML += `<p>${eventDetails.title}</p>`;
//     element.innerHTML += `<p>Address: ${eventDetails.date}</p>`;

//     return element;
// };

// // Mock function to represent fetching a event by ID
// const fetchEventById = (id) => {
//     // Implement your fetching logic here
//     return {
//         id: "1",
//         title: "This is a sample event description.",
//         date: "123 Sample St, Sample City",
//     };
// };

// export default ViewEvent;


// // pages/ViewEvent.js
// const mockEvents = [
//     { id: 1, title: 'Music Festival', date: '2024-07-12' },
//     { id: 2, title: 'Art Exhibition', date: '2024-08-25' },
//     { id: 3, title: 'Tech Conference', date: '2024-09-15' },
// ];

// export default function ViewEvent({ eventId }) {
//     const element = document.createElement('div');
    
//     const event = mockEvents.find(event => event.id === Number(eventId));
    
//     if (event) {
//         element.innerHTML = `<h1>${event.title}</h1><p>Date: ${event.date}</p>`;
//     } else {
//         element.innerHTML = '<h1>Event Not Found</h1>';
//     }

//     return element;
// }


// import { CreateReviewForm } from '../components/CreateReviewForm.js';
// import { getUser } from '../store.js';

// const ViewEvent = ({ eventId }) => {
//     const element = document.createElement('div');
    
//     // Fetch the event details based on eventId (you'll need to implement this function)
//     const eventDetails = fetchEventById(eventId); // Replace with your data fetching logic
//     element.innerHTML = `<h1>${eventDetails.title}</h1>`;
//     element.innerHTML += `<p>${eventDetails.description}</p>`;
//     element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//     element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;

//     const user = getUser();

//     if (user) {
//         const reviewForm = CreateReviewForm((reviewDetails) => {
//             console.log('Review created:', reviewDetails); // Here you would send the data to your server
//             // Optionally refresh the reviews list
//         });

//         element.appendChild(reviewForm);
//     } else {
//         element.innerHTML += `<p>Please log in to submit a review.</p>`;
//     }

//     return element;
// };

// // Mock function to represent fetching an event by ID
// const fetchEventById = (id) => {
//     // Implement your fetching logic here
//     return {
//         title: "Sample Event",
//         description: "This is a sample event description.",
//         date: "2024-01-01",
//         location: "Sample Location",
//     };
// };

// export default ViewEvent;
