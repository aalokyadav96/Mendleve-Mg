import { api } from '../api.js';

const UploadMediaForm = (eventId) => {
    const form = document.createElement('form');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Upload Media';

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        try {
            await api.addEventMedia(eventId, formData); // Upload file to the backend
            alert('Media uploaded successfully!');
        } catch (error) {
            alert('Failed to upload media: ' + error.message);
        }
    });

    form.appendChild(fileInput);
    form.appendChild(submitButton);

    return form;
};

export default UploadMediaForm;
