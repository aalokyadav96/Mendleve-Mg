import { CreateEventForm } from '../components/CreateEventForm.js';
import { api } from '../api.js'; // Use the centralized API
import { navigateTo } from '../router.js';

const CreateEvent = () => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Create Event</h1>`;
    
    const createEventForm = CreateEventForm(async (eventData) => {
        try {
            await api.createEvent(eventData); // Call API to create event
            navigateTo('/events'); // Redirect to events list after creation
        } catch (error) {
            alert("Event creation failed: " + error.message);
        }
    });

    element.appendChild(createEventForm);
    return element;
};

export default CreateEvent;

// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { CreateTicketForm } from '../components/CreateTicket.js'; 

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventDetails = null; // Store event details
//     const merchList = []; // Store created merchandise
//     const ticketList = []; // Store created tickets

//     const eventForm = CreateEventForm((details) => {
//         console.log('Event created:', details);
//         eventDetails = details;
//         displayEventDetails(); // Show the event details
//     });

//     element.appendChild(eventForm);

//     const displayEventDetails = () => {
//         // Clear the element and show the event details
//         element.innerHTML = `<h1>Event Created Successfully</h1>`;
//         element.innerHTML += `<p>Title: ${eventDetails.title}</p>`;
//         element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//         element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;
//         element.innerHTML += `<p>Description: ${eventDetails.description}</p>`;

//         // Append the merch and ticket forms
//         element.appendChild(createMerchForm());
//         element.appendChild(createTicketForm());

//         // Display the lists of created merch and tickets only once
//         displayMerchList();
//         displayTicketList();
//     };

//     const createTicketForm = () => {
//         const ticketForm = CreateTicketForm((ticketDetails) => {
//             ticketList.push(ticketDetails); // Add the new ticket to the list
//             console.log('Ticket created:', ticketDetails);
//             displayTicketList(); // Update the displayed list of tickets
//         });
//         return ticketForm;
//     };

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             merchList.push(merchDetails); // Add the new merch to the list
//             console.log('Merch created:', merchDetails);
//             displayMerchList(); // Update the displayed list of merchandise
//         });
//         return merchForm;
//     };

//     const displayMerchList = () => {
//         let merchListContainer = element.querySelector('.merch-list');
//         if (!merchListContainer) {
//             merchListContainer = document.createElement('div');
//             merchListContainer.className = 'merch-list';
//             merchListContainer.innerHTML = '<h2>Created Merchandise</h2>';
//             element.appendChild(merchListContainer);
//         } else {
//             merchListContainer.innerHTML = '<h2>Created Merchandise</h2>'; // Reset content
//         }

//         merchList.forEach((merch, index) => {
//             const item = document.createElement('p');
//             item.innerHTML = `${index + 1}. Name: ${merch.name}, Price: $${merch.price}, Quantity: ${merch.quantity} 
//             <button onclick="editMerch(${index})">Edit</button> 
//             <button onclick="deleteMerch(${index})">Delete</button>`;
//             merchListContainer.appendChild(item);
//         });
//     };

//     const displayTicketList = () => {
//         let ticketListContainer = element.querySelector('.ticket-list');
//         if (!ticketListContainer) {
//             ticketListContainer = document.createElement('div');
//             ticketListContainer.className = 'ticket-list';
//             ticketListContainer.innerHTML = '<h2>Created Tickets</h2>';
//             element.appendChild(ticketListContainer);
//         } else {
//             ticketListContainer.innerHTML = '<h2>Created Tickets</h2>'; // Reset content
//         }

//         ticketList.forEach((ticket, index) => {
//             const item = document.createElement('p');
//             item.innerHTML = `${index + 1}. Name: ${ticket.name}, Price: $${ticket.price}, Quantity: ${ticket.quantity} 
//             <button onclick="editTicket(${index})">Edit</button> 
//             <button onclick="deleteTicket(${index})">Delete</button>`;
//             ticketListContainer.appendChild(item);
//         });
//     };

//     // Edit functions
// window.editMerch = (index) => {
//     const merch = merchList[index];

//     // Create the merch form with current values
//     const merchForm = CreateMerchForm((merchDetails) => {
//         merchList[index] = merchDetails; // Update the list with edited details
//         displayMerchList(); // Refresh the displayed list
//     });
    
//     // Set values in the form
//     merchForm.querySelector('input[name="name"]').value = merch.name; // Assuming your input has a name attribute
//     merchForm.querySelector('input[name="price"]').value = merch.price; 
//     merchForm.querySelector('input[name="quantity"]').value = merch.quantity; 

//     element.appendChild(merchForm);
// };

