let form = document.querySelector(`.form`);
let input1 = document.querySelector(`.input1`);
let input2 = document.querySelector(`.input2`);
let box = document.querySelector(`.box`)

form.addEventListener(`submit`,(one)=>{
    one.preventDefault();
    let x = Number(input1.value);
    input1.value='';
    let y = Number(input2.value);
    input2.value='';
    box.textContent= x+y;
})