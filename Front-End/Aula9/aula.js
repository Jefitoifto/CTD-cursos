function obterCargoPelo(salario){
    let cargo;
    if(salario < 2500.00){
        cargo = "Junior";
    }
    if(salario < 5000.00){
        cargo = "Pleno";
    }
    if(salario < 10000.00){
        cargo = "Senior";
    }
    console.log(cargo);
    return cargo;
}

obterCargoPelo(3000);