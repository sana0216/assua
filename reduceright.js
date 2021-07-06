var array =[[2,8],[4,7],[6,1],[5,3]].reduceRight(
    (presentvalue, currentvalue) => presentvalue.concat(currentvalue)
);

console.log(array);


