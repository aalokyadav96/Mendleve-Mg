export const EventCard = (event) => {
    const card = document.createElement('div');
    card.classList.add('event-card');
    const eventDate = event.date ? new Date(event.date).toLocaleDateString() : 'Date not available';
    const eventPlace = event.place || 'Place not specified';

    card.innerHTML = `
        <h2>${event.title}</h2>
        <p>Date: ${eventDate}</p>
        <p>Location: ${eventPlace}</p>
        <p>Description: ${event.description}</p>
        <a href="/event/${event.eventid}">View Details</a>
    `;

    return card;
};

// export const EventCard = (event) => {
//     const card = document.createElement('div');
//     card.classList.add('event-card');

//     card.innerHTML = `
//         <h2>${event.name}</h2>
//         <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
//         <p>Location: ${event.location}</p>
//         <a href="/event/${event._id}">View Details</a>
//     `;

//     return card;
// };
