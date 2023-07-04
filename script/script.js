const hotelSearchLink = document.querySelector('.hotel-search-link');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');

hotelSearchLink.addEventListener('click' , function(evt){
    evt.preventDefault();
    modal.classList.add('modal--show');
})

modalCloseButton.addEventListener('click' , function(evt){
    evt.preventDefault();
    modal.classList.remove('modal--show');
})
