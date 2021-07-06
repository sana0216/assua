//prime from 1 to 100
var from=10;
var to=20;
var i;
var j;

for(i=from; i<=to; i++){
    var count=0;
    for(j=i; j>=1; j--){
        if(i%j==0)
        count++;
    }
    if(count==2)
    console.log(i);

}