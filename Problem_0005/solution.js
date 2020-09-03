let result, number = 0,
process = true,
divisible = Array(20).fill(1).map( (v,i) => v+i);

while(process){
    number ++;
    let is_continue = false;
    divisible.forEach( v => {
        if(number % v !== 0) is_continue = true;
    });

    if(is_continue){
        continue;
    }

    result = number;
    process = false;
}

console.log(result);
