//your JS code here. If required.
const searchDiv = document.querySelector(".search");
const inputField = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
    searchDiv.classList.add("active");
    inputField.focus();
});
