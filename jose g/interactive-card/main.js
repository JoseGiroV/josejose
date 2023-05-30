//CARDHOLDER NAME
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrordiv = document.querySelector('.form__cardholder-error');

//NUMEROS DE TARJETA
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardnumber');
let nameErrornumberdiv = document.querySelector('.form__inputnumber--error');



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
        inputError(numberInput, nameErrornumberdiv, 'Wront format, numbers only');
    }else{
        //quitar los espacion en el number card //metodo trim quita el ultimo espace
        numberInput.value = inputValue.replace( /\s/g, '' ).replace(/([0-9]{4})/g, '$1 ').trim();
        noError(numberInput,  nameErrornumberdiv);

    }
    //valor por defecto en el numero    
    if(numberInput.value == ''){
        numberCard.innerText = '0000 0000 0000 0000';
    
    }
    
    function inputError(divInput, divError, textError){
        divError.innertext = textError;
        divInput.style.borderColor = '#ff0000';

    
    }

    function noError(divInput,divError){
        divError.innerText = '';
        divInput.style.borderColor =  'hsl(270, 3%, 87%)';
    
    }
    

});