//your JS code here. If required.
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener('click',function (e) {
   search.classList.toggle('active');
   input.classList.toggle('active');    
   input.focus(); 
});
