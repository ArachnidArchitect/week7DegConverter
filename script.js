// (0°C × 9/5) + 32 = 32°F

let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelector('h1');

button.addEventListener('click', ()=>{
    intInput = +input.value
    calculation = ((intInput * 9/5) + 32).toString()
//   console.log((intInput * 9/5) + 32).toString()
    result.innerText = (input.value + '°C = '+calculation + '°F')
    result.style.backgroundColor = "bisque";
})

