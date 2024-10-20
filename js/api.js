const API_BASE_URL = "//localhost:4000"; // Replace with your actual backend API URL

// Helper function for making API requests
async function apiRequest(path, options = {}) {
    const url = `${API_BASE_URL}${path}`;
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
    };

    const response = await fetch(url, {
        ...options,
        headers
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }

    return response.json();
}

// API Methods
export const api = {
    // User authentication
    register: (userData) => apiRequest('/api/register', { method: 'POST', body: JSON.stringify(userData) }),
    login: (credentials) => apiRequest('/api/login', { method: 'POST', body: JSON.stringify(credentials) }),
    logout: () => apiRequest('/api/logout', { method: 'POST' }),

    // Events management
    getEvents: () => apiRequest('/api/events', { method: 'GET' }),
    getEvent: (eventId) => apiRequest(`/api/event/${eventId}`, { method: 'GET' }),

    createEvent: (eventData) => apiRequest('/api/event', { method: 'POST', body: JSON.stringify(eventData) }),
    editEvent: (eventId, eventData) => apiRequest(`/api/event/${eventId}`, { method: 'PUT', body: JSON.stringify(eventData) }),
    deleteEvent: (eventId) => apiRequest(`/api/event/${eventId}`, { method: 'DELETE' }),

    // Event media
    addEventMedia: (eventId, mediaData) => apiRequest(`/api/event/${eventId}/media`, { method: 'POST', body: JSON.stringify(mediaData) }),

    // Event reviews
    addEventReview: (eventId, reviewData) => apiRequest(`/api/event/${eventId}/review`, { method: 'POST', body: JSON.stringify(reviewData) }),

    // Merch management for events
    createMerch: (eventId, merchData) => apiRequest(`/api/event/${eventId}/merch`, { method: 'POST', body: JSON.stringify(merchData) }),
    getMerch: (eventId, merchId) => apiRequest(`/api/event/${eventId}/merch/${merchId}`, { method: 'GET' }),
    editMerch: (eventId, merchId, merchData) => apiRequest(`/api/event/${eventId}/merch/${merchId}`, { method: 'PUT', body: JSON.stringify(merchData) }),
    deleteMerch: (eventId, merchId) => apiRequest(`/api/event/${eventId}/merch/${merchId}`, { method: 'DELETE' }),

    // Places management
    getPlaces: () => apiRequest('/api/places', { method: 'GET' }),
    getPlace: (placeId) => apiRequest(`/api/place/${placeId}`, { method: 'GET' }),
    createPlace: (placeData) => apiRequest('/api/place', { method: 'POST', body: JSON.stringify(placeData) }),
    editPlace: (placeId, placeData) => apiRequest(`/api/place/${placeId}`, { method: 'PUT', body: JSON.stringify(placeData) }),
    deletePlace: (placeId) => apiRequest(`/api/place/${placeId}`, { method: 'DELETE' }),

    // Place reviews
    addPlaceReview: (placeId, reviewData) => apiRequest(`/api/place/${placeId}/review`, { method: 'POST', body: JSON.stringify(reviewData) }),

    // Place media
    addPlaceMedia: (placeId, mediaData) => apiRequest(`/api/place/${placeId}/media`, { method: 'POST', body: JSON.stringify(mediaData) }),

    // File uploads
    uploadFile: (fileData) => apiRequest('/api/upload', { method: 'POST', body: fileData }),
    
    async getProfile() {
        const response = await fetch('/api/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use token from localStorage
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }

        return response.json();
    },

    async updateProfile(updatedProfile) {
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Auth token
            },
            body: JSON.stringify(updatedProfile),
        });

        if (!response.ok) {
            throw new Error('Failed to update profile');
        }

        return response.json();
    },
};


// async getEvent(eventId) {
//     try {
//         const response = await fetch(`/api/event/${eventId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch event');
//         }

//         return await response.json(); // Parse and return the event data
//     } catch (error) {
//         console.error('Error fetching event:', error);
//         throw error;
//     }
// },

// async getEvents() {
//     try {
//         const response = await fetch('/api/events', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch events');
//         }

//         return await response.json(); // Assuming the backend returns events in JSON
//     } catch (error) {
//         console.error('Error fetching events:', error);
//         throw error;
//     }
// },


// const API_BASE_URL = "http://your-api-url"; // Replace with your backend API base URL

// // Helper function to handle API requests
// async function apiRequest(path, options = {}) {
//     const url = `${API_BASE_URL}${path}`;
//     const headers = {
//         'Content-Type': 'application/json',
//         ...(options.headers || {})
//     };

//     const response = await fetch(url, {
//         ...options,
//         headers
//     });

//     if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message || 'Something went wrong');
//     }

//     return response.json();
// }

// // API Methods
// export const api = {
//     register: (userData) => apiRequest('/api/register', { method: 'POST', body: JSON.stringify(userData) }),
//     login: (credentials) => apiRequest('/api/login', { method: 'POST', body: JSON.stringify(credentials) }),
//     getEvents: () => apiRequest('/api/events', { method: 'GET' }),
//     createEvent: (eventData) => apiRequest('/api/event', { method: 'POST', body: JSON.stringify(eventData) }),
//     // More API endpoints like for reviews, places, merch, etc.
// };
