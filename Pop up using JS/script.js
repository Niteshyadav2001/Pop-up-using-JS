'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function for opening the modal
const openModal = function() {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

console.log(btnsOpenModal);

for(let i = 0;i < btnsOpenModal.length;i++)
    btnsOpenModal[i].addEventListener('click', openModal);


// for closing the modal
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//closing by button 
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);


//closing the modal by using escape key
document.addEventListener('keydown' , function(e) {
    console.log(e.key);

    //agar hmari key escape ho to and modal k andar hidden naam ki present na ho to hi ye condition kaam karegi
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
});