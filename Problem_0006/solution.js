const sum = (num, q=1) => {
    return (num == 0) ? 0 : (num ** q) + sum(num-1,q);
}

let first_number = sum(100) ** 2;
let second_number = sum(100,2);

console.log(first_number - second_number);