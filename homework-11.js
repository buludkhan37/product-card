import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

const openModalBtn = document.querySelector('.footer__registration-button');
const errorBox = document.getElementById('modalError');

const modal = new Modal('registrationModal');
const registrationForm = new Form('registrationForm');
const footerForm = new Form('.footer__form')

footerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = footerForm.getValues();
    console.log(data);
})

function closeModal() {
    modal.close();
    registrationForm.reset()
    errorBox.textContent = '';
}

openModalBtn.addEventListener('click', () => {
    modal.open()
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.isOpen()) {
        closeModal();
    }
});

registrationForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorBox.textContent = '';

    if (!registrationForm.isValid()) {
        errorBox.textContent = 'Заполните все поля корректно.';
        return;
    }

    const formData = registrationForm.getValues();
    const password = formData.password;
    const passwordRepeat = formData.passwordRepeat;

    if (password !== passwordRepeat) {
        errorBox.textContent = 'Пароли не совпадают.';
        return;
    }

    const user = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        birthDate: formData.birthDate,
        login: formData.login.trim(),
        password,
        createdOn: new Date()
    };

    console.log(user);
    closeModal();
});
