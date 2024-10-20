export const InputField = (placeholder, id, type = 'text', validationFn) => {
    const inputContainer = document.createElement('div');
    
    const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
    input.type = type !== 'textarea' ? type : undefined; // Set type only if it's not a textarea
    input.placeholder = placeholder;
    input.id = id;

    // If it's a textarea, adjust styles
    if (type === 'textarea') {
        input.style.resize = 'vertical'; // Allow vertical resizing
        input.style.width = '100%'; // Full width
    }

    input.addEventListener('input', () => {
        if (validationFn) {
            const isValid = validationFn(input.value);
            input.setCustomValidity(isValid ? '' : 'Invalid input');
            input.reportValidity();
        }
    });

    inputContainer.appendChild(input);

    // Return the actual input element instead of the container
    return input; 
};
