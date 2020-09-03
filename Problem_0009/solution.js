let target = 1000;

const sq = (number) => {
    return number ** 2;
}

for (let a = 0; a < target; a++) {
    for (let b = 0; b < target; b++) {
        let c = Math.sqrt(sq(a) + sq(b));

        if (a+b+c === 1000) {
            console.log("The product from abc is " + (a * b * c));
        }
    }
}
