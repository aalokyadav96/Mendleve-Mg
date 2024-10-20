import { getUser } from './store.js';
import { navigateTo, renderPage } from './router.js'; // Ensure both functions are imported
import { Navbar } from './components/Navbar.js';

const user = getUser();


const App = () => {
    const element = document.createElement('div');
    const navbarLinks = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Dashboard', href: '/dashboard' },
        { text: 'Profile', href: '/profile' },
        { text: 'Settings', href: '/settings' },
        { text: 'Events', href: '/events' },
        { text: 'Places', href: '/places' },
        { text: 'CreateEvent', href: '/create/event' },
        { text: 'CreatePlace', href: '/create/place' },
        // { text: 'ViewEvent', href: '/view/event' },
        // { text: 'ViewPlace', href: '/view/place' },
    ];

    if (!user) {
        navbarLinks.push(
            { text: 'Login', href: '/login' },
            { text: 'Register', href: '/register' }
        );
    }
    
    const navbar = Navbar(navbarLinks, navigateTo);
    
    element.appendChild(navbar);
    renderPage(window.location.pathname); // Call renderPage directly

    return element;
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(App());
});



// import { navigateTo, renderPage } from './router.js'; // Ensure both functions are imported
// import { Navbar } from './components/Navbar.js';

// const App = () => {
//     const element = document.createElement('div');
//     const navbar = Navbar([
//         { text: 'Home', href: '/' },
//         { text: 'About', href: '/about' },
//         { text: 'Login', href: '/login' },
//         { text: 'Register', href: '/register' },
//         { text: 'Dashboard', href: '/dashboard' },
//         { text: 'Profile', href: '/profile' },
//         { text: 'Settings', href: '/settings' },
//         { text: 'Events', href: '/events' },
//         { text: 'Places', href: '/places' },
//         { text: 'CreateEvent', href: '/create/event' },
//         { text: 'CreatePlace', href: '/create/place' },
//         { text: 'ViewEvent', href: '/view/event' },
//         { text: 'ViewPlace', href: '/view/place' },
//     ], navigateTo);
    
//     element.appendChild(navbar);
//     renderPage(window.location.pathname); // Call renderPage directly

//     return element;
// };

// document.addEventListener('DOMContentLoaded', () => {
//     document.body.appendChild(App());
// });
