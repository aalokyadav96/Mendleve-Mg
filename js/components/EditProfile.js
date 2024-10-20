import { api } from '../api.js';
import { getUser } from '../store.js';
import { navigateTo } from '../router.js';

const EditProfile = () => {
    const element = document.createElement('div');
    const user = getUser();

    if (!user || !user.token) {
        alert("Please log in to edit your profile.");
        navigateTo('/login');
        return element;
    }

    async function fetchProfileForEdit() {
        try {
            const profile = await api.getProfile(); // Fetch user profile
            
            if (!profile) {
                throw new Error("Profile not found");
            }

            // Render the edit form pre-filled with current profile data
            element.innerHTML = `
                <h1>Edit Profile</h1>
                <form id="edit-profile-form">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" value="${profile.name}" required>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" value="${profile.email}" required>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            `;

            document.getElementById('edit-profile-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                const updatedProfile = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value
                };

                try {
                    await api.updateProfile(updatedProfile); // Send updated profile to backend
                    alert('Profile updated successfully!');
                    navigateTo('/profile'); // Redirect back to profile page
                } catch (error) {
                    alert('Failed to update profile: ' + error.message);
                }
            });
        } catch (error) {
            console.error('Error fetching profile for edit:', error);
            element.innerHTML = `<p>Error loading profile: ${error.message}</p>`;
        }
    }

    fetchProfileForEdit(); // Fetch profile details for edit form
    return element;
};

export default EditProfile;
