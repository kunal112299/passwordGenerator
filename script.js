let charLength = document.getElementById('number');
let randomPasswordGenerated = document.getElementById('generated-password')
let submitBtn = document.getElementById('submit') 

let result = '';

function randomPassword (){
    const length = charLength.value;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

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


