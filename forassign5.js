//check if anumber is palindrome or not
var num=4;

for(var i=2; i<=parseInt(num/2); i++){
   if(num%i==0)
   break;
}

if(i==parseInt(num/2))
  console.log(num + "is palimdrome  number");
  else
   console.log(num + "is not palindrome number");
