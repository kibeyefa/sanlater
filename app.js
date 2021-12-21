let emailForm = document.forms[0];
const body = document.body;
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modal_error = document.querySelector('.modal__error');
const modal_btn = document.querySelector('.modal__btn');
const modalErrorBtn = document.querySelector('.modal__error__btn');

modal_btn.addEventListener('click', () => {
    overlay.classList.add('hide');
    modal.style.display = 'none';
    body.classList.remove('no_scroll');
});

modalErrorBtn.addEventListener('click', () => {
    overlay.classList.add('hide');
    modal_error.style.display = 'none';
    body.classList.remove('no_scroll');
});

emailForm.addEventListener('submit', async (e) => {
    let email = emailForm.email.value;
    emailForm.reset();
    e.preventDefault();
    let res = await fetch('http://127.0.0.1:8000/api/email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
        }),
    });
    console.log(res);

    overlay.classList.remove('hide');
    overlay.classList.remove('hide');
    body.classList.add('no_scroll');

    if (res.status === 201) {
        modal.style.display = 'grid';
    } else {
        modal_error.style.display = 'grid';
    }
});
