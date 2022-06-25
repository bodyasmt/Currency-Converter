const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementUAH = document.querySelector('[data-value="UAH"]');



const input = document.querySelector('input');
const selectFrom = document.getElementById('selectFrom');
const selectTo = document.getElementById('selectTo');
const result = document.getElementById('result');


getCurrencies();


async function getCurrencies() {
    const response = await fetch('https://cdn.cur.su/api/nbu.json');
    const data = await response.json();
    const result = await data;


    rates.USD = result.rates.USD;
    rates.EUR = result.rates.EUR;
    rates.UAH = result.rates.UAH;


    elementUSD.textContent = rates.USD.toFixed(2);
    elementEUR.textContent = rates.EUR.toFixed(2);
    elementUAH.textContent = rates.UAH.toFixed(2);



    if(rates.USD.Value > rates.USD.Previous) {
        elementUSD.classlist.add('top');
    }else{
        elementUSD.classList.add('bottom');
    }



    if(rates.USD.Value > rates.EUR.Previous) {
        elementEUR.classlist.add('top');
    }else{
        elementEUR.classList.add('bottom');
    }



    if(rates.UAH.Value > rates.UAH.Previous) {
        elementUAH.classlist.add('top');
    }else{
        elementUAH.classList.add('bottom');
    }
}



input.oninput = convertation;

selectFrom.oninput = convertation;
selectTo.oninput = convertation;

function convertation() {
    result.value = (parseFloat(input.value) / rates[selectFrom.value] * rates[selectTo.value]).toFixed(2);
}const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementUAH = document.querySelector('[data-value="UAH"]');



const input = document.querySelector('input');
const selectFrom = document.getElementById('selectFrom');
const selectTo = document.getElementById('selectTo');
const result = document.getElementById('result');


getCurrencies();


async function getCurrencies() {
    const response = await fetch('https://cdn.cur.su/api/nbu.json');
    const data = await response.json();
    const result = await data;


    rates.USD = result.rates.USD;
    rates.EUR = result.rates.EUR;
    rates.UAH = result.rates.UAH;


    elementUSD.textContent = rates.USD.toFixed(2);
    elementEUR.textContent = rates.EUR.toFixed(2);
    elementUAH.textContent = rates.UAH.toFixed(2);



    if(rates.USD.Value > rates.USD.Previous) {
        elementUSD.classlist.add('top');
    }else{
        elementUSD.classList.add('bottom');
    }



    if(rates.USD.Value > rates.EUR.Previous) {
        elementEUR.classlist.add('top');
    }else{
        elementEUR.classList.add('bottom');
    }



    if(rates.UAH.Value > rates.UAH.Previous) {
        elementUAH.classlist.add('top');
    }else{
        elementUAH.classList.add('bottom');
    }
}



input.oninput = convertation;

selectFrom.oninput = convertation;
selectTo.oninput = convertation;

function convertation() {
    result.value = (parseFloat(input.value) / rates[selectFrom.value] * rates[selectTo.value]).toFixed(2);
}