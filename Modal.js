export class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.listenClose();
    }

    open() {
        this.modal.classList.add('modal-showed')
    }

    close() {
        this.modal.classList.remove('modal-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed')
    }

    listenClose() {
        const closeElements = this.modal.querySelectorAll('[data-close]');

        closeElements.forEach((el) => {
            el.addEventListener('click', () => {
                this.close();
            });
        });
    }
}