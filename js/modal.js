// modal.js

function openModal(modalId, imageId, textId) {
    const modal = document.getElementById(modalId);
    const image = document.getElementById(imageId);
    const text = document.getElementById(textId);

    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('transition-opacity', 'opacity-100', 'translate-y-0');
        modal.classList.remove('-translate-y-full', 'opacity-0');

        // Show image first after 1 second
        setTimeout(() => {
            if (image) {
                image.classList.add('opacity-100');
            }
        }, 500);

        // Show text after 2 seconds
        setTimeout(() => {
            if (text) {
                text.classList.add('opacity-100');
            }
        }, 1000);
    }
}

function closeModal(modalId, imageId, textId) {
    const modal = document.getElementById(modalId);
    const image = document.getElementById(imageId);
    const text = document.getElementById(textId);

    if (modal) {
        if (image) {
            image.classList.remove('opacity-100');
        }
        if (text) {
            text.classList.remove('opacity-100');
        }

        modal.classList.add('-translate-y-full', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}
