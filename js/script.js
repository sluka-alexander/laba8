const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let bgc = localStorage.setItem('color', 'green');
    location.reload();
});

const color = localStorage.getItem('color');
body.style.backgroundColor = color;

