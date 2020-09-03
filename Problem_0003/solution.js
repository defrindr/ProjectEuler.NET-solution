let number = 600851475143;
let primes = [];

for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        if (!primes.length) primes.push(i);
        else {
            let is_add = true;
            primes.forEach((value) => {
                if (i % value === 0) is_add = false;
            });
            if (is_add) primes.push(i);
        }
        number /= i;
    }
}

console.log(primes[primes.length - 1]);