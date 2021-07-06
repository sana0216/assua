//accessing all properties and values
//present in a object using for... in loop
 var msg1 = {to:01234567,
             msg: "How are you ?",
             delivered: true,
             read: false,
             from:01234567};
 //get all the properties defined in
 //the object msg1
 for(prop in msg1)
    console.log(prop);
    
    
    //properties and values
    for(property in msg1)
        console.log(property + " " +msg1[property]);

        console.log('--------');
        console.log(msg1["delivered"]);
        var keyX = "delivered";
        console.log(msg1[keyX]);
