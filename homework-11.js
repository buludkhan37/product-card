const footerForm = document.querySelector('.footer__form');
const modal = document.getElementById('registrationModal');
const openModalBtn = document.querySelector('.footer__registration-button');
const closeElements = modal.querySelectorAll('[data-close]');
const registrationForm = document.getElementById('registrationForm');
const errorBox = document.getElementById('modalError');

footerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(footerForm);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
})

function openModal() {
    modal.classList.add('modal-showed');
}

function closeModal() {
    modal.classList.remove('modal-showed');
    registrationForm.reset();
    errorBox.textContent = '';
}

openModalBtn.addEventListener('click', openModal);
closeElements.forEach((el) => el.addEventListener('click', closeModal));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
        closeModal();
    }
});

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    errorBox.textContent = '';

    if (!registrationForm.checkValidity()) {
        errorBox.textContent = 'Заполните все поля корректно.';
        registrationForm.reportValidity();
        return;
    }

    const formData = new FormData(registrationForm);
    const password = formData.get('password');
    const passwordRepeat = formData.get('passwordRepeat');

    if (password !== passwordRepeat) {
        errorBox.textContent = 'Пароли не совпадают.';
        return;
    }

    const user = {
        firstName: formData.get('firstName').trim(),
        lastName: formData.get('lastName').trim(),
        birthDate: formData.get('birthDate'),
        login: formData.get('login').trim(),
        password,
        createdOn: new Date()
    };

    console.log(user);
    closeModal();
});
