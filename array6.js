var products = ['Tulasi','Cow dung cake','Dhoopam','panchangavya','Desi cow ghee'];
console.log(products);
console.log('-------');

//suppose if we want  to find all products whose name contains cow then
//achieve this using loop like below
var filteredProducts = [];
for(var item of products){
    //console.log(item);
    if(item.toLowerCase().includes('cow')){
    filteredProducts.push(item);
}
}
 
  console.log(filteredProducts);
  console.log('-------');


//same can be achieved in more simple manner if we use filter method:
var filteredProducts2 = products.filter(function(item){
    return item.toLowerCase().includes('cow');
});
console.log(filteredProducts2);

//same as above but using arrow function
var filteredProducts3 = products.filter(item => item.toLowerCase().includes('cow'));
console.log(filteredProducts3);

