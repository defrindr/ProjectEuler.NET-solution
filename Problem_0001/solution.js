let sum_of_all = 0;

for (i = 0; i < 1000; i++)
    if (i % 3 == 0 || i % 5 == 0) sum_of_all += i;

console.log(sum_of_all);
