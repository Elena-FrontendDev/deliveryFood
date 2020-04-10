const cartButton = document.querySelector('#cart-button');
const modalPopup = document.querySelector('.modal');
const closeModalPopup = document.querySelector('.close');


function toggleModal() {
    modalPopup.classList.toggle('is-open')
}


cartButton.addEventListener('click', toggleModal)

closeModalPopup.addEventListener('click', toggleModal)


new WOW().init();