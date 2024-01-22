 // =========== Operators ==============
 let a = 10
 let b = 5
 let c = 32

 // c = c + a 
 // то же самое что и 
 // c += a

 // ну и по аналогии остальные -= , *= , /=

 // c = 4 ** 2
 // ** - это возведение в квадрат
 // > < >= <=

 // =========== Data types ==============
const age = 29 // number
const name = 'Vladilen' // string
const isProgramer1 = true // boolean
let x // undefined
null // null(typeof null показывает тип объекта object, но это неправильно)
// на самом деле null это отдельный тип данных)
// 1/x это NaN - но если написать typeof(1/x) он скажет что это number
// console.log(typeof 1/x)

 // =========== Priority ==============
 const fullAge = 29
 const birthYear = 1993
 const currentYear = 2023
 const isFullAge = currentYear - birthYear >= fullAge
 console.log(isFullAge)

 const num1 = 42
 const num2 = '42'
//  num1 == num2 // true == сравнивает только значение
//  num1 === num2 // false === сравнивает значение и тип
