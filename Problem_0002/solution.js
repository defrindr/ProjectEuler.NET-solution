let [x, y, z] = [0, 1, 0];
let result = 0;

while (y < 4000000) {
    z = x + y;
    [x, y] = [y, z];

    if (y % 2 == 0) result += y;
}

console.log(result);
