//CARDHOLDER NAME
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrordiv = document.querySelector('.form__cardholder--error');

//NUMEROS DE TARJETA
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardnumber');
let numberErrordiv = document.querySelector('.form__inputnumber--error');

//MM

let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector ('#cardmonth');
let monthErrordiv = document.querySelector('.form__input-mm--error');

//YY

let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardyear');
let yearErrordiv = document.querySelector('.form__input-yy--error');

//CVC

let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardcvc');
let cvcErrordiv = document.querySelector('.form__input-cvc--error');

//VARIABLES FINALES CONFIRM

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation =false;
let cvcValidation =false;

//section forms y thanks

let formSection = document.querySelector('.form');
let thanksSection = document.querySelector ('.thanks-section');




//INGRESO DEL NOMBRE
nameInput.addEventListener('input', () =>{
    if(nameInput.value == ''){    
        nameCard.innerText = 'JOSE GIRO';
    }else{
        nameCard.innerText = nameInput.value;
    }    
});

//INGRESO DE NUMEROS
numberInput.addEventListener('input', event =>{

    let inputValue = event.target.value;

    //interaccion en tiempo real validando si hay letras
    numberCard.innerText = numberInput.value;   
    let regExp = /[A-z]/g;
    if(regExp.test(numberInput.value)){
        inputError(numberInput, numberErrordiv, 'Wront format, numbers only');
    }else{
        //quitar los espacion en el number card //metodo trim quita el ultimo espace
        numberInput.value = inputValue.replace( /\s/g, '' ).replace(/([0-9]{4})/g, '$1 ').trim();
        inputError(numberInput, numberErrordiv,'', false);

    }
    //valor por defecto en el numero    
    if(numberInput.value == ''){
        numberCard.innerText = '0000 0000 0000 0000';
    
    }});

    //ingreso dinamico MM

    monthInput.addEventListener('input', () =>{
        monthCard.innerText = monthInput.value;
        lletterValidation(monthInput, monthErrordiv); 
    });

    //ingreso dinamico YY

    yearInput.addEventListener('input', () =>{
        yearCard.innerText = yearInput.value;
        lletterValidation(yearInput, yearErrordiv); 
    });

    //ingreso de cvc

    cvcInput.addEventListener('input', () =>{
        cvcCard.innerText = cvcInput.value;
        lletterValidation(cvcInput, cvcErrordiv); 
});

    //bottom confirm

let confirmBoton =document.querySelector('.form__submit')

    confirmBoton.addEventListener('click', event=>{
        event.preventDefault();
        console.log(parseInt(monthInput.value))

        //validar nombre
        if(verifyIsfilled(nameInput, nameErrordiv)){
                nameValidation= true;
        }else{
            nameValidation= false;
        }
      
        //validar numero
        if(verifyIsfilled(numberInput, numberErrordiv) ==true){
          if(numberInput.value.length == 19){
            inputError(numberInput, numberErrordiv, '', false);
            numberValidation= true;
          }else{
            inputError(numberInput, numberErrordiv, 'Wrong number');
            numberValidation = false;
          }
        }


        //validar MM
        if(verifyIsfilled(monthInput, monthErrordiv)){
            if(parseInt(monthInput.value)> 0 && parseInt(monthInput.value) <=12){
                inputError(monthInput, monthErrordiv,'', false)
                monthValidation = true;
            }else{
                inputError(monthInput, monthErrordiv, 'Wrong Month');
                monthValidation = false;
            }
        }


        //validar YY
        if(verifyIsfilled(yearInput, yearErrordiv)){
            if(parseInt(yearInput.value)> 23 && parseInt(yearInput.value)<= 27 ){
                inputError(yearInput,yearErrordiv, '', false);
                yearValidation =true;
            }else{
                inputError(yearInput,yearErrordiv, 'Wrong Year');
                yearValidation = false;
            }
        }

        //validar CVC
        if(verifyIsfilled(cvcInput, cvcErrordiv)){
            if(parseInt(cvcInput.value.length) == 3){
                inputError(cvcInput, cvcErrordiv, '', false);
                cvcValidation =true;
            }else{
                inputError(cvcInput, cvcErrordiv, 'Wrong CVC');
                cvcValidation =false;
            }
        }
        if(nameValidation == true && numberValidation == true    && monthValidation == true && yearValidation == true && cvcValidation == true){
            formSection.style.display = 'none';
            thanksSection.style.display = 'block';
        }
}); 



    //FUNCIONES
function inputError(divInput, divError, textError, show = true){
    if(show){
        divError.innerText = textError;
        divInput.style.borderColor = '#ff0000';
    }else{
        divError.innerText = textError;
        divInput.style.borderColor =  'hsl(270, 3%, 87%)';
    
    }
}
function verifyIsfilled(divInput, divError){
    if(divInput.value.length> 0){
        inputError(divInput, divError, "", false);
        return true;
    }else{
        inputError(divInput, divError, "Can't be blank");
        return false;

    }}
    
function lletterValidation(input, divError,){
    //vaidando que hay letras en mm, yy, cvc
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        inputError(input, divError, 'Wront format, numbers only');
    }else
        inputError(input, divError, '', false);

}

