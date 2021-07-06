function largestval(a,b,c){
    max_val = 0;
    if(a>b){
        max_val = a;
        }
        else {
            max_val =b;
        }
        if(c>max_val){
            max_val=c;
        }
        return max_val;
}

console.log(largestval(1,0,9));
