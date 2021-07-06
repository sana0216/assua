//property pointing to a function (method)
var myCar = {
      name:"audi",
      model:2019,
      color:"white",
      speed:0,
      move:function () {
          this.speed++;
      }
};
 myCar.move (); myCar.move (); myCar.move ();
 console.log(myCar.speed);
 