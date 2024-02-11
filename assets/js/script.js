let sliderElement = document.querySelector('.slider');
let buttonElement = document.querySelector('.button');

let sizePassword = document.querySelector('.valor');
let password = document.querySelector('.password');

let containerPassoword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = ""
console.log(sliderElement.value);

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
       }
       console.log(pass)
       console.log(sliderElement.value);
   password.innerHTML = pass;
}