//     window.deleteMerch = (index) => {
//         merchList.splice(index, 1); // Remove item from the list
//         displayMerchList(); // Refresh the displayed list
//     };

//     // Similar functions for tickets

// window.editTicket = (index) => {
//     const ticket = ticketList[index];

//     // Create the ticket form with current values
//     const ticketForm = CreateTicketForm((ticketDetails) => {
//         ticketList[index] = ticketDetails; // Update the list with edited details
//         displayTicketList(); // Refresh the displayed list
//     });
    
//     // Set values in the form
//     ticketForm.querySelector('input[name="name"]').value = ticket.name; // Assuming your input has a name attribute
//     ticketForm.querySelector('input[name="price"]').value = ticket.price; 
//     ticketForm.querySelector('input[name="quantity"]').value = ticket.quantity; 

//     element.appendChild(ticketForm);
// };


//     window.deleteTicket = (index) => {
//         ticketList.splice(index, 1); // Remove item from the list
//         displayTicketList(); // Refresh the displayed list
//     };

//     return element;
// };

// export default CreateEvent;

// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { CreateTicketForm } from '../components/CreateTicket.js'; 

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventDetails = null; // Store event details
//     const merchList = []; // Store created merchandise
//     const ticketList = []; // Store created tickets

//     const eventForm = CreateEventForm((details) => {
//         console.log('Event created:', details);
//         eventDetails = details;
//         displayEventDetails(); // Show the event details
//     });

//     element.appendChild(eventForm);

//     const displayEventDetails = () => {
//         // Clear the element and show the event details
//         element.innerHTML = `<h1>Event Created Successfully</h1>`;
//         element.innerHTML += `<p>Title: ${eventDetails.title}</p>`;
//         element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//         element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;
//         element.innerHTML += `<p>Description: ${eventDetails.description}</p>`;

//         // Append the merch and ticket forms
//         element.appendChild(createMerchForm());
//         element.appendChild(createTicketForm());

//         // Display the lists of created merch and tickets only once
//         displayMerchList();
//         displayTicketList();
//     };

//     const createTicketForm = () => {
//         const ticketForm = CreateTicketForm((ticketDetails) => {
//             ticketList.push(ticketDetails); // Add the new ticket to the list
//             console.log('Ticket created:', ticketDetails);
//             displayTicketList(); // Update the displayed list of tickets
//         });
//         return ticketForm;
//     };

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             merchList.push(merchDetails); // Add the new merch to the list
//             console.log('Merch created:', merchDetails);
//             displayMerchList(); // Update the displayed list of merchandise
//         });
//         return merchForm;
//     };

//     const displayMerchList = () => {
//         let merchListContainer = element.querySelector('.merch-list');
//         if (!merchListContainer) {
//             merchListContainer = document.createElement('div');
//             merchListContainer.className = 'merch-list';
//             merchListContainer.innerHTML = '<h2>Created Merchandise</h2>';
//             element.appendChild(merchListContainer);
//         } else {
//             merchListContainer.innerHTML = '<h2>Created Merchandise</h2>'; // Reset content
//         }

//         merchList.forEach((merch, index) => {
//             const item = document.createElement('p');
//             item.innerHTML = `${index + 1}. Name: ${merch.name}, Price: $${merch.price}, Quantity: ${merch.quantity} 
//             <button onclick="editMerch(${index})">Edit</button> 
//             <button onclick="deleteMerch(${index})">Delete</button>`;
//             merchListContainer.appendChild(item);
//         });
//     };

//     const displayTicketList = () => {
//         let ticketListContainer = element.querySelector('.ticket-list');
//         if (!ticketListContainer) {
//             ticketListContainer = document.createElement('div');
//             ticketListContainer.className = 'ticket-list';
//             ticketListContainer.innerHTML = '<h2>Created Tickets</h2>';
//             element.appendChild(ticketListContainer);
//         } else {
//             ticketListContainer.innerHTML = '<h2>Created Tickets</h2>'; // Reset content
//         }

//         ticketList.forEach((ticket, index) => {
//             const item = document.createElement('p');
//             item.innerHTML = `${index + 1}. Name: ${ticket.name}, Price: $${ticket.price}, Quantity: ${ticket.quantity} 
//             <button onclick="editTicket(${index})">Edit</button> 
//             <button onclick="deleteTicket(${index})">Delete</button>`;
//             ticketListContainer.appendChild(item);
//         });
//     };

//     // Edit functions
// window.editMerch = (index) => {
//     const merch = merchList[index];

