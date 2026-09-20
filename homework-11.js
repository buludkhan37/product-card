const footerInput = document.querySelector('.footer__input');
const footerForm = document.querySelector('.footer__form');
const modal = document.getElementById('registrationModal');
const openBtn = document.querySelector('.footer__registration-button');
const closeElements = modal.querySelectorAll('[data-close]');
const form = document.getElementById('registrationForm');
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
    form.reset();
    errorBox.textContent = '';
}

openBtn.addEventListener('click', openModal);
closeElements.forEach((el) => el.addEventListener('click', closeModal));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
        closeModal();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorBox.textContent = '';

    if (!form.checkValidity()) {
        errorBox.textContent = 'Заполните все поля корректно.';
        form.reportValidity();
        return;
    }

    const formData = new FormData(form);
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
