import { getUserProfile } from '../store.js';
import { InputField } from '../components/InputField.js';
import { Button } from '../components/Button.js';

const UserProfile = () => {
    const profile = getUserProfile();
    const element = document.createElement('div');
    element.innerHTML = `<h1>User Profile</h1>`;

    const usernameInput = InputField('Username', 'username', 'text');
    const emailInput = InputField('Email', 'email', 'email');
    const bioInput = InputField('Bio', 'bio', 'textarea');

    usernameInput.value = profile.username;
    emailInput.value = profile.email;
    bioInput.value = profile.bio;

    const saveButton = Button('Save Changes', (event) => {
        event.preventDefault();
        profile.username = usernameInput.value;
        profile.email = emailInput.value;
        profile.bio = bioInput.value;
        console.log('Profile updated:', profile);
        // Optionally, add functionality to save this data to a backend or local storage
    });

    element.appendChild(usernameInput);
    element.appendChild(emailInput);
    element.appendChild(bioInput);
    element.appendChild(saveButton);

    return element;
};

export default UserProfile;

// import { InputField } from '../components/InputField.js';
// import { Button } from '../components/Button.js';
// import { getUser, setUser } from '../store.js';

// const UserProfile = () => {
//     const user = getUser();
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>User Profile</h1>`;

//     const usernameInput = InputField('Username', 'username', 'text');
//     usernameInput.value = user.username;

//     const emailInput = InputField('Email', 'email', 'email');
//     emailInput.value = user.email;

//     const saveButton = Button('Save', (event) => {
//         event.preventDefault();
//         const updatedUser = {
//             ...user,
//             username: usernameInput.value,
//             email: emailInput.value,
//         };
//         // Call API to update user
//         updateUser(updatedUser).then(() => {
//             setUser(updatedUser); // Update local store
//         });
//     });

//     element.appendChild(usernameInput);
//     element.appendChild(emailInput);
//     element.appendChild(saveButton);
//     return element;
// };

// export default UserProfile;
