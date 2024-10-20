import { Button } from './Button.js'; // Adjust the import path as necessary

export const Modal = (content, onClose) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = content;

    const closeButton = Button('Close', onClose);
    modal.appendChild(closeButton);

    return modal;
};
