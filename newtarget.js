function User() {
    console.log(new.target);
    if(new.target!=undefined){
        //do some object creation
        //related work
    }else{
        //do something appropriate 
    }
}

User(); //called for not creating
//an Object so new.target value will be 
//undefined

var obj = new User(); //new.target value will be 
//[Function: User]
