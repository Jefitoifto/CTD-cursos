

const arrowF = (numA, numB) => {
    
    for(var i = 1; i <=100; i++){
        if(i % numA == 0 && i % numB == 0){
            console.log(i," FizzBuzz");
        } else if (i % numA == 0){
            console.log(i," Fizz");
        } else if (i % numB == 0){
            console.log(i," Buz");
        } else {
            console.log(i)
        }
    }
}

arrowF(3,5);

/*const fizzBuzz = (numA, numB) => {

    let n = 1;

    while (n <= 100) {
        if(n % numA == 0 && n % numB == 0){
            console.log("FizzBuzz");
        }else if(n % numB == 0){
            console.log("Buzz");
        }else if(n % numA == 0){
            console.log("Fizz");
        } else {
            console.log(n);
        }
        n++;
    }
}

fizzBuzz (5, 3);*/