//     // Create the merch form with current values
//     const merchForm = CreateMerchForm((merchDetails) => {
//         merchList[index] = merchDetails; // Update the list with edited details
//         displayMerchList(); // Refresh the displayed list
//     });
    
//     // Set values in the form
//     merchForm.querySelector('input[name="name"]').value = merch.name; // Assuming your input has a name attribute
//     merchForm.querySelector('input[name="price"]').value = merch.price; 
//     merchForm.querySelector('input[name="quantity"]').value = merch.quantity; 

//     element.appendChild(merchForm);
// };

//     window.deleteMerch = (index) => {
//         merchList.splice(index, 1); // Remove item from the list
//         displayMerchList(); // Refresh the displayed list
//     };

//     // Similar functions for tickets

// window.editTicket = (index) => {
//     const ticket = ticketList[index];

//     // Create the ticket form with current values
//     const ticketForm = CreateTicketForm((ticketDetails) => {
//         ticketList[index] = ticketDetails; // Update the list with edited details
//         displayTicketList(); // Refresh the displayed list
//     });
    
//     // Set values in the form
//     ticketForm.querySelector('input[name="name"]').value = ticket.name; // Assuming your input has a name attribute
//     ticketForm.querySelector('input[name="price"]').value = ticket.price; 
//     ticketForm.querySelector('input[name="quantity"]').value = ticket.quantity; 

//     element.appendChild(ticketForm);
// };


//     window.deleteTicket = (index) => {
//         ticketList.splice(index, 1); // Remove item from the list
//         displayTicketList(); // Refresh the displayed list
//     };

//     return element;
// };

// export default CreateEvent;


// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { CreateTicketForm } from '../components/CreateTicket.js'; 

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventDetails = null; // Store event details
//     const merchList = []; // Store created merchandise
//     const ticketList = []; // Store created tickets

//     const eventForm = CreateEventForm((details) => {
//         console.log('Event created:', details);
//         eventDetails = details;
//         displayEventDetails(); // Show the event details
//     });

//     element.appendChild(eventForm);

//     const displayEventDetails = () => {
//         // Clear the element and show the event details
//         element.innerHTML = `<h1>Event Created Successfully</h1>`;
//         element.innerHTML += `<p>Title: ${eventDetails.title}</p>`;
//         element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//         element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;
//         element.innerHTML += `<p>Description: ${eventDetails.description}</p>`;

//         // Append the merch and ticket forms
//         element.appendChild(createMerchForm());
//         element.appendChild(createTicketForm());

//         // Display the lists of created merch and tickets only once
//         displayMerchList();
//         displayTicketList();
//     };

//     const createTicketForm = () => {
//         const ticketForm = CreateTicketForm((ticketDetails) => {
//             ticketList.push(ticketDetails); // Add the new ticket to the list
//             console.log('Ticket created:', ticketDetails);
//             displayTicketList(); // Update the displayed list of tickets
//         });
//         return ticketForm;
//     };

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             merchList.push(merchDetails); // Add the new merch to the list
//             console.log('Merch created:', merchDetails);
//             displayMerchList(); // Update the displayed list of merchandise
//         });
//         return merchForm;
//     };

//     const displayMerchList = () => {
//         let merchListContainer = element.querySelector('.merch-list');
//         if (!merchListContainer) {
//             merchListContainer = document.createElement('div');
//             merchListContainer.className = 'merch-list';
//             merchListContainer.innerHTML = '<h2>Created Merchandise</h2>';
//             element.appendChild(merchListContainer);
//         } else {
//             merchListContainer.innerHTML = '<h2>Created Merchandise</h2>'; // Reset content
//         }

//         merchList.forEach((merch, index) => {
//             const item = document.createElement('p');
//             item.innerHTML = `${index + 1}. Name: ${merch.name}, Price: $${merch.price}, Quantity: ${merch.quantity} 
//             <button onclick="editMerch(${index})">Edit</button> 
//             <button onclick="deleteMerch(${index})">Delete</button>`;
//             merchListContainer.appendChild(item);
//         });
//     };

//     const displayTicketList = () => {
//         let ticketListContainer = element.querySelector('.ticket-list');
//         if (!ticketListContainer) {
//             ticketListContainer = document.createElement('div');
//             ticketListContainer.className = 'ticket-list';
//             ticketListContainer.innerHTML = '<h2>Created Tickets</h2>';
//             element.appendChild(ticketListContainer);
//         } else {
//             ticketListContainer.innerHTML = '<h2>Created Tickets</h2>'; // Reset content
//         }

