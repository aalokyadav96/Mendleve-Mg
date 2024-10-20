import { getUser, setUser } from '../store.js';
import { InputField } from '../components/InputField.js';
import { Button } from '../components/Button.js';

const Profile = () => {
    const element = document.createElement('div');
    const user = getUser();

    if (!user) {
        element.innerHTML = `<h1>Please log in to view your profile.</h1>`;
        return element;
    }

    element.innerHTML = `<h1>Your Profile</h1>`;
    const nameInput = InputField('Name', user.name);
    const emailInput = InputField('Email', user.email); // Assuming user has an email
    const updateButton = Button('Update', (event) => {
        event.preventDefault();
        const updatedUser = { ...user, name: nameInput.value, email: emailInput.value };
        setUser(updatedUser);
        element.innerHTML = `<h1>Profile updated!</h1>`;
        element.appendChild(Profile());
    });

    element.appendChild(nameInput);
    element.appendChild(emailInput);
    element.appendChild(updateButton);
    return element;
};

export default Profile;

// import { api } from '../api.js';
// import { navigateTo } from '../router.js';
// import { getUser } from '../store.js';

// const Profile = () => {
//     const element = document.createElement('div');
//     const user = getUser(); // Retrieve the current logged-in user
// console.log(user);
//     if (!user || !user.token) {
//         alert("Please log in to view your profile.");
//         navigateTo('/login');
//         return element;
//     }

//     async function fetchProfile() {
//         try {
//             const profile = await api.getProfile(); // Fetch the profile from the backend
            
//             if (!profile) {
//                 throw new Error("Profile not found");
//             }

//             element.innerHTML = `
//                 <h1>Profile</h1>
//                 <p><strong>Name:</strong> ${profile.name}</p>
//                 <p><strong>Email:</strong> ${profile.email}</p>
//                 <button id="edit-profile">Edit Profile</button>
//             `;

//             document.getElementById('edit-profile').addEventListener('click', () => {
//                 navigateTo('/profile/edit'); // Navigate to profile edit page
//             });
//         } catch (error) {
//             console.error('Error fetching profile:', error);
//             element.innerHTML = `<p>Error loading profile: ${error.message}</p>`;
//         }
//     }

//     fetchProfile(); // Fetch profile on page load
//     return element;
// };

// export default Profile;

// import { getUser, setUser } from '../store.js';
// import { InputField } from '../components/InputField.js';
// import { Button } from '../components/Button.js';

// const Profile = () => {
//     const element = document.createElement('div');
//     const user = getUser();

//     if (!user) {
//         element.innerHTML = `<h1>Please log in to view your profile.</h1>`;
//         return element;
//     }

//     element.innerHTML = `<h1>Your Profile</h1>`;
//     const nameInput = InputField('Name', user.name);
//     const emailInput = InputField('Email', user.email); // Assuming user has an email
//     const updateButton = Button('Update', (event) => {
//         event.preventDefault();
//         const updatedUser = { ...user, name: nameInput.value, email: emailInput.value };
//         setUser(updatedUser);
//         element.innerHTML = `<h1>Profile updated!</h1>`;
//         element.appendChild(Profile());
//     });

//     element.appendChild(nameInput);
//     element.appendChild(emailInput);
//     element.appendChild(updateButton);
//     return element;
// };

// export default Profile;
