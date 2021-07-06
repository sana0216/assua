var  checkMultiple = (num) =>{
    if(num%3==0 || num%7==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkMultiple(12));
