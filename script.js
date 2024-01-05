let input = document.getElementById('result');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click',(e) => {
    e.preventDefault();
  })
})
function appendNumber(num) {
  input.value += num;
}

function appendOperator(operator) {
  input.value += operator;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = 'Error';
  }
}

function clearInput() {
  input.value = '';
}
