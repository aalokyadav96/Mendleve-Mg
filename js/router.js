const routes = {
    '/': 'Home',
    '/about': 'About',
    '/login': 'Login',
    '/dashboard': 'Dashboard',
    '/register': 'Register',
    '/profile': 'Profile',
    '/profile/edit': 'EditProfile', // New route for editing profile
    '/settings': 'Settings',
    '/search': 'SearchResults',
    '/events': 'Events',
    '/places': 'Places',
    '/create/event': 'CreateEvent', // New route for event creation
    '/create/place': 'CreatePlace', // New route for place creation
    '/create/review': 'CreateReview', // New route for review creation
    '/create/merch': 'CreateMerch', // New route for merchandise creation
};

// Function to handle dynamic navigation and render the appropriate page
export const navigateTo = (path) => {
    window.history.pushState({}, path, window.location.origin + path);
    renderPage(path); // Render the page based on the current path
};

// Function to dynamically load and render the correct page
export const renderPage = (path) => {
    const app = document.getElementById('app'); // Main container to load pages
    app.innerHTML = ''; // Clear previous content

    // Check if path matches event or place details
    const matchEvent = path.match(/^\/event\/(\w+)$/);
    const matchPlace = path.match(/^\/place\/(\w+)$/);

    // If it's an event details page
    if (matchEvent) {
        const eventId = matchEvent[1]; // Extract eventId from the URL
        import(`./pages/ViewEvent.js`)
            .then(module => {
                const pageElement = module.default(eventId); // Pass eventId to the component
                app.appendChild(pageElement); // Render the event page
            })
            .catch(() => {
                app.innerHTML = '<h1>404 Not Found</h1>'; // Error handling
            });
    
    // If it's a place details page
    } else if (matchPlace) {
        const placeId = matchPlace[1]; // Extract placeId from the URL
        import(`./pages/ViewPlace.js`)
            .then(module => {
                const pageElement = module.default(placeId); // Pass placeId to the component
                app.appendChild(pageElement); // Render the place page
            })
            .catch(() => {
                app.innerHTML = '<h1>404 Not Found</h1>'; // Error handling
            });
    
    // For all other static routes defined in routes object
    } else if (routes[path]) {
        const page = routes[path]; // Map the path to the correct page component
        import(`./pages/${page}.js`)
            .then(module => {
                const pageElement = module.default(); // Load the static page component
                app.appendChild(pageElement); // Render the static page
            })
            .catch(() => {
                app.innerHTML = '<h1>404 Not Found</h1>'; // Error handling
            });
    
    // If the route is not found, handle 404
    } else {
        app.innerHTML = '<h1>404 Not Found</h1>';
    }
};

// This is to handle browser navigation (back/forward)
window.addEventListener('popstate', () => {
    renderPage(window.location.pathname); // Re-render the page on popstate event
});

// const routes = {
//     '/': 'Home',
//     '/about': 'About',
//     '/login': 'Login',
//     '/dashboard': 'Dashboard',
//     '/register': 'Register',
//     '/profile': 'Profile',
//     '/settings': 'Settings',
//     '/search': 'SearchResults',
//     '/events': 'Events',
//     '/places': 'Places',
//     '/create/event': 'CreateEvent', // New route
//     '/event/:id': 'ViewEvent', // New route for viewing events
//     '/create/place': 'CreatePlace', // New route
//     '/place/:id': 'ViewPlace', // New route for viewing places
//     '/create/review': 'CreateReview', // New route
//     '/create/merch': 'CreateMerch', // New route
// };

// export const navigateTo = (path) => {
//     window.history.pushState({}, path, window.location.origin + path);
//     renderPage(path);
// };


// export const renderPage = (path) => {
//     const app = document.getElementById('app');
//     app.innerHTML = '';

//     const matchEvent = path.match(/^\/view\/event\/(\w+)$/);
//     const matchPlace = path.match(/^\/view\/place\/(\w+)$/);

//     if (matchEvent) {
//         const eventId = matchEvent[1];
//         import(`./pages/ViewEvent.js`).then(module => {
//             const pageElement = module.default({ eventId }); // Pass eventId to the module
//             app.appendChild(pageElement);
//         }).catch(() => {
//             app.innerHTML = '<h1>404 Not Found</h1>';
//         });
//     } else if (matchPlace) {
//         const placeId = matchPlace[1];
//         import(`./pages/ViewPlace.js`).then(module => {
//             const pageElement = module.default({ placeId }); // Pass placeId to the module
//             app.appendChild(pageElement);
//         }).catch(() => {
//             app.innerHTML = '<h1>404 Not Found</h1>';
//         });
//     } else {
//         const page = routes[path] || '404'; // Ensure you handle 404
//         import(`./pages/${page}.js`).then(module => {
//             const pageElement = module.default();
//             app.appendChild(pageElement);
//         }).catch(() => {
//             app.innerHTML = '<h1>404 Not Found</h1>';
//         });
//     }
// };


// // Make sure this function is exported
// export const renderPage = (path) => {
//     const app = document.getElementById('app');
//     app.innerHTML = '';

//     // const page = routes[path.split('?')[0]] || '404'; // Handle query parameters
//     // const query = new URLSearchParams(window.location.search).get('query');

//     // import(`./pages/${page}.js`)
//     //     .then(module => {
//     //         const pageElement = module.default(query); // Pass the query to SearchResults
//     //         app.appendChild(pageElement);
//     //     })
//     //     .catch(() => {
//     //         app.innerHTML = '<h1>404 Not Found</h1>';
//     //     });


//     const matchEvent = path.match(/^\/view\/event\/(.+)$/);
//     const matchPlace = path.match(/^\/view\/place\/(.+)$/);

//     if (matchEvent) {
//         const eventId = matchEvent[1];
//         import(`./pages/ViewEvent.js`).then(module => {
//             const pageElement = module.default({ eventId });
//             app.appendChild(pageElement);
//         });
//     } else if (matchPlace) {
//         const placeId = matchPlace[1];
//         import(`./pages/ViewPlace.js`).then(module => {
//             const pageElement = module.default({ placeId });
//             app.appendChild(pageElement);
//         });
//     } else {
//         const page = routes[path] || 'Home';
//         import(`./pages/${page}.js`).then(module => {
//             const pageElement = module.default();
//             app.appendChild(pageElement);
//         });
//     }
// };

window.onpopstate = () => {
    renderPage(window.location.pathname);
};


// const routes = {
//     '/': 'Home',
//     '/about': 'About',
//     '/login': 'Login',
//     '/dashboard': 'Dashboard',
//     '/register': 'Register',
//     '/profile': 'Profile',
//     '/settings': 'Settings',
//     '/search': 'SearchResults', // Add this line
// };

// export const navigateTo = (path) => {
//     window.history.pushState({}, path, window.location.origin + path);
//     renderPage(path);
// };


// // Make sure to export renderPage
// // export const renderPage = (path) => {
// //     const app = document.getElementById('app');
// //     app.innerHTML = '';

// //     const page = routes[path] || '404'; // Use a 404 page if not found
// //     import(`./pages/${page}.js`)
// //         .then(module => {
// //             const pageElement = module.default();
// //             app.appendChild(pageElement);
// //         })
// //         .catch(() => {
// //             app.innerHTML = '<h1>404 Not Found</h1>';
// //         });
// // };

// window.onpopstate = () => {
//     renderPage(window.location.pathname);
// };
