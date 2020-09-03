const sum_of_prime_with_sieve_eratosthenes = (number) => {
    let list_number = Array(number).fill(true);
    let total = 0;

    for(let i = 2; i<number;i++){
        if(list_number[i]){
            total += i;
            mul = i * i;
            while(mul < number){
                list_number[mul] = false;
                mul += i;
            }
        }
    }

    return total;
};

console.log(sum_of_prime_with_sieve_eratosthenes(2000000));
