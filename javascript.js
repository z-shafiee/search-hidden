const box = document.querySelector('.box'); 

const textInput = document.querySelector('.text-input'); 

const containerBtn = document.querySelector('.container-btn'); 

containerBtn.addEventListener('click', () => { box.classList.toggle('open');
        
     textInput.focus();

     
    });