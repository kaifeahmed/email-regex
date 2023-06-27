let check = document.querySelector('.check');
let password = document.querySelector('.password');
let text = document.querySelector('.text');

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

check.addEventListener("click",() => {
    if (password.value == "") {
        text.innerText = "Invalid Email!";
        text.style.color = 'red';
    }
    else if(password.value.match(regex)) {
        text.innerText = 'You have been logged in!';
        text.style.color = 'green';
    }
    else {
        text.innerText = 'Please Enter an Email';
    }
});