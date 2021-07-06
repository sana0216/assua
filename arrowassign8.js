var countDigit=(n)=>{
  let count = 0;
   while (n!=0)
   {
     n=(n/10);
     ++count;
   }
   return count;
}

console.log("Number of digits : "  + countDigit(9));