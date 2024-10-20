import { setUser, getUser } from '../store.js'; // Import getUser and setUser
import { navigateTo } from '../router.js';
import { InputField } from '../components/InputField.js'; // Import InputField directly
import { Button } from '../components/Button.js'; // Import Button directly
import { api } from '../api.js'; // Use the centralized API

const Login = () => {
    const user = getUser();

    if (user) {
        // Redirect immediately if user is already logged in
        setTimeout(() => navigateTo('/'), 0);
        return null; // Return null to indicate nothing should be rendered
    }

    const element = document.createElement('div');
    element.innerHTML = `<h1>Login</h1>`;

    const form = document.createElement('form');

    const usernameInput = InputField('Username', 'username');
    const passwordInput = InputField('Password', 'password');

    const submitButton = Button('Login', async (event) => {
        event.preventDefault();
        const credentials = {
            name: usernameInput.value,  // Access value directly
            password: passwordInput.value, // Access password value
        };
        
        // try {
        //     const user = await api.login(credentials); // Call the API service
        //     setUser(user); // Save user data
        //     navigateTo('/dashboard'); // Redirect to dashboard
        // } catch (error) {
        //     alert("Login failed: " + error.message);
        // }
        setUser(credentials); // Store the user data
        navigateTo('/dashboard'); // Redirect to the dashboard
    });

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    element.appendChild(form);

    return element;
};

export default Login;

// import { setUser } from '../store.js';
// import { LoginForm } from '../components/LoginForm.js';
// import { navigateTo } from '../router.js';
// import { api } from '../api.js'; // Use the centralized API

// const Login = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Login</h1>`;
    
//     const loginForm = LoginForm(async (credentials) => {
//         try {
//             const user = await api.login(credentials); // Call the API service
//             setUser(user); // Save user data
//             navigateTo('/dashboard'); // Redirect to dashboard
//         } catch (error) {
//             alert("Login failed: " + error.message);
//         }
//     });

//     element.appendChild(loginForm);
//     return element;
// };

// export default Login;

// import { setUser, getUser } from '../store.js'; // Import getUser and setUser
// import { navigateTo } from '../router.js';
// import { InputField } from '../components/InputField.js'; // Import InputField directly
// import { Button } from '../components/Button.js'; // Import Button directly

// const Login = () => {
//     const user = getUser();

//     if (user) {
//         // Redirect immediately if user is already logged in
//         setTimeout(() => navigateTo('/'), 0);
//         return null; // Return null to indicate nothing should be rendered
//     }

//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Login</h1>`;

//     const form = document.createElement('form');

//     const usernameInput = InputField('Username', 'username');
//     const passwordInput = InputField('Password', 'password');

//     const submitButton = Button('Login', (event) => {
//         event.preventDefault();
//         const userData = {
//             name: usernameInput.value,  // Access value directly
//             password: passwordInput.value, // Access password value
//         };
//         setUser(userData); // Store the user data
//         navigateTo('/dashboard'); // Redirect to the dashboard
//     });

//     form.appendChild(usernameInput);
//     form.appendChild(passwordInput);
//     form.appendChild(submitButton);
//     element.appendChild(form);

//     return element;
// };

// export default Login;
