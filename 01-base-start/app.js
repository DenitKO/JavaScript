let num = 42
let fisrtName = "Vladilen"
const isProgramer = true

// isProgramer = false // error because of const


/* Can do
let $ = 'test'
let $num = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' // bad Naming
let myNum = 34 // good Naming
let num42 = 10
*/

/* Restricted
let 42num = '11' // Нельзя именовать с цифр
let my-name = 'sada' // Нельзя в переменных использовать дефис
let const // Нельзя использовать зарезервированные слова под переменные УДИВИТЕЛЬНО 
*/

/* Вывод инормации
alert(fisrtName)
console.log(fisrtName)
fisrtName = 'Max'
console.log('Name: ', fisrtName)
console.log('num, isProgramer: ', num, isProgramer)

console.log('num + 10:', num + 10)
console.log('num - 10:', num - 10)
console.log('num * 10:', num * 10)
console.log('num / 10:', num / 10)
console.log('после операций без присвоения, значение переменной не меняется: ', num)
*/

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus') 
const minusBtn = document.getElementById('minus')
let action = '+'


plusBtn.onclick = function(){
    action = '+'
}

minusBtn.onclick = function(){
    action = '-'
}

function printResult(result){
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSimbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSimbol == '+'){
        return num1 + num2
    }

    if (actionSimbol == '-'){
        return num1 - num2
    }
}


submitBtn.onclick = function () { 
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}
