let input = document.getElementById('get');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
     let val = button.innerText;
     button.addEventListener('click', () => {
             operations(val);
         })
});

function operations(val) {
    if (val==="AC") {
        input.value = '';
    } else if (val==="backspace") {
        input.value = input.value.slice(0,-1);
    } else if (val==="X") {
        input.value += "*";
    } else if (val==="rt") {
        input.value = Math.sqrt(input.value);
    } else if (val==="%") {
        input.value = input.value/100;
    } else if (val==="=") {
        input.value = eval(input.value);
    } else {
        input.value +=val;
    }

};
