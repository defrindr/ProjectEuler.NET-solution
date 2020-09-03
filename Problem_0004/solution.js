let final_result = 0;

const floor = (number) => {
    return number - ( number % 1);
};

for(let i = 111; i <= 999; i++){
    for (let j = 111; j <= 999; j++) {
        let result = String(i * j);
        let reverse_result = result.split("").reverse().join("");

        if(result == reverse_result){
            result = i * j;
            
            if (final_result < i * j){
                final_result = i * j;
            }
        }
    }
}

console.log(final_result)
