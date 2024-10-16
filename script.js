let charLength = document.getElementById('number');
let randomPasswordGenerated = document.getElementById('generated-password')
let submitBtn = document.getElementById('submit');
let alpha = document.getElementById('alpha');
let num = document.getElementById('num');
let sym = document.getElementById('symbol');

let result = '';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numeric = '0123456789';
const symbol = '!@#$%&*'

let characters = '' ;


function options() {

    characters = '';
    if(alpha.checked){
        characters += alphabet
    }
    if(num.checked){
        characters +=numeric;
    }
    if(num.checked){
        characters+=symbol
    }
    return characters;
}

function randomPassword (){
    options();
    const length = charLength.value;
    
    

    for(let i = 0; i<length; i++){
        const randomInt = Math.floor(Math.random()*characters.length);

        result += characters.charAt(randomInt);
    }
    return result;
}

const handleSubmit = (e)=>{
    
    result = '';

    e.preventDefault();
    console.log(charLength.value);

    randomPasswordGenerated.innerHTML = '';

    randomPassword();
    randomPasswordGenerated.append(result);    
}

submitBtn.addEventListener('click', handleSubmit)


