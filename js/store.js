let state = {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load user from localStorage
};

const listeners = [];

export const subscribe = (listener) => {
    listeners.push(listener);
};

const notify = () => {
    listeners.forEach(listener => listener(state));
};

export const setUser = (user) => {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
    notify();
};

export const getUser = () => state.user;

// Mock user profile for demonstration
export const userProfile = {
    username: "JohnDoe",
    email: "john@example.com",
    bio: "Music lover and event enthusiast!",
    purchases: [] // Array to hold purchased items
};

// Function to get user profile
export const getUserProfile = () => {
    return userProfile;
};
