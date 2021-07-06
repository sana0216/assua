var  a =()=> {
    console.log("a function is called ")
}
 var  b = (myVar)=>{
     console.log("b  function is called ")
     myVar();
 }
  b(a);

 setInterval(a, 3000); 

 setTimeout(b,2000);
 
