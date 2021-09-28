function podeSubir(altura,acomp){
    if(altura > 1.40 && altura < 2.00){
        console.log('Acesso autorizado')
    } else if (altura < 1.40 && acomp ){
        console.log('Acesso autorizado somente com acompanhante')
    } else {
        console.log('Acesso negado')
    }
}
podeSubir(1.20, false)