//adding function to an existing object
var ford =  { name:"Aspire",
              color:"blue"

};

ford.printdetails = function(){
    console.log(this.name +  " " + this.color);
}

 ford.printdetails();