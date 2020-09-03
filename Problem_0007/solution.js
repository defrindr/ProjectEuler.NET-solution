const isPrime = (number) => {
    if(number <= 1 || number % 2==0) return false;
    if(number == 2) return true;

    let counter = 3;
    
    while( (counter * counter) <= number){
        if(number % counter == 0){
            return false;
        }else{
            counter += 2;
        }
    }
    return true;
}

let prime = 1;
let number = 1;


while (prime < 10001) {
    number = number + 2;
    if (isPrime(number)) {
        prime++;
    }
}

console.log(number);