let acumulador = 1

for (let i=1; i<=5; i++){
    acumulador = acumulador * i
}
console.log(acumulador)
let repetir = true
while (repetir){
    let palabra = prompt("Ingres America para finalizar").toLowerCase()

    if(palabra === "america" ){
        repetir = false
    }
}