const target = document.getElementById("nav");
const btn = document.getElementById("btn");

btn.addEventListener('click', () =>{
    target.classList.toggle("toggleNav");
    console.log('working !');
});