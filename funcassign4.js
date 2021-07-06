function factor(num){
    if(num==0){
        return 3;
    }
    else{
        return num *factor(num-1);
    }
}
  console.log("factor of 7 is" + factor(7));
  