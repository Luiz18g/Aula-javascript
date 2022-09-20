/*operadores logicos

&&->operador E(and)
||->operador OU(or)
!->operador Não(not)
*/

let n1 = 10
let n2 = 5
n3 = 20
//console.log(!(n1>n2))
//console.log(!(false))

console.log(n1>n2 && n1>n3)
console.log(n1 > n2 || n1 > n3)

//operador &&-->avalia todas as operações,se uma for FALSE o resultado e FALSE
//operador ||-->avalia as operações,se uma for TRUE o resultado e TRUE