//         ticketList.forEach((ticket, index) => {
//             const item = document.createElement('p');
//             item.innerHTML = `${index + 1}. Name: ${ticket.name}, Price: $${ticket.price}, Quantity: ${ticket.quantity} 
//             <button onclick="editTicket(${index})">Edit</button> 
//             <button onclick="deleteTicket(${index})">Delete</button>`;
//             ticketListContainer.appendChild(item);
//         });
//     };

//     // Edit functions
//     window.editMerch = (index) => {
//         const merch = merchList[index];
//         const merchForm = CreateMerchForm((merchDetails) => {
//             merchList[index] = merchDetails; // Update the list with edited details
//             displayMerchList(); // Refresh the displayed list
//         });
//         merchForm.querySelector('#name').value = merch.name; // Assuming your input has an ID
//         merchForm.querySelector('#price').value = merch.price; 
//         merchForm.querySelector('#quantity').value = merch.quantity; 
//         element.appendChild(merchForm);
//     };

//     window.deleteMerch = (index) => {
//         merchList.splice(index, 1); // Remove item from the list
//         displayMerchList(); // Refresh the displayed list
//     };

//     // Similar functions for tickets
//     window.editTicket = (index) => {
//         const ticket = ticketList[index];
//         const ticketForm = CreateTicketForm((ticketDetails) => {
//             ticketList[index] = ticketDetails; // Update the list with edited details
//             displayTicketList(); // Refresh the displayed list
//         });
//         ticketForm.querySelector('#name').value = ticket.name; // Assuming your input has an ID
//         ticketForm.querySelector('#price').value = ticket.price; 
//         ticketForm.querySelector('#quantity').value = ticket.quantity; 
//         element.appendChild(ticketForm);
//     };

//     window.deleteTicket = (index) => {
//         ticketList.splice(index, 1); // Remove item from the list
//         displayTicketList(); // Refresh the displayed list
//     };

//     return element;
// };

// export default CreateEvent;


// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { CreateTicketForm } from '../components/CreateTicket.js'; 

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventDetails = null; // Store event details
//     const merchList = []; // Store created merchandise
//     const ticketList = []; // Store created tickets

//     const eventForm = CreateEventForm((details) => {
//         console.log('Event created:', details);
//         eventDetails = details;
//         displayEventDetails(); // Show the event details
//     });

//     element.appendChild(eventForm);

//     const displayEventDetails = () => {
//         // Clear the element and show the event details
//         element.innerHTML = `<h1>Event Created Successfully</h1>`;
//         element.innerHTML += `<p>Title: ${eventDetails.title}</p>`;
//         element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//         element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;
//         element.innerHTML += `<p>Description: ${eventDetails.description}</p>`;

//         // Append the merch and ticket forms
//         element.appendChild(createMerchForm());
//         element.appendChild(createTicketForm());

//         // Display the lists of created merch and tickets
//         displayMerchList();
//         displayTicketList();
//     };

//     const createTicketForm = () => {
//         const ticketForm = CreateTicketForm((ticketDetails) => {
//             ticketList.push(ticketDetails); // Add the new ticket to the list
//             console.log('Ticket created:', ticketDetails);
//             displayTicketList(); // Update the displayed list of tickets
//         });
//         return ticketForm;
//     };

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             merchList.push(merchDetails); // Add the new merch to the list
//             console.log('Merch created:', merchDetails);
//             displayMerchList(); // Update the displayed list of merchandise
//         });
//         return merchForm;
//     };

//     const displayMerchList = () => {
//         const merchListContainer = document.createElement('div');
//         merchListContainer.innerHTML = '<h2>Created Merchandise</h2>';
//         merchList.forEach((merch, index) => {
//             merchListContainer.innerHTML += `<p>${index + 1}. Name: ${merch.name}, Price: $${merch.price}, Quantity: ${merch.quantity}</p>`;
//         });
//         element.appendChild(merchListContainer);
//     };

//     const displayTicketList = () => {
//         const ticketListContainer = document.createElement('div');
//         ticketListContainer.innerHTML = '<h2>Created Tickets</h2>';
//         ticketList.forEach((ticket, index) => {
//             ticketListContainer.innerHTML += `<p>${index + 1}. Name: ${ticket.name}, Price: $${ticket.price}, Quantity: ${ticket.quantity}</p>`;
//         });
//         element.appendChild(ticketListContainer);
//     };

//     return element;
// };

// export default CreateEvent;

// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { CreateTicketForm } from '../components/CreateTicket.js'; // Import the new ticket form
// // import { navigateTo } from '../router.js';

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventCreated = false; // Track if an event has been created
//     let eventDetails = null; // Store event details

