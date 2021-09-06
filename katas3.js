const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const atv1 = document.querySelector('#atv1')
const atv2 = document.querySelector('#atv2')
const atv3 = document.querySelector('#atv3')
const atv4 = document.querySelector('#atv4')
const atv5 = document.querySelector('#atv5')
const atv6 = document.querySelector('#atv6')
const atv7 = document.querySelector('#atv7')
const atv8 = document.querySelector('#atv8')
const atv9 = document.querySelector('#atv9')
const atv10 = document.querySelector('#atv10')
const atv11 = document.querySelector('#atv11')
const atv12 = document.querySelector('#atv12')
const atv13 = document.querySelector('#atv13')
const atv14 = document.querySelector('#atv14')
const atv15 = document.querySelector('#atv15')
const atv16 = document.querySelector('#atv16')
const atv17 = document.querySelector('#atv17')
const atv18 = document.querySelector('#atv18')

let numbers1 = [];
let numbers2 = [];
let numbers3 = [];
let numbers4 = [];
let numbers5 = [];
let numbers6 = [];
let numbers7 = [];
let numbers8 = [];
let numbers9 = [];
let numbers10 = [];
let numbers11 = [];
let numbers12 = [];
let numbers13 = [];
let numbers14 = [];
let numbers15 = [];
let numbers16 = [];
let numbers17 = [];
let numbers18 = [];


function showResults(x, y){
    for(let i =0; i < x.length; i++){
        const item = document.createElement('li');

        item.innerText = x[i];

        y.appendChild(item);
    }
}

function kata1() {

    for(let i = 1; i <= 25; i++){
        numbers1.push(i);
    }
    showResults(numbers1, atv1);
    return numbers1;
}

kata1();


function kata2() {
    
   for(let i = 25; i > 0 ; i--){
    numbers2.push(i);
   }
   showResults(numbers2, atv2)
   return numbers2;
}
kata2();



function kata3() {
    
    for( let i = -1; i > -26; i--){
        numbers3.push(i);
    }
    showResults(numbers3, atv3);
    return numbers3;
}
kata3();


function kata4() {

    for(let i = -25; i < 0; i++){
        numbers4.push(i)
    }
    showResults(numbers4,atv4);
    return numbers4;
}

kata4();


function kata5() {

    for(let i = 25; i >= -25; i -= 2){
        numbers5.push(i);
    }
    showResults(numbers5, atv5);
    return numbers5;
}
kata5();


function kata6() {
    
    for(let i = 3; i <= 100; i += 3){
        numbers6.push(i);
    }
    showResults(numbers6,atv6);
    return numbers6;
}
kata6();

function kata7() {
    
    for(let i = 7; i <= 100; i +=7){
        numbers7.push(i);
    }
    showResults(numbers7,atv7);
    return numbers7;
}
kata7();

function kata8() {
    for(let i = 100; i >= 0;  i--){
        if((i % 3 === 0) || (i % 7 === 0)){
            numbers8.push(i);
        }
    }
    showResults(numbers8,atv8);
    return numbers8
}
kata8();

function kata9() {
    for(let i = 1; i <= 100; i++){
        if((i % 2 === 1) && (i % 5 === 0)){
            numbers9.push(i)
        }
    }
    showResults(numbers9,atv9);
    return numbers9;
}
kata9();

function kata10() {
    for(let i = 0; i < sampleArray.length; i++){
        numbers10.push(sampleArray[i])
    }
    showResults(numbers10, atv10);
    return numbers10;
}
kata10();

function kata11() {
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 === 0 ){
            numbers11.push(sampleArray[i]);
        }
    }
    showResults(numbers11,atv11)
    return numbers11;
}
kata11();

function kata12() {
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 === 1){
            numbers12.push(sampleArray[i]);
        }
    }
    showResults(numbers12,atv12)
    return numbers12;
}
kata12();

function kata13() {
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 8 === 0){
            numbers13.push(sampleArray[i]);
        }
    }
    showResults(numbers13,atv13)
    return numbers13;
}
kata13();

function kata14() {
    for(let i = 0; i < sampleArray.length; i++){
        let square = sampleArray[i] ** 2;
        numbers14.push(square);
    }
    showResults(numbers14,atv14)
    return numbers14;
}
kata14();

function kata15() {
    let soma = 0;

    for(let i = 1; i <= 20; i++){
        soma += i;
    }
    numbers15.push(soma)
    showResults(numbers15,atv15)
    return numbers15;
}
kata15()

function kata16() {
    let soma = 0;

    for( let i = 0; i < sampleArray.length; i++){
        soma += sampleArray[i];
    }
    numbers16.push(soma);
    showResults(numbers16,atv16);
}
kata16();


function kata17() {
    let compare = sampleArray[0];

    for( let i = 1; i < sampleArray.length; i++){
        let item = sampleArray[i];
        if(item < compare){
            compare = item;
        }
    }
    numbers17.push(compare);
    showResults(numbers17,atv17);
}
kata17();

function kata18() {
    let compare = sampleArray[0];

    for( let i = 1; i < sampleArray.length; i++){
        let item = sampleArray[i];
        if(item > compare){
            compare = item;
        }
    }
    numbers18.push(compare);
    showResults(numbers18,atv18);
}
kata18();



function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
