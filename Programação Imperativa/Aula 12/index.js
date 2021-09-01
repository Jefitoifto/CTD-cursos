const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let pontosA = 0
    let pontosB = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            pontosA ++
        } else if(b[i] > a[i]){
            pontosB ++
        }
    }
    console.log(pontosA, pontosB)
}
encontrarGanhador(alicia, bob)