//     const eventForm = CreateEventForm((details) => {
//         console.log('Event created:', details); // Here you would send the data to your server
//         eventCreated = true; // Update the state
//         eventDetails = details; // Store event details
//         displayEventDetails(); // Show the event details
//     });

//     element.appendChild(eventForm);

//     const displayEventDetails = () => {
//         // Clear the element and show the event details
//         element.innerHTML = `<h1>Event Created Successfully</h1>`;
//         element.innerHTML += `<p>Title: ${eventDetails.title}</p>`;
//         element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//         element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;
//         element.innerHTML += `<p>Description: ${eventDetails.description}</p>`;
//         element.appendChild(createMerchForm()); // Show the merch form after event details
//         element.appendChild(createTicketForm()); // Show the ticket form after creating event
//     };


// const createTicketForm = () => {
//     const ticketForm = CreateTicketForm((ticketDetails) => {
//         console.log('Ticket created:', ticketDetails); // Send data to your server
//         // Optionally, handle the response
//     });
//     return ticketForm;
// };

// const createMerchForm = () => {
//     const merchForm = CreateMerchForm((merchDetails) => {
//         console.log('Merch created:', merchDetails); // Send data to your server
//         // Optionally, handle the response
//     });
//     return merchForm;
// };

//     return element;
// };

// export default CreateEvent;

// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { CreateTicketForm } from '../components/CreateTicket.js'; // Import the new ticket form
// import { navigateTo } from '../router.js';

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventCreated = false; // Track if an event has been created

//     const eventForm = CreateEventForm((eventDetails) => {
//         console.log('Event created:', eventDetails);
//         eventCreated = true; // Update the state
//         element.appendChild(createMerchForm()); // Show the merch form after creating event
//         element.appendChild(createTicketForm()); // Show the ticket form after creating event
//         // Optionally, hide the event form
//     });

//     element.appendChild(eventForm);

//     const createTicketForm = () => {
//         const ticketForm = CreateTicketForm((ticketDetails) => {
//             console.log('Ticket created:', ticketDetails); // Send data to your server
//             // Optionally, handle the response
//         });
//         return ticketForm;
//     };

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             console.log('Merch created:', merchDetails); // Send data to your server
//             // Optionally, handle the response
//         });
//         return merchForm;
//     };

//     return element;
// };

// export default CreateEvent;

// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { navigateTo } from '../router.js';

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventCreated = false; // Track if an event has been created
//     let eventDetails = null; // Store event details

//     const eventForm = CreateEventForm((details) => {
//         console.log('Event created:', details); // Here you would send the data to your server
//         eventCreated = true; // Update the state
//         eventDetails = details; // Store event details
//         displayEventDetails(); // Show the event details
//     });

//     element.appendChild(eventForm);

//     const displayEventDetails = () => {
//         // Clear the element and show the event details
//         element.innerHTML = `<h1>Event Created Successfully</h1>`;
//         element.innerHTML += `<p>Title: ${eventDetails.title}</p>`;
//         element.innerHTML += `<p>Date: ${eventDetails.date}</p>`;
//         element.innerHTML += `<p>Location: ${eventDetails.location}</p>`;
//         element.innerHTML += `<p>Description: ${eventDetails.description}</p>`;
//         element.appendChild(createMerchForm()); // Show the merch form after event details
//     };

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             console.log('Merch created:', merchDetails); // Send data to your server
//             navigateTo('/events'); // Redirect to events page after creation
//         });
//         return merchForm; // Return the merchandise form
//     };

//     return element;
// };

// export default CreateEvent;

// import { getUser } from '../store.js';
// import { CreateEventForm } from '../components/CreateEventForm.js';
// import { CreateMerchForm } from '../components/CreateMerchForm.js';
// import { navigateTo } from '../router.js';

// const user = getUser();

// const CreateEvent = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Create Event</h1>`;

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to Create Event.</h1>`;
//         return element;
//     }

//     let eventCreated = false; // Track if an event has been created

//     const eventForm = CreateEventForm((eventDetails) => {
//         console.log('Event created:', eventDetails); // Here you would send the data to your server
//         eventCreated = true; // Update the state
//         element.appendChild(createMerchForm()); // Show the merch form after creating event
//         // navigateTo('/events'); // Redirect to events page after creation
//     });

//     element.appendChild(eventForm);

//     const createMerchForm = () => {
//         const merchForm = CreateMerchForm((merchDetails) => {
//             console.log('Merch created:', merchDetails); // Send data to your server
//             navigateTo('/events'); // Redirect to merch page after creation
//         });
//         return merchForm; // Return the merchandise form
//     };

//     return element;
// };

// export default CreateEvent;
